import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/require-admin";

export const metadata: Metadata = {
  title: "Panel de administración",
  robots: { index: false, follow: false },
};

export default async function Page() {
  await requireAdmin("/admin");

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <h1>Panel de administración</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/admin/aseguradoras"
          className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 hover:bg-(--color-secondary-light)"
        >
          <h3 className="mb-1.5">Aseguradoras</h3>
          <p className="mb-0 text-(--color-text-light)">
            Precios orientativos y configuración de afiliación del comparador.
          </p>
        </Link>
        <Link
          href="/admin/adopcion"
          className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 hover:bg-(--color-secondary-light)"
        >
          <h3 className="mb-1.5">Anuncios de adopción</h3>
          <p className="mb-0 text-(--color-text-light)">
            Revisa y modera cualquier publicación, no solo las tuyas.
          </p>
        </Link>
      </div>
    </div>
  );
}
