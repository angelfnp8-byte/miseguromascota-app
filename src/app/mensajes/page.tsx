import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/require-user";
import { getConversationsForUser } from "@/lib/chat";
import { animalTypeIcons } from "@/lib/animal-labels";

export const metadata: Metadata = {
  title: "Mensajes",
  robots: { index: false, follow: true },
};

export default async function Page() {
  const user = await requireUser("/mensajes");
  const conversations = await getConversationsForUser(user.id);

  return (
    <div className="mx-auto max-w-[720px] px-5 pt-10 pb-14">
      <h1>Mensajes</h1>

      {conversations.length === 0 ? (
        <p className="text-(--color-text-light)">
          Todavía no tienes conversaciones. Contacta con el propietario de un animal desde su
          ficha en <Link href="/adopcion" className="underline">adopción</Link>.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {conversations.map((c) => {
            const isOwner = c.owner_user_id === user.id;
            const otherName =
              (isOwner ? c.interested?.display_name : c.owner?.display_name) || "Usuario";
            return (
              <Link
                key={c.id}
                href={`/mensajes/${c.id}`}
                className="flex items-center gap-4 rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 hover:bg-(--color-secondary-light)"
              >
                <span className="text-2xl" aria-hidden>
                  {c.animals ? animalTypeIcons[c.animals.type as keyof typeof animalTypeIcons] : "🐾"}
                </span>
                <div className="flex-1">
                  <p className="mb-0.5 font-bold">
                    {c.animals?.name ?? "Animal"} · {otherName}
                  </p>
                  <p className="mb-0 text-[0.85rem] text-(--color-text-light)">
                    {isOwner ? "Interesado en adoptar" : "Anuncio del propietario"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
