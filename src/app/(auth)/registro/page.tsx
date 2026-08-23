import type { Metadata } from "next";
import { RegistroForm } from "./RegistroForm";

export const metadata: Metadata = {
  title: "Crear cuenta",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RegistroForm />;
}
