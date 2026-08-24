import Link from "next/link";
import type { AnimalWithPhotos } from "@/lib/supabase/types";
import { animalPhotoUrl } from "@/lib/animals";
import { animalTypeIcons, animalTypeLabels, formatAge, formatBreed, vaccinatedLabels } from "@/lib/animal-labels";

export function AnimalCard({ animal }: { animal: AnimalWithPhotos }) {
  const photo = [...animal.animal_photos].sort((a, b) => a.position - b.position)[0];

  return (
    <article className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow)]">
      <div className="aspect-4/3 w-full bg-(--color-secondary-light)">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={animalPhotoUrl(photo.storage_path)}
            alt={animal.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl" aria-hidden>
            {animalTypeIcons[animal.type]}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-[1.05rem]">{animal.name}</h3>
        <p className="mb-2 text-[0.85rem] text-(--color-text-light)">
          {animalTypeLabels[animal.type]} · {formatAge(animal.age_value, animal.age_unit)} ·{" "}
          {formatBreed(animal)}
        </p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-(--color-secondary-light) px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-(--color-secondary)">
            {animal.location_city}
          </span>
          <span className="rounded-full bg-(--color-secondary-light) px-2.5 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-(--color-secondary)">
            {vaccinatedLabels[animal.vaccinated]}
          </span>
        </div>
        <Link
          href={`/adopcion/${animal.id}`}
          className="block rounded-full bg-(--color-primary) px-4 py-2 text-center text-[0.92rem] font-bold text-white hover:bg-(--color-primary-dark)"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
