"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { sendMessage, type MessageFormState } from "@/app/mensajes/actions";
import type { Message } from "@/lib/supabase/types";

const initialState: MessageFormState = { error: null };

export function ChatThread({
  conversationId,
  currentUserId,
  initialMessages,
}: {
  conversationId: string;
  currentUserId: string;
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState(initialMessages);
  const boundSendMessage = sendMessage.bind(null, conversationId);
  const [state, formAction, pending] = useActionState(boundSendMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel(`conversation-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const incoming = payload.new as Message;
          setMessages((prev) => (prev.some((m) => m.id === incoming.id) ? prev : [...prev, incoming]));
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  useEffect(() => {
    if (!pending && state.error === null) {
      formRef.current?.reset();
    }
  }, [pending, state]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex max-h-[60vh] min-h-60 flex-col gap-2 overflow-y-auto rounded-2xl border border-(--color-border) bg-(--color-surface) p-4">
        {messages.length === 0 && (
          <p className="text-center text-[0.9rem] text-(--color-text-light)">
            Todavía no hay mensajes. Escribe el primero.
          </p>
        )}
        {messages.map((m) => {
          const mine = m.sender_id === currentUserId;
          return (
            <div
              key={m.id}
              className={`max-w-[80%] rounded-2xl px-4 py-2 text-[0.92rem] ${
                mine
                  ? "self-end bg-(--color-primary) text-white"
                  : "self-start bg-(--color-secondary-light) text-(--color-text)"
              }`}
            >
              {m.content}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <form ref={formRef} action={formAction} className="flex gap-2">
        <input
          type="text"
          name="content"
          required
          placeholder="Escribe un mensaje…"
          className="flex-1 rounded-full border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-(--color-primary) px-6 py-2.5 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
        >
          Enviar
        </button>
      </form>
      {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}
    </div>
  );
}
