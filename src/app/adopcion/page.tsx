import type { Metadata } from "next";
import Link from "next/link";
import { getAnimals, type AnimalFilters } from "@/lib/animals";
import { AnimalCard } from "@/components/adopcion/AnimalCard";
import { animalTypeLabels, genderLabels, vaccinatedLabels } from "@/lib/animal-labels";
import type { AnimalType, Gender, VaccinationStatus } from "@/lib/supabase/types";
import { EmptyStateIllustration } from "@/components/illustrations/EmptyStateIllustration";
import { FILTERABLE_TEMPERAMENT_TAGS, temperamentLabels } from "@/lib/temperament";
import { dogBreeds, catBreeds, rabbitBreeds } from "@/lib/breeds";

const allBreeds = [...dogBreeds, ...catBreeds, ...rabbitBreeds];

const adoptionGuides = [
  { label: "Cómo funciona la adopción", href: "/adopcion/como-funciona" },
  { label: "Adopción segura", href: "/adopcion/adopcion-segura" },
  { label: "Preguntas frecuentes", href: "/adopcion/preguntas-frecuentes" },
  { label: "Cuidados los primeros días", href: "/adopcion/cuidados-primeros-dias" },
];

export const metadata: Metadata = {
  title: "Adopción de mascotas",
  description: "Perros, gatos y otros animales en adopción en España. Busca por tipo, edad, ubicación y más.",
  alternates: { canonical: "/adopcion" },
};

type SearchParams = { [key: string]: string | string[] | undefined };

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function list(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default async function AdopcionPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const filters: AnimalFilters = {
    type: (first(params.type) as AnimalType) || undefined,
    gender: (first(params.gender) as Gender) || undefined,
    breedType: (first(params.breedType) as "definida" | "cruce") || undefined,
    vaccinated: (first(params.vaccinated) as VaccinationStatus) || undefined,
    location: first(params.location) || undefined,
    breed: first(params.breed) || undefined,
    temperament: list(params.temperament),
  };

  const animals = await getAnimals(filters);

  return (
    <div className="mx-auto max-w-[1120px] px-5 pt-10 pb-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-eyebrow">Adopción responsable</p>
          <h1>Adopción de mascotas</h1>
          <p className="mb-0 text-(--color-text-light)">
            {animals.length} animal{animals.length === 1 ? "" : "es"} en adopción ahora mismo.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/adopcion/mis-publicaciones"
            className="rounded-full border-2 border-(--color-border) px-6 py-3 font-bold text-(--color-text) hover:bg-(--color-secondary-light)"
          >
            Mis anuncios
          </Link>
          <Link
            href="/adopcion/nuevo"
            className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark)"
          >
            Publicar un animal
          </Link>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {adoptionGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="rounded-full bg-(--color-secondary-light) px-3.5 py-1.5 text-[0.82rem] font-semibold text-(--color-secondary) hover:underline"
          >
            {guide.label}
          </Link>
        ))}
      </div>

      <form
        method="get"
        className="mb-8 rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <label className="flex flex-col gap-1 text-[0.85rem]">
          Tipo
          <select name="type" defaultValue={filters.type ?? ""} className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2">
            <option value="">Todos</option>
            {Object.entries(animalTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-[0.85rem]">
          Género
          <select name="gender" defaultValue={filters.gender ?? ""} className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2">
            <option value="">Todos</option>
            {Object.entries(genderLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-[0.85rem]">
          Tipo de raza
          <select name="breedType" defaultValue={filters.breedType ?? ""} className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2">
            <option value="">Todas</option>
            <option value="definida">Raza definida</option>
            <option value="cruce">Cruce</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 text-[0.85rem]">
          Raza
          <input
            type="text"
            name="breed"
            list="breed-search-options"
            defaultValue={filters.breed ?? ""}
            placeholder="p. ej. Labrador"
            className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2"
          />
          <datalist id="breed-search-options">
            {allBreeds.map((breed) => (
              <option key={breed} value={breed} />
            ))}
          </datalist>
        </label>

        <label className="flex flex-col gap-1 text-[0.85rem]">
          Vacunación
          <select name="vaccinated" defaultValue={filters.vaccinated ?? ""} className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2">
            <option value="">Todas</option>
            {Object.entries(vaccinatedLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-[0.85rem]">
          Ubicación
          <input
            type="text"
            name="location"
            defaultValue={filters.location ?? ""}
            placeholder="Ciudad o provincia"
            className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2"
          />
        </label>
        </div>

        <fieldset className="mt-4 border-t border-(--color-border) pt-4">
          <legend className="mb-1.5 px-0 text-[0.85rem] font-semibold">Rasgos</legend>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {FILTERABLE_TEMPERAMENT_TAGS.map((tag) => (
              <label key={tag} className="flex items-center gap-1.5 text-[0.85rem]">
                <input
                  type="checkbox"
                  name="temperament"
                  value={tag}
                  defaultChecked={filters.temperament?.includes(tag)}
                />
                {temperamentLabels[tag]}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 flex items-end gap-2">
          <button
            type="submit"
            className="rounded-full bg-(--color-secondary) px-5 py-2 text-[0.9rem] font-bold text-white"
          >
            Filtrar
          </button>
          <Link href="/adopcion" className="text-[0.9rem] text-(--color-text-light) underline">
            Quitar filtros
          </Link>
        </div>
      </form>

      {animals.length === 0 ? (
        <div className="rounded-2xl bg-(--color-secondary-light) p-8 text-center text-(--color-text-light)">
          <EmptyStateIllustration className="mx-auto mb-3 h-28 w-auto" />
          No hay animales que coincidan con esos filtros ahora mismo.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}
