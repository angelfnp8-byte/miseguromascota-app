"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireUser } from "@/lib/require-user";
import { sendEmail } from "@/lib/email";
import { siteUrl } from "@/lib/site-url";
import type { Conversation } from "@/lib/supabase/types";

export type MessageFormState = { error: string | null };

/**
 * Called from an animal's page when an authenticated user wants to contact
 * the owner. Reuses the existing thread for that animal+user pair if one
 * already exists (unique constraint), otherwise creates it.
 */
export async function startConversation(animalId: string, formData: FormData) {
  const user = await requireUser(`/adopcion/${animalId}`);
  const supabase = await createClient();

  const phone = String(formData.get("phone") ?? "").trim() || null;
  const email = String(formData.get("email") ?? "").trim() || user.email || null;

  const { data: animal } = await supabase
    .from("animals")
    .select("id, owner_user_id")
    .eq("id", animalId)
    .maybeSingle();

  if (!animal) redirect(`/adopcion/${animalId}`);
  if (animal.owner_user_id === user.id) redirect(`/adopcion/${animalId}`);

  const { data: existing } = await supabase
    .from("conversations")
    .select("id")
    .eq("animal_id", animalId)
    .eq("interested_user_id", user.id)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("conversations")
      .update({ interested_contact_phone: phone, interested_contact_email: email })
      .eq("id", existing.id);
    redirect(`/mensajes/${existing.id}`);
  }

  const { data: created, error } = await supabase
    .from("conversations")
    .insert({
      animal_id: animalId,
      owner_user_id: animal.owner_user_id,
      interested_user_id: user.id,
      interested_contact_phone: phone,
      interested_contact_email: email,
    })
    .select("id")
    .single();

  if (error || !created) redirect(`/adopcion/${animalId}`);

  revalidatePath("/mensajes");
  redirect(`/mensajes/${created.id}`);
}

export async function sendMessage(
  conversationId: string,
  _prev: MessageFormState,
  formData: FormData,
): Promise<MessageFormState> {
  const user = await requireUser(`/mensajes/${conversationId}`);
  const content = String(formData.get("content") ?? "").trim();

  if (!content) return { error: "Escribe un mensaje antes de enviarlo." };
  if (content.length > 2000) return { error: "El mensaje es demasiado largo." };

  const supabase = await createClient();

  // Si el destinatario ya tenía un mensaje mío sin leer en esta conversación,
  // ya se le avisó por email — no reenviamos otro correo por cada mensaje
  // seguido de una misma tanda, solo cuando pasa de "todo leído" a tener algo
  // pendiente.
  const { count: alreadyPending } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .eq("conversation_id", conversationId)
    .eq("sender_id", user.id)
    .is("read_at", null);

  const { error } = await supabase.from("messages").insert({
    conversation_id: conversationId,
    sender_id: user.id,
    content,
  });

  if (error) return { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." };

  revalidatePath(`/mensajes/${conversationId}`);
  revalidatePath("/mensajes");

  if (!alreadyPending) {
    void notifyNewMessage(conversationId, user.id);
  }

  return { error: null };
}

async function notifyNewMessage(conversationId: string, senderId: string) {
  try {
    const supabase = await createClient();
    const { data: conversationRow } = await supabase
      .from("conversations")
      .select("*, animals(name)")
      .eq("id", conversationId)
      .maybeSingle();
    const conversation = conversationRow as unknown as
      | (Conversation & { animals: { name: string } | null })
      | null;

    if (!conversation) return;
    const recipientId =
      conversation.owner_user_id === senderId
        ? conversation.interested_user_id
        : conversation.owner_user_id;

    const admin = createAdminClient();
    const { data: recipientData } = await admin.auth.admin.getUserById(recipientId);
    const recipientEmail = recipientData.user?.email;
    if (!recipientEmail) return;

    const animalName = conversation.animals?.name ?? "tu anuncio";
    const base = await siteUrl();
    const link = `${base}/mensajes/${conversationId}`;

    await sendEmail({
      to: recipientEmail,
      subject: "Tienes un nuevo mensaje en Mi Seguro Mascota",
      html: `
        <p>Tienes un nuevo mensaje sobre <strong>${animalName}</strong> en Mi Seguro Mascota.</p>
        <p><a href="${link}">Responder en la conversación</a></p>
      `,
    });
  } catch (err) {
    console.error("notifyNewMessage failed:", err);
  }
}
