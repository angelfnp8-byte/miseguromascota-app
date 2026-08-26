import { createClient } from "@/lib/supabase/server";
import { matchesAgeBracket, type AgeBracket } from "@/lib/animal-labels";
import type { AnimalType, Gender, VaccinationStatus, AnimalWithPhotos } from "@/lib/supabase/types";

export type AnimalFilters = {
  type?: AnimalType;
  gender?: Gender;
  breedType?: "definida" | "cruce";
  vaccinated?: VaccinationStatus;
  location?: string;
  breed?: string;
  ageBracket?: AgeBracket;
  temperament?: string[];
};

// `.or()` takes a raw PostgREST filter string, so a `,` or `(`/`)` in user
// input would let it break out of the intended clause and inject extra
// filter terms — strip the characters that carry syntactic meaning there.
function sanitizeOrFilterValue(value: string): string {
  return value.replace(/[,()]/g, "");
}

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
    const location = sanitizeOrFilterValue(filters.location);
    query = query.or(`location_city.ilike.%${location}%,location_region.ilike.%${location}%`);
  }
  if (filters.breed) {
    const breed = sanitizeOrFilterValue(filters.breed);
    query = query.or(`breed.ilike.%${breed}%,mixed_breeds.ilike.%${breed}%`);
  }
  if (filters.temperament && filters.temperament.length > 0) {
    query = query.contains("temperament", filters.temperament);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching animals:", error.message);
    return [];
  }

  let animals = (data ?? []) as AnimalWithPhotos[];
  // Age is stored as a value + unit (meses/años), so the bracket comparison
  // needs to normalize both before comparing — not expressible as a single
  // Postgrest column filter, done in-memory after the rest of the filters.
  if (filters.ageBracket) {
    animals = animals.filter((a) => matchesAgeBracket(a.age_value, a.age_unit, filters.ageBracket!));
  }
  return animals;
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
