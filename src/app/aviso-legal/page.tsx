import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal de Mi Seguro Mascota: identificación del titular, condiciones de uso y limitación de responsabilidad.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/aviso-legal" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Aviso legal" title="Aviso legal" showAd={false}>
      <p>
        <em>Última actualización: 23/08/2026.</em>
      </p>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa de que este
        sitio web, <a href="https://miseguromascota.com/">miseguromascota.com</a>,
        es titularidad de:
      </p>
      <ul>
        <li><strong>Titular:</strong> Ángel Frasco-Novo Pazos</li>
        <li><strong>NIF:</strong> 45904598W</li>
        <li>
          <strong>Domicilio:</strong> Carrer del Vicari Camarena, 6b, 46185 La
          Pobla de Vallbona, València
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href="mailto:hola@miseguromascota.netlify.app">hola@miseguromascota.netlify.app</a>
        </li>
      </ul>

      <h2>2. Objeto y naturaleza informativa del sitio</h2>
      <p>
        Mi Seguro Mascota es un sitio web de carácter informativo sobre seguros
        para mascotas. No somos una compañía aseguradora, agencia ni corredor de
        seguros, y no ofrecemos asesoramiento personalizado, cotizaciones
        vinculantes ni intermediación en la contratación de pólizas. La
        información publicada tiene fines exclusivamente divulgativos.
      </p>

      <h2>3. Limitación de responsabilidad</h2>
      <p>
        El titular no garantiza la exactitud, vigencia o exhaustividad de la
        información publicada, especialmente en lo referente a precios
        orientativos, que pueden variar en cualquier momento y no reflejan
        necesariamente las tarifas reales de ninguna aseguradora. El usuario es
        responsable de contrastar la información con las fuentes oficiales antes
        de tomar cualquier decisión.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los contenidos, textos, diseño y elementos gráficos de este sitio son
        propiedad de Ángel Frasco-Novo Pazos o se utilizan con la debida
        autorización, y están protegidos por la normativa de propiedad intelectual
        aplicable.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        Este sitio puede incluir enlaces a páginas de terceros. El titular no se
        hace responsable del contenido ni de las prácticas de privacidad de dichos
        sitios externos.
      </p>

      <h2>6. Publicidad</h2>
      <p>
        Este sitio muestra publicidad a través de Google AdSense. Los anuncios son
        gestionados por Google y sus anunciantes; el titular del sitio no
        participa en la selección individual de cada anuncio mostrado.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>Las presentes condiciones se rigen por la legislación española.</p>

      <p>
        Consulta también nuestra{" "}
        <Link href="/politica-privacidad">política de privacidad</Link> y nuestra{" "}
        <Link href="/politica-cookies">política de cookies</Link>.
      </p>
    </ArticleShell>
  );
}
