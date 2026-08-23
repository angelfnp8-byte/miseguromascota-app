import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Seguro para perros vs. seguro para gatos: diferencias clave",
  description:
    "Por qué el seguro de un perro suele costar distinto al de un gato: raza, tamaño, esperanza de vida y riesgos veterinarios más comunes en cada especie.",
  alternates: { canonical: "/seguro-perros-vs-gatos" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Perros vs. gatos" title="Seguro para perros vs. seguro para gatos: ¿en qué se diferencian?">
      <p>
        Aunque ambos parten del mismo principio, las aseguradoras suelen calcular el
        precio y diseñar las coberturas de forma distinta según la especie. Estas
        son las diferencias más relevantes.
      </p>

      <h2>Factores que influyen más en los perros</h2>
      <ul>
        <li>
          <strong>Raza y tamaño:</strong> algunas razas grandes tienen más
          predisposición a problemas de cadera o articulaciones; ciertas razas
          braquicéfalas (bulldog, carlino) presentan más riesgos respiratorios.
        </li>
        <li>
          <strong>Nivel de actividad:</strong> perros muy activos o que pasan tiempo
          al aire libre tienen mayor probabilidad de sufrir accidentes.
        </li>
        <li>
          <strong>Clasificación como raza potencialmente peligrosa:</strong> obliga
          a contratar un seguro de responsabilidad civil específico por normativa.
        </li>
      </ul>

      <h2>Factores que influyen más en los gatos</h2>
      <ul>
        <li>
          <strong>Acceso al exterior:</strong> un gato que sale a la calle tiene más
          riesgo de accidentes de tráfico, peleas o contagios que uno estrictamente
          de interior.
        </li>
        <li>
          <strong>Enfermedades renales y urinarias:</strong> son patologías
          frecuentes en gatos y suelen figurar entre los motivos de consulta
          veterinaria más habituales, especialmente en edades avanzadas.
        </li>
        <li>
          <strong>Esterilización:</strong> puede influir en el cálculo de la prima
          en algunas aseguradoras.
        </li>
      </ul>

      <h2>¿Por qué el precio no siempre es comparable directamente?</h2>
      <p>
        Es habitual pensar que asegurar un gato &quot;debería&quot; ser más barato
        que un perro por su tamaño, pero el precio depende sobre todo del riesgo
        estadístico que cada aseguradora asigna a la combinación de especie, raza,
        edad y zona geográfica —no solo del tamaño del animal—. Por eso, la única
        forma fiable de comparar es pedir cotizaciones reales para el perfil exacto
        de tu mascota.
      </p>

      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>Perros</th>
            <th>Gatos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Riesgo principal</td>
            <td>Accidentes, problemas articulares según raza</td>
            <td>Enfermedades urinarias/renales, accidentes si salen al exterior</td>
          </tr>
          <tr>
            <td>Responsabilidad civil</td>
            <td>Obligatoria en razas PPP</td>
            <td>No suele ser obligatoria</td>
          </tr>
          <tr>
            <td>Variable de precio más influyente</td>
            <td>Raza y tamaño</td>
            <td>Acceso al exterior y edad</td>
          </tr>
        </tbody>
      </table>

      <p>
        Para profundizar en cifras orientativas, visita nuestra guía de{" "}
        <Link href="/cuanto-cuesta-seguro-mascota">precios de seguros para mascotas</Link>.
      </p>
    </ArticleShell>
  );
}
