import { createClient } from "@/lib/supabase/server";
import type { Conversation, Message } from "@/lib/supabase/types";

export type ConversationListItem = Conversation & {
  animals: { id: string; name: string; type: string; contact_phone: string; contact_email: string } | null;
  owner: { display_name: string | null } | null;
  interested: { display_name: string | null } | null;
};

export async function getConversationsForUser(userId: string): Promise<ConversationListItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select(
      "*, animals(id, name, type, contact_phone, contact_email), owner:profiles!conversations_owner_user_id_fkey(display_name), interested:profiles!conversations_interested_user_id_fkey(display_name)",
    )
    .or(`owner_user_id.eq.${userId},interested_user_id.eq.${userId}`)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error fetching conversations:", error.message);
    return [];
  }
  return (data ?? []) as unknown as ConversationListItem[];
}

export async function getConversation(id: string): Promise<ConversationListItem | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("conversations")
    .select(
      "*, animals(id, name, type, contact_phone, contact_email), owner:profiles!conversations_owner_user_id_fkey(display_name), interested:profiles!conversations_interested_user_id_fkey(display_name)",
    )
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Error fetching conversation:", error.message);
    return null;
  }
  return data as unknown as ConversationListItem | null;
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching messages:", error.message);
    return [];
  }
  return data ?? [];
}
