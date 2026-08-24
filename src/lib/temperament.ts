export const TEMPERAMENT_TAGS = [
  // Carácter
  "carinoso",
  "tranquilo",
  "independiente",
  "timido",
  "protector",
  "jugueton",
  "testarudo",
  // Nivel de energía
  "muy_activo",
  "actividad_moderada",
  "poco_activo",
  // Sociabilización
  "sociable_perros",
  "no_sociable_perros",
  "sociable_gatos",
  "no_sociable_gatos",
  "sociable_ninos",
  "no_sociable_ninos",
  "sociable_desconocidos",
  "reservado_desconocidos",
  // Adiestramiento
  "obediente",
  "aprende_rapido",
  "necesita_entrenamiento",
  "sin_adiestrar",
  // Comportamiento en casa
  "tranquilo_en_casa",
  "vocal", // ladra o maúlla mucho
  "no_destructivo",
  "se_puede_quedar_solo",
  // Vida diaria
  "apto_piso_pequeno",
  "necesita_espacio_exterior",
  "va_bien_con_correa",
  // Experiencia recomendada
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
  jugueton: "Juguetón",
  testarudo: "Testarudo / cabezota",
  muy_activo: "Muy activo",
  actividad_moderada: "Actividad moderada",
  poco_activo: "Poco activo",
  sociable_perros: "Se lleva bien con otros perros",
  no_sociable_perros: "No se lleva bien con otros perros",
  sociable_gatos: "Se lleva bien con gatos",
  no_sociable_gatos: "No se lleva bien con gatos",
  sociable_ninos: "Se lleva bien con niños",
  no_sociable_ninos: "No se lleva bien con niños",
  sociable_desconocidos: "Sociable con desconocidos",
  reservado_desconocidos: "Reservado con desconocidos",
  obediente: "Obediente / fácil de adiestrar",
  aprende_rapido: "Aprende rápido",
  necesita_entrenamiento: "Necesita entrenamiento",
  sin_adiestrar: "Sin adiestrar todavía",
  tranquilo_en_casa: "Tranquilo en casa",
  vocal: "Ladra o maúlla mucho",
  no_destructivo: "No destructivo",
  se_puede_quedar_solo: "Se puede quedar solo varias horas",
  apto_piso_pequeno: "Apto para piso pequeño",
  necesita_espacio_exterior: "Necesita espacio exterior / jardín",
  va_bien_con_correa: "Va bien con correa",
  apto_primerizos: "Apto para primerizos",
  necesita_experiencia: "Necesita experiencia previa",
};

export const temperamentGroups: { title: string; tags: TemperamentTag[] }[] = [
  {
    title: "Carácter",
    tags: ["carinoso", "tranquilo", "independiente", "timido", "protector", "jugueton", "testarudo"],
  },
  { title: "Nivel de energía", tags: ["muy_activo", "actividad_moderada", "poco_activo"] },
  {
    title: "Sociabilización",
    tags: [
      "sociable_perros",
      "no_sociable_perros",
      "sociable_gatos",
      "no_sociable_gatos",
      "sociable_ninos",
      "no_sociable_ninos",
      "sociable_desconocidos",
      "reservado_desconocidos",
    ],
  },
  {
    title: "Adiestramiento",
    tags: ["obediente", "aprende_rapido", "necesita_entrenamiento", "sin_adiestrar"],
  },
  {
    title: "Comportamiento en casa",
    tags: ["tranquilo_en_casa", "vocal", "no_destructivo", "se_puede_quedar_solo"],
  },
  {
    title: "Vida diaria",
    tags: ["apto_piso_pequeno", "necesita_espacio_exterior", "va_bien_con_correa"],
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
  "obediente",
  "aprende_rapido",
  "se_puede_quedar_solo",
];

export function isTemperamentTag(value: string): value is TemperamentTag {
  return (TEMPERAMENT_TAGS as readonly string[]).includes(value);
}
