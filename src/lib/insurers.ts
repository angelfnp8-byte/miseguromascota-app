import { createClient } from "@/lib/supabase/server";
import type { Insurer } from "@/lib/supabase/types";

export async function getInsurers(): Promise<Insurer[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("insurers")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching insurers:", error.message);
    return [];
  }

  return data ?? [];
}
