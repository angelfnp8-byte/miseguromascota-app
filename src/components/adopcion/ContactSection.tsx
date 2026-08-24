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
  const [accountEmail, setAccountEmail] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setAuthenticated(!!data.user);
      setAccountEmail(data.user?.email ?? "");
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
    <form
      action={startConversation.bind(null, animalId)}
      className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
    >
      <p className="mb-3 text-[0.88rem] font-semibold">
        Comparte un teléfono y/o email donde puedan localizarte
      </p>
      <div className="mb-3 flex flex-col gap-2.5">
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono (opcional)"
          className="w-full rounded-xl border-2 border-(--color-border) bg-(--color-bg) px-3.5 py-2 text-[0.9rem]"
        />
        <input
          type="email"
          name="email"
          defaultValue={accountEmail}
          placeholder="Email de contacto"
          className="w-full rounded-xl border-2 border-(--color-border) bg-(--color-bg) px-3.5 py-2 text-[0.9rem]"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-(--color-primary) px-6 py-3 text-center font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Contactar para adoptar
      </button>
      <p className="mt-2.5 text-[0.78rem] text-(--color-text-light)">
        Estos datos solo se compartirán con quien publicó este anuncio, junto con los
        suyos. Consulta nuestros{" "}
        <Link href="/adopcion/adopcion-segura" className="underline">
          consejos de adopción segura
        </Link>
        .
      </p>
    </form>
  );
}
