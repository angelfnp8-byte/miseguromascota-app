import type { Metadata } from "next";
import { requireUser } from "@/lib/require-user";
import { createAnimal } from "@/app/adopcion/actions";
import { AnimalForm } from "@/components/adopcion/AnimalForm";

export const metadata: Metadata = {
  title: "Publicar un animal en adopción",
  robots: { index: false, follow: true },
};

export default async function Page() {
  await requireUser("/adopcion/nuevo");

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <h1>Publicar un animal en adopción</h1>
      <p className="mb-6 text-(--color-text-light)">
        Cuanta más información des, más fácil será encontrarle un hogar.
      </p>
      <AnimalForm action={createAnimal} submitLabel="Publicar anuncio" />
    </div>
  );
}
