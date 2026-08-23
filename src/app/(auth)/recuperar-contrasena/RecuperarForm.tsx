"use client";

import { useActionState } from "react";
import { requestPasswordReset, type ActionState } from "../actions";

const initialState: ActionState = { error: null };

export function RecuperarForm() {
  const [state, formAction, pending] = useActionState(requestPasswordReset, initialState);
  const sent = state.error === null && state !== initialState;

  return (
    <div className="mx-auto max-w-[420px] px-5 py-14">
      <h1>Recuperar contraseña</h1>
      <p className="text-(--color-text-light)">
        Escribe tu email y te enviaremos un enlace para restablecer tu
        contraseña.
      </p>

      {sent ? (
        <p className="mt-6 rounded-2xl bg-(--color-secondary-light) p-5 text-(--color-secondary)">
          Si existe una cuenta con ese email, te hemos enviado un enlace para
          restablecer la contraseña.
        </p>
      ) : (
        <form action={formAction} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.9rem] font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
            />
          </label>

          {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
          >
            {pending ? "Enviando…" : "Enviar enlace"}
          </button>
        </form>
      )}
    </div>
  );
}
