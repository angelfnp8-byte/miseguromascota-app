"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export function ContactSection({
  animalId,
  animalName,
  contactPhone,
  contactEmail,
  isOwner,
}: {
  animalId: string;
  animalName: string;
  contactPhone: string;
  contactEmail: string;
  isOwner: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [revealed, setRevealed] = useState(false);

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

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="w-full rounded-full bg-(--color-primary) px-6 py-3 text-center font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Contactar para adoptar
      </button>
    );
  }

  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 text-[0.92rem]">
      <p className="mb-2 font-semibold">Contacta con el responsable de {animalName}:</p>
      <p className="mb-1">
        Teléfono: <a href={`tel:${contactPhone}`} className="underline">{contactPhone}</a>
      </p>
      <p className="mb-0">
        Email: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a>
      </p>
    </div>
  );
}
