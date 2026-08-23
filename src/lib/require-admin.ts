import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/require-user";
import type { User } from "@supabase/supabase-js";

/**
 * Server Component/Action guard for admin-only routes. Renders a plain 404
 * for non-admins (including logged-out visitors) rather than a "forbidden"
 * page, so the existence of /admin isn't advertised.
 */
export async function requireAdmin(nextPath: string): Promise<User> {
  const user = await requireUser(nextPath);
  const supabase = await createClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) notFound();
  return user;
}
