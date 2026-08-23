import { animalPhotoUrl } from "@/lib/animals";
import { deleteAnimalPhoto } from "@/app/adopcion/actions";
import type { AnimalPhoto } from "@/lib/supabase/types";

export function ExistingPhotos({ animalId, photos }: { animalId: string; photos: AnimalPhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <div className="mb-6">
      <p className="mb-2 text-[0.9rem] font-semibold">Fotos actuales</p>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={animalPhotoUrl(photo.storage_path)}
              alt=""
              className="aspect-square w-full rounded-lg object-cover"
            />
            <form action={deleteAnimalPhoto.bind(null, animalId, photo.id, photo.storage_path)}>
              <button
                type="submit"
                className="absolute right-1 top-1 rounded-full bg-black/70 px-2 py-0.5 text-[0.7rem] font-bold text-white"
              >
                Quitar
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
