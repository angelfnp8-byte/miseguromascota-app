"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { startConversation } from "@/app/mensajes/actions";

export function ContactSection({
  animalId,
  isOwner,
}: {
  animalId: string;
  isOwner: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setAuthenticated(!!data.user);
      setLoaded(true);
    });
  }, []);

  if (isOwner) {
    return (
      <p className="rounded-2xl bg-(--color-secondary-light) p-4 text-[0.9rem] text-(--color-secondary)">
        Este es tu anuncio. Gestiónalo desde{" "}
        <Link href="/adopcion/mis-publicaciones" className="underline">
          mis publicaciones
        </Link>
        .
      </p>
    );
  }

  if (!loaded) return null;

  if (!authenticated) {
    return (
      <Link
        href={`/login?next=${encodeURIComponent(`/adopcion/${animalId}`)}`}
        className="block rounded-full bg-(--color-primary) px-6 py-3 text-center font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Iniciar sesión para contactar
      </Link>
    );
  }

  return (
    <form action={startConversation.bind(null, animalId)}>
      <button
        type="submit"
        className="w-full rounded-full bg-(--color-primary) px-6 py-3 text-center font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Contactar para adoptar
      </button>
    </form>
  );
}
