import type { Metadata } from "next";
import { Suspense } from "react";
import { RegistroForm } from "./RegistroForm";

export const metadata: Metadata = {
  title: "Crear cuenta",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <RegistroForm />
    </Suspense>
  );
}
