"use client";

import { useActionState } from "react";
import { updatePassword, type ActionState } from "../actions";

const initialState: ActionState = { error: null };

export function ActualizarForm() {
  const [state, formAction, pending] = useActionState(updatePassword, initialState);

  return (
    <div className="mx-auto max-w-[420px] px-5 py-14">
      <h1>Nueva contraseña</h1>
      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9rem] font-semibold">Nueva contraseña</span>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            autoComplete="new-password"
            className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
          />
          <span className="text-[0.8rem] text-(--color-text-light)">Mínimo 8 caracteres.</span>
        </label>

        {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
        >
          {pending ? "Guardando…" : "Guardar contraseña"}
        </button>
      </form>
    </div>
  );
}
