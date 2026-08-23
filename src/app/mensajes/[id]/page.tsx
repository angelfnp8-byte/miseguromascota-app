import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/require-user";
import { getConversation, getMessages } from "@/lib/chat";
import { ChatThread } from "@/components/mensajes/ChatThread";

export const metadata: Metadata = {
  title: "Conversación",
  robots: { index: false, follow: true },
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await requireUser(`/mensajes/${id}`);
  const conversation = await getConversation(id);

  if (!conversation) notFound();
  const isParticipant =
    conversation.owner_user_id === user.id || conversation.interested_user_id === user.id;
  if (!isParticipant) notFound();

  const messages = await getMessages(id);
  const isOwner = conversation.owner_user_id === user.id;
  const otherName =
    (isOwner ? conversation.interested?.display_name : conversation.owner?.display_name) ||
    "Usuario";

  return (
    <div className="mx-auto max-w-[720px] px-5 pt-10 pb-14">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/mensajes" className="hover:underline">
          Mensajes
        </Link>
      </p>
      <h1>
        {conversation.animals?.name ?? "Animal"} · {otherName}
      </h1>
      {conversation.animals && (
        <p className="mb-6 text-(--color-text-light)">
          Sobre el anuncio de{" "}
          <Link href={`/adopcion/${conversation.animals.id}`} className="underline">
            {conversation.animals.name}
          </Link>
        </p>
      )}

      <ChatThread conversationId={id} currentUserId={user.id} initialMessages={messages} />
    </div>
  );
}
