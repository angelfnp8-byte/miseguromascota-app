import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/require-admin";
import { createClient } from "@/lib/supabase/server";
import { formatPrice } from "@/lib/insurer-labels";

export const metadata: Metadata = {
  title: "Administrar aseguradoras",
  robots: { index: false, follow: false },
};

export default async function Page() {
  await requireAdmin("/admin/aseguradoras");
  const supabase = await createClient();
  const { data: insurers } = await supabase.from("insurers").select("*").order("name");

  return (
    <div className="mx-auto max-w-[860px] px-5 py-12">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>{" "}
        / Aseguradoras
      </p>
      <h1>Aseguradoras</h1>
      <p className="text-(--color-text-light)">
        Los precios y la afiliación quedan vacíos/desactivados hasta que se confirmen con datos
        reales. No se inventan cifras.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {(insurers ?? []).map((insurer) => (
          <div
            key={insurer.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4"
          >
            <div>
              <p className="mb-0.5 font-bold">{insurer.name}</p>
              <p className="mb-0 text-[0.85rem] text-(--color-text-light)">
                {formatPrice(insurer.price_from_cents) ?? "Sin precio"} ·{" "}
                {insurer.affiliate_enabled ? "Afiliación activa" : "Sin afiliación"}
              </p>
            </div>
            <Link
              href={`/admin/aseguradoras/${insurer.id}/editar`}
              className="rounded-full border border-(--color-border) px-4 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
