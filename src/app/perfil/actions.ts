"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/require-user";

export type ProfileFormState = { error: string | null };

export async function updateProfile(
  _prev: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  const user = await requireUser("/perfil/editar");

  const displayName = String(formData.get("displayName") ?? "").trim();
  const bio = String(formData.get("bio") ?? "").trim();
  const locationCity = String(formData.get("locationCity") ?? "").trim();
  const locationRegion = String(formData.get("locationRegion") ?? "").trim();
  const isShelter = formData.get("isShelter") === "on";

  if (!displayName) return { error: "Indica un nombre para tu perfil." };
  if (bio.length > 500) return { error: "La descripción es demasiado larga (máximo 500 caracteres)." };

  const supabase = await createClient();
  const { error } = await supabase
    .from("profiles")
    .update({
      display_name: displayName,
      bio: bio || null,
      location_city: locationCity || null,
      location_region: locationRegion || null,
      is_shelter: isShelter,
    })
    .eq("id", user.id);

  if (error) return { error: "No se pudo guardar el perfil. Inténtalo de nuevo." };

  revalidatePath(`/perfil/${user.id}`);
  revalidatePath("/perfil/editar");
  redirect(`/perfil/${user.id}`);
}
