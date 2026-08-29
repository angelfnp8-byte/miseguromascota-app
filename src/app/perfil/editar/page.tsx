import type { Metadata } from "next";
import { requireUser } from "@/lib/require-user";
import { getProfileById } from "@/lib/profiles";
import { EditProfileForm } from "./EditProfileForm";

export const metadata: Metadata = {
  title: "Editar mi perfil",
  robots: { index: false, follow: true },
};

export default async function Page() {
  const user = await requireUser("/perfil/editar");
  const profile = await getProfileById(user.id);

  return (
    <div className="mx-auto max-w-[560px] px-5 py-12">
      <h1>Editar mi perfil</h1>
      <p className="mb-6 text-(--color-text-light)">
        Esta información es pública y la puede ver cualquiera que visite tus anuncios de
        adopción.
      </p>
      <EditProfileForm profile={profile} />
    </div>
  );
}
