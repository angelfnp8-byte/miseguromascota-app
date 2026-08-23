"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

/**
 * Client Component by design: reading the session requires `cookies()`,
 * which would force every page under the shared layout into dynamic
 * rendering if done server-side here. Checking client-side keeps the
 * content/SEO pages statically prerendered.
 */
export function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoaded(true);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded) return null;

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-full bg-(--color-primary) px-5 py-2 text-[0.92rem] font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Iniciar sesión
      </Link>
    );
  }

  const label = (user.user_metadata?.display_name as string | undefined) || user.email;

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/mensajes"
        className="text-[0.9rem] font-semibold text-(--color-text) hover:text-(--color-primary)"
      >
        Mensajes
      </Link>
      <span className="hidden text-[0.9rem] text-(--color-text-light) sm:inline">{label}</span>
      <button
        type="button"
        onClick={handleSignOut}
        className="rounded-full border-2 border-(--color-border) px-4 py-2 text-[0.92rem] font-semibold text-(--color-text) hover:bg-(--color-secondary-light)"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
