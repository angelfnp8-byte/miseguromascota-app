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
  const [isAdmin, setIsAdmin] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadUser(currentUser: User | null) {
      setUser(currentUser);
      if (currentUser) {
        const { data } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq("id", currentUser.id)
          .maybeSingle();
        setIsAdmin(!!data?.is_admin);
      } else {
        setIsAdmin(false);
        setUnreadCount(0);
      }
      setLoaded(true);
    }

    supabase.auth.getUser().then(({ data }) => loadUser(data.user));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      loadUser(session?.user ?? null);
    });

    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user) return;

    async function refreshUnreadCount() {
      const { count } = await supabase
        .from("messages")
        .select("id", { count: "exact", head: true })
        .is("read_at", null)
        .neq("sender_id", user!.id);
      setUnreadCount(count ?? 0);
    }

    refreshUnreadCount();

    const channel = supabase
      .channel("unread-messages")
      .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, refreshUnreadCount)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
      {isAdmin && (
        <Link
          href="/admin"
          className="text-[0.9rem] font-semibold text-(--color-text) hover:text-(--color-primary)"
        >
          Admin
        </Link>
      )}
      <Link
        href="/mensajes"
        className="relative text-[0.9rem] font-semibold text-(--color-text) hover:text-(--color-primary)"
      >
        Mensajes
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-3.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-red-600 px-1 text-[0.65rem] font-bold leading-none text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
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
