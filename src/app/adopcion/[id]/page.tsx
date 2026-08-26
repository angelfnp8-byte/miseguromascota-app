import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnimalById, animalPhotoUrl } from "@/lib/animals";
import { createClient } from "@/lib/supabase/server";
import {
  animalTypeIcons,
  animalTypeLabels,
  formatAge,
  formatBreed,
  formatTimeAgo,
  genderLabels,
  hoursSince,
  vaccinatedLabels,
} from "@/lib/animal-labels";
import { ContactSection } from "@/components/adopcion/ContactSection";
import { CompatibilityQuiz } from "@/components/adopcion/CompatibilityQuiz";
import { temperamentLabels } from "@/lib/temperament";
import type { TemperamentTag } from "@/lib/temperament";
import { AdSlot } from "@/components/ads/AdSlot";
import { AD_SLOTS } from "@/lib/adsense";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const animal = await getAnimalById(id);
  if (!animal) return { title: "Animal no encontrado" };

  const title = `${animal.name} — en adopción en ${animal.location_city}`;
  const description =
    animal.description.length >= 40
      ? animal.description.slice(0, 160)
      : `Conoce a ${animal.name}, en adopción en ${animal.location_city} (${animal.location_region}). Contacta de forma segura a través de Mi Seguro Mascota.`;
  const firstPhoto = [...animal.animal_photos].sort((a, b) => a.position - b.position)[0];

  return {
    title,
    description,
    alternates: { canonical: `/adopcion/${id}` },
    robots: { index: animal.status === "available", follow: true },
    openGraph: {
      title,
      description,
      type: "article",
      images: firstPhoto ? [{ url: animalPhotoUrl(firstPhoto.storage_path) }] : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const animal = await getAnimalById(id);
  if (!animal) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isOwner = user?.id === animal.owner_user_id;

  // Un anuncio adoptado deja de ser accesible públicamente pasadas 48h desde
  // que se marcó — el dueño lo sigue viendo siempre en "Mis publicaciones".
  if (animal.status === "adopted" && animal.adopted_at && !isOwner) {
    if (hoursSince(animal.adopted_at) > 48) notFound();
  }

  const photos = [...animal.animal_photos].sort((a, b) => a.position - b.position);

  return (
    <>
    <div className="mx-auto max-w-[860px] px-5 pt-10 pb-14">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/adopcion" className="hover:underline">
          Adopción
        </Link>{" "}
        / {animal.name}
      </p>

      {animal.status === "adopted" && (
        <p className="mb-4 inline-block rounded-full bg-(--color-secondary-light) px-4 py-1.5 text-[0.85rem] font-bold text-(--color-secondary)">
          Ya ha sido adoptado
        </p>
      )}

      <h1>{animal.name}</h1>
      <p className="mb-4 text-[0.85rem] text-(--color-text-light)">{formatTimeAgo(animal.created_at)}</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {photos.map((photo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={photo.id}
                  src={animalPhotoUrl(photo.storage_path)}
                  alt={`${animal.name} — foto ${i + 1}`}
                  className={`rounded-xl object-cover ${i === 0 ? "col-span-2 aspect-video w-full" : "aspect-square w-full"}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-xl bg-(--color-secondary-light) text-6xl" aria-hidden>
              {animalTypeIcons[animal.type]}
            </div>
          )}

          <h2>Sobre {animal.name}</h2>
          <p className="whitespace-pre-line">{animal.description}</p>

          {animal.temperament && animal.temperament.length > 0 && (
            <>
              <h2>Carácter</h2>
              <div className="flex flex-wrap gap-1.5">
                {animal.temperament.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-(--color-secondary-light) px-2.5 py-1 text-[0.75rem] font-bold uppercase tracking-wide text-(--color-secondary)"
                  >
                    {temperamentLabels[tag as TemperamentTag] ?? tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
            <dl className="grid grid-cols-2 gap-x-3 gap-y-3 text-[0.9rem]">
              <Dt label="Tipo" value={animalTypeLabels[animal.type]} />
              <Dt label="Edad" value={formatAge(animal.age_value, animal.age_unit)} />
              <Dt label="Género" value={genderLabels[animal.gender]} />
              <Dt label="Raza" value={formatBreed(animal)} />
              <Dt label="Vacunación" value={vaccinatedLabels[animal.vaccinated]} />
              <Dt label="Ubicación" value={`${animal.location_city}, ${animal.location_region}`} />
            </dl>
          </div>

          {animal.status === "available" && !isOwner && (
            <CompatibilityQuiz temperament={animal.temperament ?? []} />
          )}

          {animal.status === "available" && (
            <ContactSection animalId={animal.id} isOwner={isOwner} />
          )}

          {animal.status === "available" && !isOwner && (
            <p className="text-[0.85rem] text-(--color-text-light)">
              Antes de contactar, lee nuestros{" "}
              <Link href="/adopcion/adopcion-segura" className="underline">
                consejos de adopción segura
              </Link>{" "}
              y resuelve dudas comunes en las{" "}
              <Link href="/adopcion/preguntas-frecuentes" className="underline">
                preguntas frecuentes
              </Link>
              .
            </p>
          )}
        </aside>
      </div>
    </div>
    <AdSlot slot={AD_SLOTS.contentBottom} />
    </>
  );
}

function Dt({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-(--color-text-light)">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}
