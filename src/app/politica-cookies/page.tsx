import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies utiliza Mi Seguro Mascota, con qué finalidad y cómo aceptarlas o rechazarlas, incluidas las cookies de Google AdSense.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politica-cookies" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Política de cookies" title="Política de cookies" showAd={false}>
      <p>
        <em>Última actualización: 23/08/2026.</em>
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en tu
        navegador para recordar información sobre tu visita, como tus preferencias
        o tu actividad de navegación.
      </p>

      <h2>Cookies que utilizamos</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Finalidad</th>
            <th>¿Requiere consentimiento?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Técnicas / necesarias</td>
            <td>Recordar tu elección sobre el propio aviso de cookies</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Analíticas</td>
            <td>Medir visitas y comportamiento agregado en el sitio</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Publicitarias (Google AdSense)</td>
            <td>Mostrar anuncios, en su caso personalizados según tu navegación</td>
            <td>Sí</td>
          </tr>
        </tbody>
      </table>

      <h2>Cómo gestionamos tu consentimiento</h2>
      <p>
        Al entrar por primera vez al sitio, verás un aviso en la parte inferior de
        la pantalla con las opciones <strong>Aceptar</strong> y{" "}
        <strong>Rechazar</strong>. Mientras no aceptes expresamente, no se cargan
        los scripts de Google AdSense ni se muestran anuncios personalizados.
        Puedes cambiar tu decisión en cualquier momento borrando las cookies de tu
        navegador, lo que hará que el aviso vuelva a aparecer en tu próxima
        visita.
      </p>

      <h2>Cookies de terceros: Google AdSense</h2>
      <p>
        Google, como proveedor de publicidad de terceros, puede utilizar cookies
        propias para mostrar anuncios basados en tus visitas anteriores a este
        sitio y a otros sitios web. Puedes inhabilitar el uso de cookies de
        personalización de anuncios de Google visitando{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener">
          adssettings.google.com
        </a>
        .
      </p>

      <h2>Cómo desactivar las cookies desde tu navegador</h2>
      <p>
        Además de nuestro panel de consentimiento, puedes configurar tu navegador
        para bloquear o eliminar cookies. Ten en cuenta que bloquear todas las
        cookies puede afectar al funcionamiento de este y otros sitios web.
      </p>

      <p>
        Consulta también nuestra{" "}
        <Link href="/politica-privacidad">política de privacidad</Link>.
      </p>
    </ArticleShell>
  );
}
