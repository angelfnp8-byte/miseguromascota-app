import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confirma tu email",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-[480px] px-5 py-14 text-center">
      <h1>Revisa tu email</h1>
      <p>
        Te hemos enviado un enlace de confirmación. Ábrelo para activar tu
        cuenta y poder iniciar sesión.
      </p>
      <Link href="/login" className="underline">
        Volver a iniciar sesión
      </Link>
    </div>
  );
}
