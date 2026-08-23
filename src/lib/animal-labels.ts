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

export function formatBreed(animal: {
  breed_type: string;
  breed: string | null;
  mixed_breeds: string | null;
}): string {
  if (animal.breed_type === "definida" && animal.breed) return animal.breed;
  if (animal.breed_type === "cruce" && animal.mixed_breeds) return animal.mixed_breeds;
  return "Cruce";
}
