"use client";

import { updateAnimal } from "@/app/adopcion/actions";
import { AnimalForm } from "@/components/adopcion/AnimalForm";
import type { Animal } from "@/lib/supabase/types";

export function EditAnimalForm({ animal }: { animal: Animal }) {
  const action = updateAnimal.bind(null, animal.id);
  return <AnimalForm action={action} defaultValues={animal} submitLabel="Guardar cambios" />;
}
