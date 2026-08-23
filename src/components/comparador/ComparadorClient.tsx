"use client";

import { useMemo, useState } from "react";
import type { Insurer } from "@/lib/supabase/types";
import { coberturaLabels, especieLabels, formatPrice } from "@/lib/insurer-labels";

type Especie = "perro" | "gato";
type Cobertura = "rc" | "salud_basica" | "salud_completa" | "todas";

export function ComparadorClient({ insurers }: { insurers: Insurer[] }) {
  const [especie, setEspecie] = useState<Especie>("perro");
  const [cobertura, setCobertura] = useState<Cobertura>("rc");

  const resultados = useMemo(() => {
    return insurers.filter((insurer) => {
      if (!insurer.species.includes(especie)) return false;
      if (cobertura !== "todas" && !insurer.coverages.includes(cobertura)) return false;
      return true;
    });
  }, [insurers, especie, cobertura]);

  const etiquetaCobertura = cobertura === "todas" ? "todas las coberturas" : coberturaLabels[cobertura];

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6.5 mb-2 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6.5 shadow-[var(--shadow)]"
      >
        <fieldset className="mb-6">
          <legend className="mb-3 font-heading text-[1.02rem] font-bold">
            ¿Tienes perro o gato?
          </legend>
          <div className="grid max-w-90 grid-cols-2 gap-2.5">
            {(["perro", "gato"] as const).map((value) => (
              <OptionCard
                key={value}
                checked={especie === value}
                onSelect={() => setEspecie(value)}
                label={value === "perro" ? "🐶 Perro" : "🐱 Gato"}
              />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-heading text-[1.02rem] font-bold">
            ¿Qué cobertura buscas?
          </legend>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <OptionCard checked={cobertura === "rc"} onSelect={() => setCobertura("rc")} label="Responsabilidad Civil" />
            <OptionCard
              checked={cobertura === "salud_basica"}
              onSelect={() => setCobertura("salud_basica")}
              label="Salud básica (accidentes)"
            />
            <OptionCard
              checked={cobertura === "salud_completa"}
              onSelect={() => setCobertura("salud_completa")}
              label="Salud completa (accidentes y enfermedad)"
            />
            <OptionCard
              checked={cobertura === "todas"}
              onSelect={() => setCobertura("todas")}
              label="Mostrar todas las opciones"
            />
          </div>
        </fieldset>
      </form>

      <p className="mb-4 text-[0.9rem] text-(--color-text-light)">
        {resultados.length} aseguradora{resultados.length === 1 ? "" : "s"} encontrada
        {resultados.length === 1 ? "" : "s"} para {especieLabels[especie].toLowerCase()} · {etiquetaCobertura}
      </p>

      {resultados.length === 0 ? (
        <div className="rounded-2xl bg-(--color-secondary-light) p-6.5 text-center text-(--color-text-light)">
          No hemos encontrado aseguradoras de nuestra lista que ofrezcan exactamente esa
          combinación. Prueba a elegir &quot;Mostrar todas las opciones&quot; para ver más
          resultados.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {resultados.map((insurer) => (
            <InsurerCard key={insurer.id} insurer={insurer} />
          ))}
        </div>
      )}
    </div>
  );
}

function OptionCard({
  checked,
  onSelect,
  label,
}: {
  checked: boolean;
  onSelect: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={checked}
      className={`rounded-2xl border-2 px-2.5 py-3 text-center text-[0.92rem] font-semibold transition-colors ${
        checked
          ? "border-(--color-secondary) bg-(--color-secondary-light) text-(--color-secondary)"
          : "border-(--color-border) text-(--color-text)"
      }`}
    >
      {label}
    </button>
  );
}

function InsurerCard({ insurer }: { insurer: Insurer }) {
  const price = formatPrice(insurer.price_from_cents);
  const href = insurer.affiliate_enabled && insurer.affiliate_url ? insurer.affiliate_url : insurer.website_url;

  return (
    <article className="flex flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 shadow-[var(--shadow)]">
      <h3 className="mb-2.5 text-[1.08rem]">{insurer.name}</h3>

      {price && <p className="mb-2 font-heading font-bold text-(--color-secondary)">{price}</p>}

      <div className="mb-3 flex flex-wrap gap-1.5">
        {insurer.species.map((s) => (
          <span
            key={s}
            className="rounded-full bg-(--color-secondary-light) px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-(--color-secondary)"
          >
            {especieLabels[s] ?? s}
          </span>
        ))}
        {insurer.coverages.map((c) => (
          <span
            key={c}
            className="rounded-full bg-(--color-secondary-light) px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-(--color-primary-dark)"
          >
            {coberturaLabels[c] ?? c}
          </span>
        ))}
      </div>

      <p className="mb-3 flex-grow text-[0.92rem] text-(--color-text-light)">{insurer.description}</p>

      <p className="mb-3 text-[0.82rem] text-(--color-text-light)">
        {insurer.rating != null
          ? `${insurer.rating.toFixed(1)} / 5 (${insurer.rating_count ?? "?"} opiniones${
              insurer.rating_source ? ` · ${insurer.rating_source}` : ""
            })`
          : "No hay suficientes opiniones verificables disponibles."}
      </p>

      <a
        href={href}
        target="_blank"
        rel={insurer.affiliate_enabled ? "sponsored noopener noreferrer" : "noopener noreferrer"}
        className="mt-auto rounded-full bg-(--color-primary) px-5 py-2.5 text-center text-[0.95rem] font-bold text-white hover:bg-(--color-primary-dark)"
      >
        Ver web oficial y contratar
      </a>
    </article>
  );
}
