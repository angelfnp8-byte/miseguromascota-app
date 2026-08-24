"use client";

import { useActionState, useState } from "react";
import type { AnimalFormState } from "@/app/adopcion/actions";
import { animalTypeLabels, genderLabels, vaccinatedLabels } from "@/lib/animal-labels";
import { temperamentGroups, temperamentLabels } from "@/lib/temperament";
import { breedsForType } from "@/lib/breeds";
import type { Animal, AnimalType } from "@/lib/supabase/types";

const initialState: AnimalFormState = { error: null };

export function AnimalForm({
  action,
  defaultValues,
  submitLabel,
}: {
  action: (prev: AnimalFormState, formData: FormData) => Promise<AnimalFormState>;
  defaultValues?: Animal;
  submitLabel: string;
}) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [type, setType] = useState<AnimalType | "">(defaultValues?.type ?? "");
  const breedOptions = type ? breedsForType(type) : [];

  return (
    <form action={formAction} encType="multipart/form-data" className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Tipo de animal">
          <select
            name="type"
            required
            value={type}
            onChange={(e) => setType(e.target.value as AnimalType)}
            className={selectClass}
          >
            <option value="" disabled>
              Elige uno
            </option>
            {Object.entries(animalTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Nombre">
          <input name="name" required defaultValue={defaultValues?.name} className={inputClass} />
        </Field>

        <Field label="Edad">
          <div className="flex gap-2">
            <input
              type="number"
              name="ageValue"
              min={0}
              required
              defaultValue={defaultValues?.age_value}
              className={inputClass}
            />
            <select name="ageUnit" defaultValue={defaultValues?.age_unit ?? "meses"} className={selectClass}>
              <option value="meses">Meses</option>
              <option value="anos">Años</option>
            </select>
          </div>
        </Field>

        <Field label="Género">
          <select name="gender" required defaultValue={defaultValues?.gender ?? ""} className={selectClass}>
            <option value="" disabled>
              Elige uno
            </option>
            {Object.entries(genderLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Raza">
          <select
            name="breedType"
            required
            defaultValue={defaultValues?.breed_type ?? ""}
            className={selectClass}
          >
            <option value="" disabled>
              Elige una
            </option>
            <option value="definida">Raza definida</option>
            <option value="cruce">Cruce / no lo sé con certeza</option>
          </select>
        </Field>

        <Field label="Nombre de la raza (si la conoces)">
          <input
            name="breed"
            list="breed-options"
            placeholder={breedOptions.length ? "Empieza a escribir…" : "p. ej. Labrador Retriever"}
            defaultValue={defaultValues?.breed ?? ""}
            className={inputClass}
          />
        </Field>

        <Field label="Razas del cruce (si las conoces)">
          <input
            name="mixedBreeds"
            list="breed-options"
            placeholder="p. ej. Labrador + Podenco"
            defaultValue={defaultValues?.mixed_breeds ?? ""}
            className={inputClass}
          />
        </Field>

        <datalist id="breed-options">
          {breedOptions.map((breed) => (
            <option key={breed} value={breed} />
          ))}
        </datalist>

        <Field label="Vacunación">
          <select
            name="vaccinated"
            required
            defaultValue={defaultValues?.vaccinated ?? ""}
            className={selectClass}
          >
            <option value="" disabled>
              Elige una
            </option>
            {Object.entries(vaccinatedLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Ciudad">
          <input
            name="locationCity"
            required
            defaultValue={defaultValues?.location_city}
            className={inputClass}
          />
        </Field>

        <Field label="Provincia / región">
          <input
            name="locationRegion"
            required
            defaultValue={defaultValues?.location_region}
            className={inputClass}
          />
        </Field>

        <Field label="Teléfono de contacto">
          <input
            type="tel"
            name="contactPhone"
            required
            defaultValue={defaultValues?.contact_phone}
            className={inputClass}
          />
        </Field>

        <Field label="Email de contacto">
          <input
            type="email"
            name="contactEmail"
            required
            defaultValue={defaultValues?.contact_email}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Descripción">
        <textarea
          name="description"
          required
          rows={5}
          defaultValue={defaultValues?.description}
          className={inputClass}
        />
      </Field>

      <div>
        <span className="mb-2 block text-[0.9rem] font-semibold">
          Rasgos (opcional, pero ayudan a calcular la compatibilidad con quien adopte)
        </span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {temperamentGroups.map((group) => (
            <fieldset key={group.title} className="rounded-xl border border-(--color-border) p-3.5">
              <legend className="px-1 text-[0.8rem] font-bold text-(--color-text-light)">
                {group.title}
              </legend>
              <div className="flex flex-col gap-1.5">
                {group.tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2 text-[0.88rem]">
                    <input
                      type="checkbox"
                      name="temperament"
                      value={tag}
                      defaultChecked={defaultValues?.temperament?.includes(tag)}
                    />
                    {temperamentLabels[tag]}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      <Field label="Fotos (opcional, hasta 6, JPG/PNG/WebP, máx. 5MB cada una)">
        <input type="file" name="photos" accept="image/jpeg,image/png,image/webp" multiple className={inputClass} />
      </Field>

      {state.error && <p className="text-[0.9rem] text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-(--color-primary) px-8 py-3 font-bold text-white hover:bg-(--color-primary-dark) disabled:opacity-60"
      >
        {pending ? "Guardando…" : submitLabel}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border-2 border-(--color-border) bg-(--color-surface) px-4 py-2.5 text-(--color-text)";
const selectClass = inputClass;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.9rem] font-semibold">{label}</span>
      {children}
    </label>
  );
}
