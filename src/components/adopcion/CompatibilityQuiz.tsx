"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { TemperamentTag } from "@/lib/temperament";

type YesNo = "si" | "no" | null;
type Activity = "mucha" | "moderada" | "poca" | null;
type Company = "carinosa" | "tranquila" | "independiente" | "jugueton" | null;

type Note = { text: string; tone: "warning" | "positive" };

function has(temperament: TemperamentTag[], tag: TemperamentTag) {
  return temperament.includes(tag);
}

function computeScore(
  temperament: TemperamentTag[],
  answers: {
    hasDogs: YesNo;
    hasCats: YesNo;
    hasKids: YesNo;
    activity: Activity;
    firstPet: YesNo;
    company: Company;
    aloneHours: YesNo;
  },
): { score: number; notes: Note[]; answered: boolean } {
  const notes: Note[] = [];
  let score = 100;
  let answeredCount = 0;

  if (answers.hasDogs) {
    answeredCount++;
    if (answers.hasDogs === "si" && has(temperament, "no_sociable_perros")) {
      score -= 30;
      notes.push({ tone: "warning", text: "Este animal no se lleva bien con otros perros, y tienes perros en casa." });
    } else if (answers.hasDogs === "si" && has(temperament, "sociable_perros")) {
      score += 5;
      notes.push({ tone: "positive", text: "Se lleva bien con otros perros." });
    }
  }

  if (answers.hasCats) {
    answeredCount++;
    if (answers.hasCats === "si" && has(temperament, "no_sociable_gatos")) {
      score -= 30;
      notes.push({ tone: "warning", text: "Este animal no se lleva bien con gatos, y tienes gatos en casa." });
    } else if (answers.hasCats === "si" && has(temperament, "sociable_gatos")) {
      score += 5;
      notes.push({ tone: "positive", text: "Se lleva bien con gatos." });
    }
  }

  if (answers.hasKids) {
    answeredCount++;
    if (answers.hasKids === "si" && has(temperament, "no_sociable_ninos")) {
      score -= 30;
      notes.push({ tone: "warning", text: "Este animal no se lleva bien con niños, e indicaste que hay niños en casa." });
    } else if (answers.hasKids === "si" && has(temperament, "sociable_ninos")) {
      score += 5;
      notes.push({ tone: "positive", text: "Se lleva bien con niños." });
    }
  }

  if (answers.activity) {
    answeredCount++;
    const wantsLots = answers.activity === "mucha";
    const wantsLittle = answers.activity === "poca";
    if (wantsLots && has(temperament, "poco_activo")) {
      score -= 15;
      notes.push({ tone: "warning", text: "Puedes ofrecer mucha actividad, pero este animal es poco activo." });
    } else if (wantsLittle && has(temperament, "muy_activo")) {
      score -= 15;
      notes.push({ tone: "warning", text: "Este animal es muy activo y necesita más ejercicio del que indicaste poder ofrecer." });
    } else if (
      (wantsLots && has(temperament, "muy_activo")) ||
      (wantsLittle && has(temperament, "poco_activo")) ||
      (answers.activity === "moderada" && has(temperament, "actividad_moderada"))
    ) {
      score += 5;
      notes.push({ tone: "positive", text: "El nivel de actividad encaja con lo que puedes ofrecer." });
    }
  }

  if (answers.firstPet) {
    answeredCount++;
    if (answers.firstPet === "si" && has(temperament, "necesita_experiencia")) {
      score -= 15;
      notes.push({ tone: "warning", text: "Este animal necesita a alguien con experiencia previa, y sería tu primera mascota." });
    } else if (answers.firstPet === "si" && has(temperament, "apto_primerizos")) {
      score += 5;
      notes.push({ tone: "positive", text: "Es un animal apto para quien adopta por primera vez." });
    }
  }

  if (answers.company) {
    answeredCount++;
    const map: Record<Exclude<Company, null>, TemperamentTag> = {
      carinosa: "carinoso",
      tranquila: "tranquilo",
      independiente: "independiente",
      jugueton: "jugueton",
    };
    if (has(temperament, map[answers.company])) {
      score += 5;
      notes.push({ tone: "positive", text: "Su carácter coincide con lo que buscas." });
    }
  }

  if (answers.aloneHours) {
    answeredCount++;
    if (answers.aloneHours === "no" && !has(temperament, "se_puede_quedar_solo")) {
      score -= 10;
      notes.push({
        tone: "warning",
        text: "Indicaste que no puedes dejarlo solo muchas horas, y quien publicó el anuncio no ha confirmado que se quede bien solo.",
      });
    } else if (has(temperament, "se_puede_quedar_solo")) {
      score += 5;
      notes.push({ tone: "positive", text: "Se puede quedar solo varias horas." });
    }
  }

  return { score: Math.max(0, Math.min(100, score)), notes, answered: answeredCount > 0 };
}

export function CompatibilityQuiz({ temperament }: { temperament: string[] }) {
  const [hasDogs, setHasDogs] = useState<YesNo>(null);
  const [hasCats, setHasCats] = useState<YesNo>(null);
  const [hasKids, setHasKids] = useState<YesNo>(null);
  const [activity, setActivity] = useState<Activity>(null);
  const [firstPet, setFirstPet] = useState<YesNo>(null);
  const [company, setCompany] = useState<Company>(null);
  const [aloneHours, setAloneHours] = useState<YesNo>(null);

  const result = useMemo(
    () =>
      computeScore(temperament as TemperamentTag[], {
        hasDogs,
        hasCats,
        hasKids,
        activity,
        firstPet,
        company,
        aloneHours,
      }),
    [temperament, hasDogs, hasCats, hasKids, activity, firstPet, company, aloneHours],
  );

  if (temperament.length === 0) {
    return (
      <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
        <h3 className="mb-1.5 text-[1rem]">Compatibilidad</h3>
        <p className="mb-0 text-[0.88rem] text-(--color-text-light)">
          Quien publicó este anuncio todavía no ha indicado el carácter del animal —
          pregúntaselo directamente al contactar.
        </p>
      </div>
    );
  }

  const label =
    result.score >= 80
      ? "Muy buena compatibilidad"
      : result.score >= 55
        ? "Compatibilidad razonable — ten esto en cuenta"
        : "Compatibilidad baja — revisa estos puntos";

  const labelColor =
    result.score >= 80 ? "text-(--color-secondary)" : result.score >= 55 ? "text-(--color-primary)" : "text-red-600";

  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
      <h3 className="mb-3 text-[1rem]">Cuestionario de compatibilidad</h3>

      <div className="flex flex-col gap-3.5">
        <QuizRow label="¿Tienes otros perros en casa?">
          <YesNoButtons value={hasDogs} onChange={setHasDogs} />
        </QuizRow>
        <QuizRow label="¿Tienes gatos en casa?">
          <YesNoButtons value={hasCats} onChange={setHasCats} />
        </QuizRow>
        <QuizRow label="¿Hay niños pequeños en casa?">
          <YesNoButtons value={hasKids} onChange={setHasKids} />
        </QuizRow>
        <QuizRow label="¿Cuánta actividad diaria puedes ofrecerle?">
          <div className="flex flex-wrap gap-1.5">
            <ChoiceButton active={activity === "mucha"} onClick={() => setActivity("mucha")}>
              Mucha
            </ChoiceButton>
            <ChoiceButton active={activity === "moderada"} onClick={() => setActivity("moderada")}>
              Moderada
            </ChoiceButton>
            <ChoiceButton active={activity === "poca"} onClick={() => setActivity("poca")}>
              Poca
            </ChoiceButton>
          </div>
        </QuizRow>
        <QuizRow label="¿Es la primera mascota que tienes?">
          <YesNoButtons value={firstPet} onChange={setFirstPet} />
        </QuizRow>
        <QuizRow label="¿Puedes dejarlo solo varias horas al día? (opcional)">
          <YesNoButtons value={aloneHours} onChange={setAloneHours} />
        </QuizRow>
        <QuizRow label="¿Qué compañía buscas? (opcional)">
          <div className="flex flex-wrap gap-1.5">
            <ChoiceButton active={company === "carinosa"} onClick={() => setCompany("carinosa")}>
              Cariñosa
            </ChoiceButton>
            <ChoiceButton active={company === "tranquila"} onClick={() => setCompany("tranquila")}>
              Tranquila
            </ChoiceButton>
            <ChoiceButton active={company === "independiente"} onClick={() => setCompany("independiente")}>
              Independiente
            </ChoiceButton>
            <ChoiceButton active={company === "jugueton"} onClick={() => setCompany("jugueton")}>
              Juguetona
            </ChoiceButton>
          </div>
        </QuizRow>
      </div>

      {result.answered && (
        <div className="mt-4 border-t border-(--color-border) pt-4">
          <p className={`mb-1 text-[1.3rem] font-bold ${labelColor}`}>{result.score}% — {label}</p>
          {result.notes.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1.5 text-[0.85rem]">
              {result.notes.map((note, i) => (
                <li key={i} className={note.tone === "warning" ? "text-red-600" : "text-(--color-secondary)"}>
                  {note.tone === "warning" ? "⚠️ " : "✅ "}
                  {note.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function QuizRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[0.85rem] font-semibold">{label}</span>
      {children}
    </div>
  );
}

function YesNoButtons({ value, onChange }: { value: YesNo; onChange: (v: YesNo) => void }) {
  return (
    <div className="flex gap-1.5">
      <ChoiceButton active={value === "si"} onClick={() => onChange("si")}>
        Sí
      </ChoiceButton>
      <ChoiceButton active={value === "no"} onClick={() => onChange("no")}>
        No
      </ChoiceButton>
    </div>
  );
}

function ChoiceButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] font-semibold ${
        active
          ? "border-(--color-secondary) bg-(--color-secondary) text-white"
          : "border-(--color-border) bg-(--color-bg) text-(--color-text) hover:bg-(--color-secondary-light)"
      }`}
    >
      {children}
    </button>
  );
}
