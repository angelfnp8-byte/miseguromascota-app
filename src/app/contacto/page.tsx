import type { Metadata } from "next";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con el equipo de Mi Seguro Mascota para dudas, sugerencias de contenido o correcciones.",
  alternates: { canonical: "/contacto" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Contacto" title="Contacto" showAd={false}>
      <p>
        ¿Has encontrado un error, quieres sugerir un tema o tienes una duda sobre
        el contenido del sitio? Escríbenos y te responderemos lo antes posible.
      </p>

      <p>
        <strong>Correo electrónico:</strong>{" "}
        <a href="mailto:hola@miseguromascota.netlify.app">hola@miseguromascota.netlify.app</a>
      </p>

      <blockquote>
        Recuerda que no somos una aseguradora ni intermediarios de seguros, por lo
        que no podemos gestionar pólizas, siniestros ni reclamaciones sobre
        contratos ya firmados con una compañía. Para esas gestiones, contacta
        directamente con tu aseguradora.
      </blockquote>
    </ArticleShell>
  );
}
