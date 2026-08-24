import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/require-user";
import { getMyAnimals } from "@/lib/animals";
import { animalPhotoUrl } from "@/lib/animals";
import { animalTypeIcons, animalTypeLabels, formatAge } from "@/lib/animal-labels";
import { deleteAnimal, markAsAdopted, markAsAvailable } from "@/app/adopcion/actions";
import { EmptyStateIllustration } from "@/components/illustrations/EmptyStateIllustration";

export const metadata: Metadata = {
  title: "Mis publicaciones de adopción",
  robots: { index: false, follow: true },
};

export default async function Page() {
  const user = await requireUser("/adopcion/mis-publicaciones");
  const animals = await getMyAnimals(user.id);

  return (
    <div className="mx-auto max-w-[860px] px-5 pt-10 pb-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1>Mis publicaciones</h1>
        <Link
          href="/adopcion/nuevo"
          className="rounded-full bg-(--color-primary) px-5 py-2.5 font-bold text-white hover:bg-(--color-primary-dark)"
        >
          Publicar otro animal
        </Link>
      </div>

      {animals.length === 0 ? (
        <div className="rounded-2xl bg-(--color-secondary-light) p-8 text-center text-(--color-text-light)">
          <EmptyStateIllustration className="mx-auto mb-3 h-28 w-auto" />
          Todavía no has publicado ningún animal.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {animals.map((animal) => {
            const photo = [...animal.animal_photos].sort((a, b) => a.position - b.position)[0];
            return (
              <div
                key={animal.id}
                className="flex flex-wrap items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4"
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-(--color-secondary-light)">
                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={animalPhotoUrl(photo.storage_path)}
                      alt={animal.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-2xl" aria-hidden>
                      {animalTypeIcons[animal.type]}
                    </div>
                  )}
                </div>

                <div className="min-w-40 flex-1">
                  <p className="mb-0.5 font-bold">
                    {animal.name}{" "}
                    {animal.status === "adopted" && (
                      <span className="ml-1 rounded-full bg-(--color-secondary-light) px-2.5 py-0.5 text-[0.7rem] font-bold uppercase text-(--color-secondary)">
                        Adoptado
                      </span>
                    )}
                  </p>
                  <p className="mb-0 text-[0.85rem] text-(--color-text-light)">
                    {animalTypeLabels[animal.type]} · {formatAge(animal.age_value, animal.age_unit)} ·{" "}
                    {animal.location_city}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/adopcion/${animal.id}`}
                    className="rounded-full border border-(--color-border) px-3.5 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
                  >
                    Ver
                  </Link>
                  <Link
                    href={`/adopcion/${animal.id}/editar`}
                    className="rounded-full border border-(--color-border) px-3.5 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
                  >
                    Editar
                  </Link>
                  {animal.status === "available" ? (
                    <form action={markAsAdopted.bind(null, animal.id)}>
                      <button
                        type="submit"
                        className="rounded-full border border-(--color-border) px-3.5 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
                      >
                        Marcar como adoptado
                      </button>
                    </form>
                  ) : (
                    <form action={markAsAvailable.bind(null, animal.id)}>
                      <button
                        type="submit"
                        className="rounded-full border border-(--color-border) px-3.5 py-1.5 text-[0.85rem] font-semibold hover:bg-(--color-secondary-light)"
                      >
                        Marcar como disponible
                      </button>
                    </form>
                  )}
                  <form action={deleteAnimal.bind(null, animal.id)}>
                    <button
                      type="submit"
                      className="rounded-full border border-red-200 px-3.5 py-1.5 text-[0.85rem] font-semibold text-red-600 hover:bg-red-50"
                    >
                      Eliminar
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
