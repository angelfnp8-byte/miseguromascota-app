import { createClient } from "@/lib/supabase/server";
import type { AnimalType, Gender, VaccinationStatus, AnimalWithPhotos } from "@/lib/supabase/types";

export type AnimalFilters = {
  type?: AnimalType;
  gender?: Gender;
  breedType?: "definida" | "cruce";
  vaccinated?: VaccinationStatus;
  location?: string;
  breed?: string;
  minAge?: number;
  maxAge?: number;
  temperament?: string[];
};

export async function getAnimals(filters: AnimalFilters = {}): Promise<AnimalWithPhotos[]> {
  const supabase = await createClient();
  let query = supabase
    .from("animals")
    .select("*, animal_photos(*)")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  if (filters.type) query = query.eq("type", filters.type);
  if (filters.gender) query = query.eq("gender", filters.gender);
  if (filters.breedType) query = query.eq("breed_type", filters.breedType);
  if (filters.vaccinated) query = query.eq("vaccinated", filters.vaccinated);
  if (filters.location) {
    query = query.or(
      `location_city.ilike.%${filters.location}%,location_region.ilike.%${filters.location}%`,
    );
  }
  if (filters.breed) {
    query = query.or(`breed.ilike.%${filters.breed}%,mixed_breeds.ilike.%${filters.breed}%`);
  }
  if (filters.minAge != null) query = query.gte("age_value", filters.minAge);
  if (filters.maxAge != null) query = query.lte("age_value", filters.maxAge);
  if (filters.temperament && filters.temperament.length > 0) {
    query = query.contains("temperament", filters.temperament);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching animals:", error.message);
    return [];
  }
  return (data ?? []) as AnimalWithPhotos[];
}

export async function getAnimalById(id: string): Promise<AnimalWithPhotos | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("animals")
    .select("*, animal_photos(*)")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Error fetching animal:", error.message);
    return null;
  }
  return data as AnimalWithPhotos | null;
}

export async function getMyAnimals(userId: string): Promise<AnimalWithPhotos[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("animals")
    .select("*, animal_photos(*)")
    .eq("owner_user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching my animals:", error.message);
    return [];
  }
  return (data ?? []) as AnimalWithPhotos[];
}

export function animalPhotoUrl(storagePath: string): string {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return `${base}/storage/v1/object/public/animal-photos/${storagePath}`;
}
