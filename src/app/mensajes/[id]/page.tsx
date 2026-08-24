import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/require-user";
import { getConversation, getMessages, markConversationRead } from "@/lib/chat";
import { ChatThread } from "@/components/mensajes/ChatThread";
import { ReportConversationForm } from "@/components/mensajes/ReportConversationForm";
import { deleteConversation } from "@/app/mensajes/actions";

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
  await markConversationRead(id, user.id);
  const isOwner = conversation.owner_user_id === user.id;
  const otherName =
    (isOwner ? conversation.interested?.display_name : conversation.owner?.display_name) ||
    "Usuario";

  return (
    <div className="mx-auto max-w-[720px] px-5 pt-10 pb-14">
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <p className="mb-0 text-[0.85rem] text-(--color-text-light)">
          <Link href="/mensajes" className="hover:underline">
            Mensajes
          </Link>
        </p>
        <form action={deleteConversation.bind(null, id)}>
          <button
            type="submit"
            className="text-[0.85rem] font-semibold text-red-600 underline"
          >
            Eliminar conversación
          </button>
        </form>
      </div>
      <h1>
        {conversation.animals?.name ?? "Animal"} · {otherName}
      </h1>
      {conversation.animals && (
        <p className="mb-4 text-(--color-text-light)">
          Sobre el anuncio de{" "}
          <Link href={`/adopcion/${conversation.animals.id}`} className="underline">
            {conversation.animals.name}
          </Link>
        </p>
      )}

      <div className="mb-6 rounded-2xl border border-(--color-border) bg-(--color-secondary-light) p-4">
        <p className="mb-1.5 text-[0.85rem] font-bold text-(--color-secondary)">Datos de contacto</p>
        {isOwner ? (
          conversation.interested_contact_phone || conversation.interested_contact_email ? (
            <p className="mb-0 text-[0.9rem]">
              {conversation.interested_contact_phone && <>Tel.: {conversation.interested_contact_phone}<br /></>}
              {conversation.interested_contact_email && <>Email: {conversation.interested_contact_email}</>}
            </p>
          ) : (
            <p className="mb-0 text-[0.9rem] text-(--color-text-light)">Aún no compartidos.</p>
          )
        ) : (
          conversation.animals && (
            <p className="mb-0 text-[0.9rem]">
              Tel.: {conversation.animals.contact_phone}
              <br />
              Email: {conversation.animals.contact_email}
            </p>
          )
        )}
        <p className="mt-2 mb-0 text-[0.78rem] text-(--color-text-light)">
          Por tu seguridad, quedad siempre en un lugar público y consulta nuestros{" "}
          <Link href="/adopcion/adopcion-segura" className="underline">
            consejos de adopción segura
          </Link>
          .
        </p>
      </div>

      <ChatThread conversationId={id} currentUserId={user.id} initialMessages={messages} />

      <div className="mt-4">
        <ReportConversationForm conversationId={id} />
      </div>
    </div>
  );
}
