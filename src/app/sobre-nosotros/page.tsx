import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Quiénes somos y cuál es el propósito de Mi Seguro Mascota: información independiente sobre seguros para mascotas en España.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Sobre nosotros" title="Sobre Mi Seguro Mascota" showAd={false}>
      <p>
        Mi Seguro Mascota es un sitio informativo independiente creado para ayudar
        a familias en España a entender cómo funcionan los seguros para mascotas
        antes de contratarlos. No somos una aseguradora, no somos corredores de
        seguros ni actuamos como intermediarios: nuestro contenido tiene un
        propósito puramente educativo.
      </p>

      <h2>Nuestro enfoque editorial</h2>
      <p>
        Explicamos conceptos —coberturas, carencias, franquicias, exclusiones— en
        lenguaje sencillo, y ofrecemos rangos de precio orientativos basados en
        cómo funciona habitualmente el sector, no en tarifas de una compañía
        concreta. Recomendamos siempre contrastar la información con las
        condiciones oficiales de cada aseguradora antes de tomar una decisión.
      </p>

      <h2>Cómo nos mantenemos</h2>
      <p>
        Este sitio se financia mediante publicidad mostrada a través de Google
        AdSense. Los anuncios pueden estar personalizados en función de tu
        actividad de navegación si has dado tu consentimiento a través de nuestro
        aviso de cookies. Puedes consultar el detalle en nuestra{" "}
        <Link href="/politica-cookies">política de cookies</Link> y nuestra{" "}
        <Link href="/politica-privacidad">política de privacidad</Link>.
      </p>

      <h2>Contacto</h2>
      <p>
        Si detectas algún error en nuestro contenido o quieres proponer un tema,
        visita nuestra página de <Link href="/contacto">contacto</Link>.
      </p>
    </ArticleShell>
  );
}
