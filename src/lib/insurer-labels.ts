/** Pure, client-safe helpers — no server-only imports here. */
export const especieLabels: Record<string, string> = {
  perro: "Perro",
  gato: "Gato",
};

export const coberturaLabels: Record<string, string> = {
  rc: "Responsabilidad Civil",
  salud_basica: "Salud básica",
  salud_completa: "Salud completa",
};

export function formatPrice(cents: number | null): string | null {
  if (cents == null) return null;
  const euros = cents / 100;
  const formatted = Number.isInteger(euros) ? euros.toString() : euros.toFixed(2);
  return `Desde ${formatted} €/mes`;
}
