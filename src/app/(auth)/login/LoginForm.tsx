"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn, signInWithGoogle, type ActionState } from "../actions";

const initialState: ActionState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <div className="mx-auto max-w-[420px] px-5 py-14">
      <h1>Iniciar sesión</h1>

      <form action={signInWithGoogle} className="mt-6">
        <button
          type="submit"
          className="w-full rounded-full border-2 border-(--color-border) px-6 py-3 text-center font-semibold text-(--color-text) hover:bg-(--color-secondary-light)"
        >
          Continuar con Google
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-[0.85rem] text-(--color-text-light)">
        <span className="h-px flex-1 bg-(--color-border)" />
        o con tu email
        <span className="h-px flex-1 bg-(--color-border)" />
      </div>

      <form action={formAction} className="flex flex-col gap-4">
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
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9rem] font-semibold">Contraseña</span>
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
          />
        </label>

        {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
        >
          {pending ? "Entrando…" : "Iniciar sesión"}
        </button>
      </form>

      <p className="mt-5 text-[0.9rem] text-(--color-text-light)">
        <Link href="/recuperar-contrasena" className="underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </p>
      <p className="mt-2 text-[0.9rem] text-(--color-text-light)">
        ¿No tienes cuenta?{" "}
        <Link href="/registro" className="underline">
          Regístrate
        </Link>
      </p>
    </div>
  );
}
