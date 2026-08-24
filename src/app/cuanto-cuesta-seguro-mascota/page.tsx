import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta un seguro para mascotas en España? Precios orientativos",
  description:
    "Rangos de precio orientativos de seguros para perros y gatos en España y los factores que más influyen en la cuota mensual: edad, raza, franquicia y cobertura.",
  alternates: { canonical: "/cuanto-cuesta-seguro-mascota" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Precios" title="¿Cuánto cuesta un seguro para mascotas en España?">
      <p>
        El precio de un seguro de mascotas varía mucho según la aseguradora, la
        cobertura elegida y las características del animal. Esta tabla recoge{" "}
        <strong>ejemplos reales de precio &quot;desde&quot;</strong> publicados por
        cada aseguradora (o citados por su propia empresa en cobertura de prensa
        cuando no publican una cifra fija en su web), ordenados de menor a mayor
        cuota mensual — no son el precio que pagarías tú, que depende de tu
        mascota y tu perfil, pero dan una idea real del rango del mercado.
      </p>

      <table>
        <thead>
          <tr>
            <th>Aseguradora</th>
            <th>Cobertura</th>
            <th>Desde (orientativo)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mapfre</td>
            <td>Responsabilidad civil</td>
            <td>2,50 €/mes (30 €/año)</td>
          </tr>
          <tr>
            <td>Caser</td>
            <td>Responsabilidad civil</td>
            <td>3,90 €/mes</td>
          </tr>
          <tr>
            <td>Línea Directa</td>
            <td>Esencial (básica)</td>
            <td>3,33 €/mes (39,90 €/año)</td>
          </tr>
          <tr>
            <td>Allianz</td>
            <td>Responsabilidad civil</td>
            <td>4,25 €/mes (51 €/año)</td>
          </tr>
          <tr>
            <td>Línea Directa</td>
            <td>Completo</td>
            <td>5,83 €/mes (69,90 €/año)</td>
          </tr>
          <tr>
            <td>Allianz</td>
            <td>Completo (con visitas veterinarias)</td>
            <td>6,08 €/mes (73 €/año)</td>
          </tr>
          <tr>
            <td>ASISA</td>
            <td>Salud básica (accidentes)</td>
            <td>9,90 €/mes</td>
          </tr>
          <tr>
            <td>petolo</td>
            <td>Salud completa (Confort)</td>
            <td>16,90 €/mes</td>
          </tr>
          <tr>
            <td>Barkibu</td>
            <td>Salud completa</td>
            <td>20 €/mes aprox.</td>
          </tr>
          <tr>
            <td>petolo</td>
            <td>Salud completa (Premium)</td>
            <td>26,90 €/mes</td>
          </tr>
          <tr>
            <td>petolo</td>
            <td>Salud completa (Premium Plus)</td>
            <td>38,90 €/mes</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        Estos son precios de entrada de cada aseguradora en la modalidad indicada,
        con fecha de comprobación 24/08/2026 — no incluyen extras, pueden variar por
        campaña comercial y cambian con el tiempo. Consulta la ficha de cada una en
        el <Link href="/comparador">comparador</Link> para ver más detalle y el
        enlace directo a su web oficial.
      </blockquote>

      <h2>Factores que más mueven el precio</h2>
      <h3>Edad de la mascota</h3>
      <p>
        Cuanto más joven es el animal al contratar, generalmente más bajo es el
        precio inicial y menor el riesgo de exclusiones por preexistencias. A
        partir de cierta edad (variable según aseguradora), algunas compañías
        limitan la contratación de pólizas nuevas o encarecen significativamente la
        prima.
      </p>

      <h3>Raza y tamaño</h3>
      <p>
        Razas con predisposición genética a determinadas patologías, o de tamaño
        grande/gigante, suelen tener primas más altas que razas medianas sin
        problemas hereditarios conocidos.
      </p>

      <h3>Zona geográfica</h3>
      <p>
        El coste de los servicios veterinarios varía entre ciudades y regiones, y
        las aseguradoras lo trasladan al precio de la póliza.
      </p>

      <h3>Franquicia o copago elegido</h3>
      <p>
        Aceptar una franquicia más alta (mayor parte del gasto a tu cargo) suele
        reducir la cuota mensual; elegir franquicia cero la encarece.
      </p>

      <h3>Límite de capital asegurado</h3>
      <p>
        Pólizas con topes de reembolso más altos, o sin límite, cuestan más que
        aquellas con topes anuales reducidos.
      </p>

      <h2>Cómo comparar precios de forma justa</h2>
      <p>
        Para comparar de verdad &quot;manzanas con manzanas&quot;, asegúrate de que
        las cotizaciones que recibas tengan: la misma franquicia, el mismo límite de
        capital asegurado, coberturas equivalentes (no solo el mismo nombre
        comercial) y el mismo periodo de carencia. Dos pólizas con el mismo precio
        pueden ofrecer una protección muy distinta.
      </p>

      <p>
        Sigue con nuestra guía de{" "}
        <Link href="/como-elegir-seguro-mascota">
          cómo elegir el mejor seguro para tu mascota
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
