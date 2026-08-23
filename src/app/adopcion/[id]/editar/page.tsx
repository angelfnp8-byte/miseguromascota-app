import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/require-user";
import { getAnimalById } from "@/lib/animals";
import { EditAnimalForm } from "./EditAnimalForm";
import { ExistingPhotos } from "./ExistingPhotos";

export const metadata: Metadata = {
  title: "Editar anuncio de adopción",
  robots: { index: false, follow: true },
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await requireUser(`/adopcion/${id}/editar`);
  const animal = await getAnimalById(id);

  if (!animal || animal.owner_user_id !== user.id) notFound();

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <h1>Editar anuncio de {animal.name}</h1>
      <ExistingPhotos animalId={animal.id} photos={animal.animal_photos} />
      <EditAnimalForm animal={animal} />
    </div>
  );
}
