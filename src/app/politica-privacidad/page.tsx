import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Mi Seguro Mascota: qué datos se recogen, con qué finalidad y cómo ejercer tus derechos.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politica-privacidad" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Política de privacidad" title="Política de privacidad">
      <p>
        <em>Última actualización: 23/08/2026.</em>
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Ángel Frasco-Novo Pazos (NIF 45904598W), con domicilio en Carrer del Vicari
        Camarena, 6b, 46185 La Pobla de Vallbona, València, correo de contacto{" "}
        <a href="mailto:hola@miseguromascota.netlify.app">hola@miseguromascota.netlify.app</a>
        , es el responsable del tratamiento de los datos personales recogidos a
        través de este sitio web (miseguromascota.netlify.app).
      </p>

      <h2>2. Qué datos recogemos</h2>
      <ul>
        <li>
          <strong>Datos de navegación:</strong> dirección IP, tipo de navegador,
          páginas visitadas y tiempo de permanencia, recogidos de forma agregada
          mediante cookies y tecnologías similares.
        </li>
        <li>
          <strong>Datos que nos facilitas voluntariamente:</strong> nombre y
          correo electrónico si nos contactas a través del formulario o email de
          contacto.
        </li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <ul>
        <li>Responder a tus consultas o mensajes de contacto.</li>
        <li>Analizar el uso del sitio para mejorar su contenido.</li>
        <li>
          Mostrar publicidad, incluida publicidad personalizada a través de Google
          AdSense, siempre que hayas dado tu consentimiento mediante el aviso de
          cookies.
        </li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        El tratamiento se basa en tu consentimiento (para cookies publicitarias y
        de análisis) y en el interés legítimo de responder a las comunicaciones
        que nos envíes.
      </p>

      <h2>5. Publicidad y terceros: Google AdSense</h2>
      <p>
        Este sitio utiliza Google AdSense para mostrar anuncios. Google, como
        tercero, puede utilizar cookies para mostrar anuncios basados en tus
        visitas anteriores a este y otros sitios web. Puedes obtener más
        información sobre cómo Google usa los datos y gestionar tus preferencias
        de anuncios en{" "}
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">
          policies.google.com/technologies/ads
        </a>{" "}
        y en{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener">
          adssettings.google.com
        </a>
        .
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación y portabilidad escribiendo a{" "}
        <a href="mailto:hola@miseguromascota.netlify.app">hola@miseguromascota.netlify.app</a>
        . También puedes presentar una reclamación ante la Agencia Española de
        Protección de Datos (AEPD) si consideras que tus datos no han sido
        tratados correctamente.
      </p>

      <h2>7. Conservación de los datos</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para cumplir con la
        finalidad para la que se recogieron y, en su caso, durante los plazos
        legalmente exigibles.
      </p>

      <p>
        Consulta también nuestra{" "}
        <Link href="/politica-cookies">política de cookies</Link> y nuestro{" "}
        <Link href="/aviso-legal">aviso legal</Link>.
      </p>
    </ArticleShell>
  );
}
