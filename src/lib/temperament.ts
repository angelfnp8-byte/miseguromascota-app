export const TEMPERAMENT_TAGS = [
  "carinoso",
  "tranquilo",
  "independiente",
  "timido",
  "protector",
  "muy_activo",
  "actividad_moderada",
  "poco_activo",
  "sociable_perros",
  "no_sociable_perros",
  "sociable_gatos",
  "no_sociable_gatos",
  "sociable_ninos",
  "no_sociable_ninos",
  "apto_primerizos",
  "necesita_experiencia",
] as const;

export type TemperamentTag = (typeof TEMPERAMENT_TAGS)[number];

export const temperamentLabels: Record<TemperamentTag, string> = {
  carinoso: "Cariñoso",
  tranquilo: "Tranquilo",
  independiente: "Independiente",
  timido: "Tímido / asustadizo",
  protector: "Protector",
  muy_activo: "Muy activo",
  actividad_moderada: "Actividad moderada",
  poco_activo: "Poco activo",
  sociable_perros: "Se lleva bien con otros perros",
  no_sociable_perros: "No se lleva bien con otros perros",
  sociable_gatos: "Se lleva bien con gatos",
  no_sociable_gatos: "No se lleva bien con gatos",
  sociable_ninos: "Se lleva bien con niños",
  no_sociable_ninos: "No se lleva bien con niños",
  apto_primerizos: "Apto para primerizos",
  necesita_experiencia: "Necesita experiencia previa",
};

export const temperamentGroups: { title: string; tags: TemperamentTag[] }[] = [
  { title: "Carácter", tags: ["carinoso", "tranquilo", "independiente", "timido", "protector"] },
  { title: "Nivel de actividad", tags: ["muy_activo", "actividad_moderada", "poco_activo"] },
  {
    title: "Convivencia",
    tags: [
      "sociable_perros",
      "no_sociable_perros",
      "sociable_gatos",
      "no_sociable_gatos",
      "sociable_ninos",
      "no_sociable_ninos",
    ],
  },
  { title: "Experiencia recomendada", tags: ["apto_primerizos", "necesita_experiencia"] },
];

/** Subset shown as quick filter chips in /adopcion — the rest only appear on the animal's page. */
export const FILTERABLE_TEMPERAMENT_TAGS: TemperamentTag[] = [
  "sociable_perros",
  "sociable_gatos",
  "sociable_ninos",
  "apto_primerizos",
  "muy_activo",
  "poco_activo",
];

export function isTemperamentTag(value: string): value is TemperamentTag {
  return (TEMPERAMENT_TAGS as readonly string[]).includes(value);
}
