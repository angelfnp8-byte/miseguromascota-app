import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/require-admin";
import { createClient } from "@/lib/supabase/server";
import { animalTypeLabels, capitalizeWords } from "@/lib/animal-labels";
import { deleteAnimalAdmin } from "@/app/admin/actions";
import type { Animal } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Moderar anuncios de adopción",
  robots: { index: false, follow: false },
};

type AnimalWithOwner = Animal & { profiles: { display_name: string | null } | null };

export default async function Page() {
  await requireAdmin("/admin/adopcion");
  const supabase = await createClient();
  const { data } = await supabase
    .from("animals")
    .select("*, profiles!animals_owner_user_id_fkey(display_name)")
    .order("created_at", { ascending: false });
  const animals = (data ?? []) as unknown as AnimalWithOwner[];

  return (
    <div className="mx-auto max-w-[860px] px-5 py-12">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>{" "}
        / Adopción
      </p>
      <h1>Anuncios de adopción</h1>

      <div className="mt-6 flex flex-col gap-3">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4"
          >
            <div>
              <p className="mb-0.5 font-bold">
                {capitalizeWords(animal.name)}{" "}
                <span className="ml-1 rounded-full bg-(--color-secondary-light) px-2.5 py-0.5 text-[0.7rem] font-bold uppercase text-(--color-secondary)">
                  {animal.status === "available" ? "Disponible" : "Adoptado"}
                </span>
              </p>
              <p className="mb-0 text-[0.85rem] text-(--color-text-light)">
                {animalTypeLabels[animal.type]} · {capitalizeWords(animal.location_city)} · publicado por{" "}
                {animal.profiles?.display_name ?? "usuario"}
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/adopcion/${animal.id}`}
                className="rounded-full border border-(--color-border) px-3.5 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
              >
                Ver
              </Link>
              <form action={deleteAnimalAdmin.bind(null, animal.id)}>
                <button
                  type="submit"
                  className="rounded-full border border-red-200 px-3.5 py-1.5 text-[0.85rem] font-semibold text-red-600 hover:bg-red-50"
                >
                  Eliminar
                </button>
              </form>
            </div>
          </div>
        ))}
        {animals.length === 0 && (
          <p className="text-(--color-text-light)">No hay anuncios publicados todavía.</p>
        )}
      </div>
    </div>
  );
}
