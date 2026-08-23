import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "¿Qué es un seguro para mascotas y cómo funciona?",
  description:
    "Explicación clara de qué es un seguro de mascotas, cómo funciona el reembolso o pago directo, qué es la carencia y qué suele quedar excluido.",
  alternates: { canonical: "/que-es-seguro-mascotas" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Qué es un seguro de mascotas" title="¿Qué es un seguro para mascotas y cómo funciona?">
      <p>
        Un seguro para mascotas es un contrato entre tú y una aseguradora mediante el
        cual, a cambio del pago de una cuota periódica (normalmente mensual o anual),
        la compañía asume total o parcialmente el coste de determinados servicios
        veterinarios: consultas, pruebas diagnósticas, cirugías, hospitalización o, en
        algunos casos, responsabilidad civil frente a terceros.
      </p>
      <p>
        La idea es la misma que la de cualquier seguro: repartir un riesgo económico
        que, si ocurre, puede ser elevado. Una fractura, una obstrucción intestinal o
        una enfermedad crónica pueden suponer facturas veterinarias de varios cientos
        o miles de euros, algo que muchas familias no tienen previsto en su
        presupuesto.
      </p>

      <h2>Los dos modelos de pago más habituales</h2>
      <p>En España conviven principalmente dos formas de gestionar el pago de un siniestro veterinario:</p>
      <ul>
        <li>
          <strong>Pago directo en clínica concertada:</strong> la aseguradora tiene
          acuerdos con una red de clínicas veterinarias y paga directamente al
          centro, descontando solo tu copago o franquicia si la póliza lo contempla.
        </li>
        <li>
          <strong>Reembolso:</strong> tú pagas la factura completa en tu veterinario
          habitual (esté o no en la red) y después envías la documentación a la
          aseguradora, que te devuelve el importe cubierto según las condiciones
          contratadas.
        </li>
      </ul>

      <h2>Conceptos que conviene entender antes de contratar</h2>
      <h3>Periodo de carencia</h3>
      <p>
        Es el tiempo que debe transcurrir desde la contratación hasta que la
        cobertura empieza a aplicarse. Es habitual encontrar carencias distintas
        según el tipo de servicio: por ejemplo, unos días para accidentes y varias
        semanas para enfermedades.
      </p>

      <h3>Franquicia o copago</h3>
      <p>
        Es la parte del gasto que sigue pagando el propietario, ya sea como una
        cantidad fija por siniestro o como un porcentaje de la factura. A mayor
        franquicia, suele ser menor la cuota mensual, y viceversa.
      </p>

      <h3>Preexistencias</h3>
      <p>
        Las condiciones de salud que tu mascota ya tenía antes de contratar el
        seguro habitualmente quedan excluidas de la cobertura. Por eso, en general,
        cuanto antes se asegura a un animal joven y sano, más amplia puede ser la
        cobertura futura.
      </p>

      <h3>Límite de capital asegurado</h3>
      <p>
        Muchas pólizas fijan un tope máximo de reembolso por año, por siniestro o de
        por vida. Superado ese límite, los gastos adicionales corren de tu cuenta.
      </p>

      <blockquote>
        Antes de firmar, pide siempre las condiciones generales completas (no solo el
        resumen comercial) y revisa exclusiones, carencias y límites. Cada
        aseguradora regula estos puntos de forma distinta.
      </blockquote>

      <h2>¿Es obligatorio tener un seguro para mascotas en España?</h2>
      <p>
        No existe una obligación general de asegurar a perros o gatos como mascota
        de compañía. La excepción son los llamados <em>perros potencialmente
        peligrosos</em> (PPP), para los que la normativa autonómica exige un seguro
        de responsabilidad civil específico, independientemente de si se contrata
        además una cobertura veterinaria voluntaria.
      </p>

      <p>
        Quieres seguir profundizando: consulta los{" "}
        <Link href="/tipos-seguros-mascotas">tipos de seguro disponibles</Link> o
        revisa <Link href="/cuanto-cuesta-seguro-mascota">cuánto puede costar</Link>{" "}
        según el perfil de tu mascota.
      </p>
    </ArticleShell>
  );
}
