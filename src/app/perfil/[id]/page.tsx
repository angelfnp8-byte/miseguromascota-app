import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProfileById } from "@/lib/profiles";
import { getAvailableAnimalsByOwner } from "@/lib/animals";
import { createClient } from "@/lib/supabase/server";
import { capitalizeWords } from "@/lib/animal-labels";
import { AnimalCard } from "@/components/adopcion/AnimalCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const profile = await getProfileById(id);
  if (!profile) return { title: "Perfil no encontrado" };

  const name = profile.display_name ?? "Usuario";
  const title = profile.is_shelter ? `${name} — protectora` : name;

  return {
    title,
    description:
      profile.bio?.slice(0, 160) ??
      `Anuncios de adopción publicados por ${name} en Mi Seguro Mascota.`,
    alternates: { canonical: `/perfil/${id}` },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = await getProfileById(id);
  if (!profile) notFound();

  const [animals, supabase] = await Promise.all([getAvailableAnimalsByOwner(id), createClient()]);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isOwner = user?.id === id;

  const name = profile.display_name ?? "Usuario";
  const city = profile.location_city ? capitalizeWords(profile.location_city) : null;
  const region = profile.location_region ? capitalizeWords(profile.location_region) : null;

  return (
    <div className="mx-auto max-w-[860px] px-5 pt-10 pb-14">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/adopcion" className="hover:underline">
          Adopción
        </Link>{" "}
        / {name}
      </p>

      <div className="mb-2 flex flex-wrap items-center gap-2.5">
        <h1 className="mb-0">{name}</h1>
        {profile.is_shelter && (
          <span className="rounded-full bg-(--color-primary) px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wide text-white">
            Protectora
          </span>
        )}
      </div>

      {(city || region) && (
        <p className="mb-4 text-[0.9rem] text-(--color-text-light)">
          {[city, region].filter(Boolean).join(", ")}
        </p>
      )}

      {profile.bio && <p className="mb-6 max-w-[65ch] whitespace-pre-line">{profile.bio}</p>}

      {isOwner && (
        <Link
          href="/perfil/editar"
          className="mb-6 inline-block rounded-full border-2 border-(--color-border) px-5 py-2.5 text-[0.9rem] font-bold text-(--color-text) hover:bg-(--color-secondary-light)"
        >
          Editar mi perfil
        </Link>
      )}

      <h2>{animals.length > 0 ? "Anuncios activos" : "Sin anuncios activos ahora mismo"}</h2>

      {animals.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}
