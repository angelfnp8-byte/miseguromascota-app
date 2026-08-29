import type { AnimalType, Gender, VaccinationStatus, AgeUnit } from "@/lib/supabase/types";

export const animalTypeLabels: Record<AnimalType, string> = {
  perro: "Perro",
  gato: "Gato",
  pajaro: "Pájaro",
  conejo: "Conejo",
  roedor: "Roedor",
  reptil: "Reptil",
  otro: "Otro",
};

export const animalTypeIcons: Record<AnimalType, string> = {
  perro: "🐶",
  gato: "🐱",
  pajaro: "🐦",
  conejo: "🐰",
  roedor: "🐹",
  reptil: "🦎",
  otro: "🐾",
};

export const genderLabels: Record<Gender, string> = {
  macho: "Macho",
  hembra: "Hembra",
  desconocido: "Desconocido",
};

export const vaccinatedLabels: Record<VaccinationStatus, string> = {
  vacunado: "Vacunado",
  no_vacunado: "No vacunado",
  desconocido: "Desconocido",
};

export const ageUnitLabels: Record<AgeUnit, string> = {
  meses: "meses",
  anos: "años",
};

export function formatAge(value: number, unit: AgeUnit): string {
  const label = value === 1 ? ageUnitLabels[unit].replace(/s$/, "") : ageUnitLabels[unit];
  return `${value} ${label}`;
}

export function ageInMonths(value: number, unit: AgeUnit): number {
  return unit === "anos" ? value * 12 : value;
}

export type AgeBracket = "cachorro" | "joven" | "adulto" | "senior";

export const ageBracketLabels: Record<AgeBracket, string> = {
  cachorro: "Cachorro/a (menos de 1 año)",
  joven: "Joven (1-3 años)",
  adulto: "Adulto (3-8 años)",
  senior: "Senior (más de 8 años)",
};

const ageBracketRangesInMonths: Record<AgeBracket, [number, number]> = {
  cachorro: [0, 11],
  joven: [12, 35],
  adulto: [36, 95],
  senior: [96, Infinity],
};

export function matchesAgeBracket(value: number, unit: AgeUnit, bracket: AgeBracket): boolean {
  const months = ageInMonths(value, unit);
  const [min, max] = ageBracketRangesInMonths[bracket];
  return months >= min && months <= max;
}

export function formatTimeAgo(dateIso: string): string {
  const diffMs = Date.now() - new Date(dateIso).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (days <= 0) return "Publicado hoy";
  if (days === 1) return "Publicado hace 1 día";
  if (days < 30) return `Publicado hace ${days} días`;

  const months = Math.floor(days / 30);
  if (months === 1) return "Publicado hace 1 mes";
  if (months < 12) return `Publicado hace ${months} meses`;

  const years = Math.floor(months / 12);
  return years === 1 ? "Publicado hace 1 año" : `Publicado hace ${years} años`;
}

export function hoursSince(dateIso: string): number {
  return (Date.now() - new Date(dateIso).getTime()) / (1000 * 60 * 60);
}

const LOWERCASE_WORDS = new Set(["de", "del", "la", "las", "el", "los", "y"]);

/** Display-only title case — doesn't touch the stored value, just how it's shown. */
export function capitalizeWords(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (i > 0 && LOWERCASE_WORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function formatBreed(animal: {
  breed_type: string;
  breed: string | null;
  mixed_breeds: string | null;
}): string {
  if (animal.breed_type === "definida" && animal.breed) return animal.breed;
  if (animal.breed_type === "cruce" && animal.mixed_breeds) return animal.mixed_breeds;
  return "Cruce";
}
