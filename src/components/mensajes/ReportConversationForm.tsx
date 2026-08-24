"use client";

import { useActionState, useState } from "react";
import { reportConversation, type ReportFormState } from "@/app/mensajes/actions";

const initialState: ReportFormState = { error: null, success: false };

const REASONS = [
  "Spam o publicidad",
  "Contenido inapropiado",
  "Comportamiento sospechoso",
  "Posible estafa",
  "Otro",
];

export function ReportConversationForm({ conversationId }: { conversationId: string }) {
  const [open, setOpen] = useState(false);
  const boundAction = reportConversation.bind(null, conversationId);
  const [state, formAction, pending] = useActionState(boundAction, initialState);

  if (state.success) {
    return (
      <p className="text-[0.85rem] text-(--color-secondary)">
        Reporte enviado. Gracias por avisarnos.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-[0.85rem] font-semibold text-(--color-text-light) underline"
      >
        Reportar conversación
      </button>
    );
  }

  return (
    <form action={formAction} className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4">
      <p className="mb-2 text-[0.85rem] font-bold">Reportar conversación</p>
      <div className="flex flex-col gap-2.5">
        <select
          name="reason"
          required
          defaultValue=""
          className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2.5 py-2 text-[0.88rem]"
        >
          <option value="" disabled>
            Elige un motivo
          </option>
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <textarea
          name="details"
          rows={3}
          placeholder="Detalles (opcional)"
          className="rounded-lg border border-(--color-border) bg-(--color-bg) px-2.5 py-2 text-[0.88rem]"
        />
      </div>
      {state.error && <p className="mt-2 text-[0.82rem] text-red-600">{state.error}</p>}
      <div className="mt-3 flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-red-600 px-4 py-1.5 text-[0.85rem] font-bold text-white disabled:opacity-60"
        >
          {pending ? "Enviando…" : "Enviar reporte"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full border border-(--color-border) px-4 py-1.5 text-[0.85rem] font-semibold"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
