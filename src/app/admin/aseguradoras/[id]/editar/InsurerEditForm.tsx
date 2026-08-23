"use client";

import { useActionState, useState } from "react";
import { updateInsurer, type AdminFormState } from "@/app/admin/actions";
import type { Insurer } from "@/lib/supabase/types";

const initialState: AdminFormState = { error: null };

function centsToEuros(cents: number | null): string {
  return cents == null ? "" : (cents / 100).toString();
}

export function InsurerEditForm({ insurer }: { insurer: Insurer }) {
  const action = updateInsurer.bind(null, insurer.id);
  const [state, formAction, pending] = useActionState(action, initialState);
  const [affiliateEnabled, setAffiliateEnabled] = useState(insurer.affiliate_enabled);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <fieldset className="rounded-2xl border border-(--color-border) p-5">
        <legend className="px-1 font-heading font-bold">
          Precios orientativos (vacío = no mostrar)
        </legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Field label="Desde (€/mes)">
            <input
              type="number"
              step="0.01"
              min="0"
              name="priceFrom"
              defaultValue={centsToEuros(insurer.price_from_cents)}
              className={inputClass}
            />
          </Field>
          <Field label="Cobertura intermedia (€/mes)">
            <input
              type="number"
              step="0.01"
              min="0"
              name="priceMid"
              defaultValue={centsToEuros(insurer.price_mid_cents)}
              className={inputClass}
            />
          </Field>
          <Field label="Cobertura completa (€/mes)">
            <input
              type="number"
              step="0.01"
              min="0"
              name="priceFull"
              defaultValue={centsToEuros(insurer.price_full_cents)}
              className={inputClass}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="rounded-2xl border border-(--color-border) p-5">
        <legend className="px-1 font-heading font-bold">Afiliación</legend>
        <label className="mb-4 flex items-center gap-2 text-[0.9rem]">
          <input
            type="checkbox"
            name="affiliateEnabled"
            defaultChecked={insurer.affiliate_enabled}
            onChange={(e) => setAffiliateEnabled(e.target.checked)}
          />
          Afiliación activa (el botón usará la URL de afiliado en vez de la web oficial)
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="URL de afiliado">
            <input
              type="url"
              name="affiliateUrl"
              defaultValue={insurer.affiliate_url ?? ""}
              disabled={!affiliateEnabled}
              className={inputClass}
            />
          </Field>
          <Field label="Proveedor de afiliación">
            <input
              type="text"
              name="affiliateProvider"
              defaultValue={insurer.affiliate_provider ?? ""}
              disabled={!affiliateEnabled}
              placeholder="p. ej. Awin, TradeDoubler…"
              className={inputClass}
            />
          </Field>
        </div>
      </fieldset>

      {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-(--color-primary) px-8 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
      >
        {pending ? "Guardando…" : "Guardar cambios"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text) disabled:opacity-50";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.9rem] font-semibold">{label}</span>
      {children}
    </label>
  );
}
