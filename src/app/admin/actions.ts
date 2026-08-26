"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/require-admin";

export type AdminFormState = { error: string | null };

function parseEuros(value: FormDataEntryValue | null): number | null {
  let str = String(value ?? "").trim();
  if (!str) return null;
  // Spanish format uses "." as the thousands separator and "," as the decimal
  // mark — strip dots before swapping the comma so "1.234,56" parses right.
  if (str.includes(",")) str = str.replace(/\./g, "").replace(",", ".");
  const n = Number(str);
  if (!Number.isFinite(n) || n < 0) return null;
  return Math.round(n * 100);
}

export async function updateInsurer(
  insurerId: string,
  _prev: AdminFormState,
  formData: FormData,
): Promise<AdminFormState> {
  await requireAdmin("/admin/aseguradoras");

  const priceFrom = parseEuros(formData.get("priceFrom"));
  const priceMid = parseEuros(formData.get("priceMid"));
  const priceFull = parseEuros(formData.get("priceFull"));
  const affiliateEnabled = formData.get("affiliateEnabled") === "on";
  const affiliateUrl = String(formData.get("affiliateUrl") ?? "").trim();
  const affiliateProvider = String(formData.get("affiliateProvider") ?? "").trim();

  if (affiliateEnabled && !affiliateUrl) {
    return { error: "Si activas la afiliación, indica la URL de afiliado." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("insurers")
    .update({
      price_from_cents: priceFrom,
      price_mid_cents: priceMid,
      price_full_cents: priceFull,
      affiliate_enabled: affiliateEnabled,
      affiliate_url: affiliateEnabled ? affiliateUrl : null,
      affiliate_provider: affiliateEnabled && affiliateProvider ? affiliateProvider : null,
      last_updated: new Date().toISOString().slice(0, 10),
    })
    .eq("id", insurerId);

  if (error) return { error: "No se pudo guardar. Inténtalo de nuevo." };

  revalidatePath("/admin/aseguradoras");
  revalidatePath("/comparador");
  redirect("/admin/aseguradoras");
}

export async function deleteAnimalAdmin(animalId: string) {
  await requireAdmin("/admin/adopcion");
  const supabase = await createClient();

  const { data: photos } = await supabase
    .from("animal_photos")
    .select("storage_path")
    .eq("animal_id", animalId);

  await supabase.from("animals").delete().eq("id", animalId);

  if (photos && photos.length > 0) {
    await supabase.storage.from("animal-photos").remove(photos.map((p) => p.storage_path));
  }

  revalidatePath("/admin/adopcion");
  revalidatePath("/adopcion");
}
