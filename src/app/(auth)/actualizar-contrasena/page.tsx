import type { Metadata } from "next";
import { ActualizarForm } from "./ActualizarForm";

export const metadata: Metadata = {
  title: "Nueva contraseña",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ActualizarForm />;
}
