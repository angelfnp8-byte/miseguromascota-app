"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/require-user";
import { isTemperamentTag } from "@/lib/temperament";
import type {
  AnimalType,
  AgeUnit,
  Gender,
  BreedType,
  VaccinationStatus,
} from "@/lib/supabase/types";

export type AnimalFormState = { error: string | null };

const ALLOWED_PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_PHOTOS = 6;

type AnimalFieldsInput = {
  type: AnimalType;
  name: string;
  age_value: number;
  age_unit: AgeUnit;
  gender: Gender;
  breed_type: BreedType;
  breed: string | null;
  mixed_breeds: string | null;
  location_city: string;
  location_region: string;
  vaccinated: VaccinationStatus;
  description: string;
  contact_phone: string;
  contact_email: string;
  temperament: string[];
};

type ParseResult =
  | { ok: true; fields: AnimalFieldsInput }
  | { ok: false; error: string };

function parseAnimalFields(formData: FormData): ParseResult {
  const type = String(formData.get("type") ?? "") as AnimalType;
  const name = String(formData.get("name") ?? "").trim();
  const ageValue = Number(formData.get("ageValue"));
  const ageUnit = String(formData.get("ageUnit") ?? "") as AgeUnit;
  const gender = String(formData.get("gender") ?? "") as Gender;
  const breedType = String(formData.get("breedType") ?? "") as BreedType;
  const breed = String(formData.get("breed") ?? "").trim();
  const mixedBreeds = String(formData.get("mixedBreeds") ?? "").trim();
  const locationCity = String(formData.get("locationCity") ?? "").trim();
  const locationRegion = String(formData.get("locationRegion") ?? "").trim();
  const vaccinated = String(formData.get("vaccinated") ?? "") as VaccinationStatus;
  const description = String(formData.get("description") ?? "").trim();
  const contactPhone = String(formData.get("contactPhone") ?? "").trim();
  const contactEmail = String(formData.get("contactEmail") ?? "").trim();
  const temperament = [...new Set(formData.getAll("temperament").map(String))].filter(isTemperamentTag);

  if (!name) return { ok: false, error: "Indica el nombre del animal." };
  if (!Number.isFinite(ageValue) || ageValue < 0)
    return { ok: false, error: "La edad no puede ser negativa." };
  if (!locationCity || !locationRegion)
    return { ok: false, error: "Indica la ciudad y la provincia/región." };
  if (!description) return { ok: false, error: "Añade una descripción." };
  if (!contactPhone || !contactEmail)
    return { ok: false, error: "El teléfono y el email de contacto son obligatorios." };
  if (!/^\S+@\S+\.\S+$/.test(contactEmail))
    return { ok: false, error: "El email de contacto no es válido." };

  return {
    ok: true,
    fields: {
      type,
      name,
      age_value: Math.round(ageValue),
      age_unit: ageUnit,
      gender,
      breed_type: breedType,
      breed: breedType === "definida" && breed ? breed : null,
      mixed_breeds: breedType === "cruce" && mixedBreeds ? mixedBreeds : null,
      location_city: locationCity,
      location_region: locationRegion,
      vaccinated,
      description,
      contact_phone: contactPhone,
      contact_email: contactEmail,
      temperament,
    },
  };
}

async function uploadPhotos(
  supabase: Awaited<ReturnType<typeof createClient>>,
  userId: string,
  animalId: string,
  formData: FormData,
) {
  const files = formData.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);

  for (const file of files.slice(0, MAX_PHOTOS)) {
    if (!ALLOWED_PHOTO_TYPES.has(file.type)) continue;
    if (file.size > MAX_PHOTO_BYTES) continue;

    const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
    const path = `${userId}/${animalId}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage.from("animal-photos").upload(path, file, {
      contentType: file.type,
    });
    if (uploadError) {
      console.error("Photo upload failed:", uploadError.message);
      continue;
    }

    await supabase.from("animal_photos").insert({ animal_id: animalId, storage_path: path });
  }
}

export async function createAnimal(
  _prev: AnimalFormState,
  formData: FormData,
): Promise<AnimalFormState> {
  const user = await requireUser("/adopcion/nuevo");
  const parsed = parseAnimalFields(formData);
  if (!parsed.ok) return { error: parsed.error };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("animals")
    .insert({ ...parsed.fields, owner_user_id: user.id })
    .select("id")
    .single();

  if (error || !data) return { error: "No se pudo publicar el anuncio. Inténtalo de nuevo." };

  await uploadPhotos(supabase, user.id, data.id, formData);

  revalidatePath("/adopcion");
  redirect(`/adopcion/${data.id}`);
}

export async function updateAnimal(
  animalId: string,
  _prev: AnimalFormState,
  formData: FormData,
): Promise<AnimalFormState> {
  const user = await requireUser(`/adopcion/${animalId}/editar`);
  const parsed = parseAnimalFields(formData);
  if (!parsed.ok) return { error: parsed.error };

  const supabase = await createClient();
  const { error } = await supabase
    .from("animals")
    .update(parsed.fields)
    .eq("id", animalId)
    .eq("owner_user_id", user.id);

  if (error) return { error: "No se pudo guardar el anuncio. Inténtalo de nuevo." };

  await uploadPhotos(supabase, user.id, animalId, formData);

  revalidatePath("/adopcion");
  revalidatePath(`/adopcion/${animalId}`);
  redirect(`/adopcion/${animalId}`);
}

export async function deleteAnimalPhoto(animalId: string, photoId: string, storagePath: string) {
  const user = await requireUser(`/adopcion/${animalId}/editar`);
  const supabase = await createClient();

  await supabase.storage.from("animal-photos").remove([storagePath]);
  await supabase.from("animal_photos").delete().eq("id", photoId);

  revalidatePath(`/adopcion/${animalId}/editar`);
  void user;
}

export async function deleteAnimal(animalId: string) {
  const user = await requireUser("/adopcion/mis-publicaciones");
  const supabase = await createClient();

  const { error } = await supabase
    .from("animals")
    .delete()
    .eq("id", animalId)
    .eq("owner_user_id", user.id);

  if (!error) {
    revalidatePath("/adopcion");
    revalidatePath("/adopcion/mis-publicaciones");
  }
  redirect("/adopcion/mis-publicaciones");
}

export async function markAsAdopted(animalId: string) {
  const user = await requireUser("/adopcion/mis-publicaciones");
  const supabase = await createClient();

  await supabase
    .from("animals")
    .update({ status: "adopted", adopted_at: new Date().toISOString() })
    .eq("id", animalId)
    .eq("owner_user_id", user.id);

  revalidatePath("/adopcion");
  revalidatePath("/adopcion/mis-publicaciones");
  revalidatePath(`/adopcion/${animalId}`);
}

export async function markAsAvailable(animalId: string) {
  const user = await requireUser("/adopcion/mis-publicaciones");
  const supabase = await createClient();

  await supabase
    .from("animals")
    .update({ status: "available", adopted_at: null })
    .eq("id", animalId)
    .eq("owner_user_id", user.id);

  revalidatePath("/adopcion");
  revalidatePath("/adopcion/mis-publicaciones");
  revalidatePath(`/adopcion/${animalId}`);
}
