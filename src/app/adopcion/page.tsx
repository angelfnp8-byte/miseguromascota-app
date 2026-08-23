import type { Metadata } from "next";
import Link from "next/link";
import { getAnimals, type AnimalFilters } from "@/lib/animals";
import { AnimalCard } from "@/components/adopcion/AnimalCard";
import { animalTypeLabels, genderLabels, vaccinatedLabels } from "@/lib/animal-labels";
import type { AnimalType, Gender, VaccinationStatus } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Adopción de mascotas",
  description: "Perros, gatos y otros animales en adopción en España. Busca por tipo, edad, ubicación y más.",
  alternates: { canonical: "/adopcion" },
};

type SearchParams = { [key: string]: string | string[] | undefined };

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
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
  };

  const animals = await getAnimals(filters);

  return (
    <div className="mx-auto max-w-[1120px] px-5 pt-10 pb-14">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1>Adopción de mascotas</h1>
          <p className="mb-0 text-(--color-text-light)">
            {animals.length} animal{animals.length === 1 ? "" : "es"} en adopción ahora mismo.
          </p>
        </div>
        <Link
          href="/adopcion/nuevo"
          className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark)"
        >
          Publicar un animal
        </Link>
      </div>

      <form
        method="get"
        className="mb-8 grid grid-cols-2 gap-3 rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 sm:grid-cols-3 lg:grid-cols-5"
      >
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
          Raza
          <select name="breedType" defaultValue={filters.breedType ?? ""} className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2 py-2">
            <option value="">Todas</option>
            <option value="definida">Raza definida</option>
            <option value="cruce">Cruce</option>
          </select>
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

        <div className="col-span-2 flex items-end gap-2 sm:col-span-3 lg:col-span-5">
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
