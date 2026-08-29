"use client";

import { useActionState } from "react";
import { updateProfile, type ProfileFormState } from "../actions";
import type { Profile } from "@/lib/supabase/types";

const initialState: ProfileFormState = { error: null };

export function EditProfileForm({ profile }: { profile: Profile | null }) {
  const [state, formAction, pending] = useActionState(updateProfile, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="text-[0.9rem] font-semibold">Nombre a mostrar</span>
        <input
          type="text"
          name="displayName"
          required
          defaultValue={profile?.display_name ?? ""}
          className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-[0.9rem] font-semibold">Descripción</span>
        <textarea
          name="bio"
          rows={4}
          maxLength={500}
          placeholder="Cuéntale a quien vea tus anuncios quién eres — por ejemplo, si eres una protectora, cómo trabajáis."
          defaultValue={profile?.bio ?? ""}
          className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9rem] font-semibold">Ciudad</span>
          <input
            type="text"
            name="locationCity"
            defaultValue={profile?.location_city ?? ""}
            className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9rem] font-semibold">Provincia/región</span>
          <input
            type="text"
            name="locationRegion"
            defaultValue={profile?.location_region ?? ""}
            className="rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)"
          />
        </label>
      </div>

      <label className="flex items-center gap-2.5">
        <input
          type="checkbox"
          name="isShelter"
          defaultChecked={profile?.is_shelter ?? false}
          className="h-4.5 w-4.5"
        />
        <span className="text-[0.9rem] font-semibold">Somos una protectora o asociación</span>
      </label>

      {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 self-start rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
      >
        {pending ? "Guardando…" : "Guardar perfil"}
      </button>
    </form>
  );
}
