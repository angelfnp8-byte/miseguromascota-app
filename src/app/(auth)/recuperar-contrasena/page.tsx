import type { Metadata } from "next";
import { RecuperarForm } from "./RecuperarForm";

export const metadata: Metadata = {
  title: "Recuperar contraseña",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RecuperarForm />;
}
