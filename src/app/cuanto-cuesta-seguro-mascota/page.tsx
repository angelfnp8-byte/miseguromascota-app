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
        cobertura elegida y las características del animal. Estos rangos son{" "}
        <strong>orientativos</strong> y sirven para hacerte una idea general antes
        de pedir cotizaciones reales.
      </p>

      <table>
        <thead>
          <tr>
            <th>Tipo de cobertura</th>
            <th>Rango mensual orientativo</th>
            <th>Qué determina el precio final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responsabilidad civil básica</td>
            <td>Desde unos pocos euros/mes</td>
            <td>Raza, zona, capital asegurado</td>
          </tr>
          <tr>
            <td>Accidentes</td>
            <td>Rango bajo-medio</td>
            <td>Edad, tamaño, actividad</td>
          </tr>
          <tr>
            <td>Enfermedad</td>
            <td>Rango medio</td>
            <td>Raza, historial, edad</td>
          </tr>
          <tr>
            <td>Completa / todo incluido</td>
            <td>Rango medio-alto</td>
            <td>Cobertura, franquicia, extras incluidos</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        Estos rangos son ilustrativos y no proceden de una aseguradora concreta: los
        precios reales cambian constantemente según la compañía, la campaña
        comercial y el perfil exacto de la mascota. Usa siempre un comparador o
        solicita presupuestos directos para cifras actualizadas.
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
