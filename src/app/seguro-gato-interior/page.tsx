import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "¿Vale la pena asegurar a un gato que vive solo en interior?",
  description:
    "Análisis de los riesgos reales de un gato que nunca sale a la calle frente al coste de un seguro, y qué factores tener en cuenta antes de decidir.",
  alternates: { canonical: "/seguro-gato-interior" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Seguro para gatos de interior"
      title="¿Vale la pena asegurar a un gato que vive solo en interior?"
    >
      <p>
        Es una duda muy razonable: si tu gato nunca sale a la calle, ¿de verdad
        necesita un seguro? La respuesta corta es que el riesgo baja, pero no
        desaparece.
      </p>

      <h2>Los riesgos que sí desaparecen (o casi) en interior</h2>
      <p>
        Un gato que nunca sale reduce drásticamente su exposición a peleas con
        otros animales, atropellos, parásitos externos adquiridos en la calle o
        enfermedades infecciosas transmitidas por contacto con gatos callejeros.
        Este es, precisamente, el argumento más habitual para no asegurar a un gato
        de interior.
      </p>

      <h2>Los riesgos que siguen ahí, vivas donde vivas</h2>
      <ul>
        <li>
          <strong>Caídas desde ventanas o balcones</strong> (&quot;síndrome del
          gato paracaidista&quot;): es un motivo de urgencia veterinaria conocido
          en gatos de interior, precisamente porque confían en su equilibrio y
          pueden distraerse persiguiendo algo por la ventana.
        </li>
        <li>
          <strong>Enfermedades no relacionadas con el exterior</strong>: problemas
          renales, urinarios (frecuentes en gatos, sobre todo machos), dentales,
          diabetes o hipertiroidismo pueden aparecer independientemente de si el
          gato sale o no.
        </li>
        <li>
          <strong>Ingestión de objetos o plantas tóxicas</strong> dentro de casa
          (hilos, gomas, ciertas plantas de interior).
        </li>
        <li>
          <strong>Accidentes domésticos</strong>: quemaduras, cortes, atrapamientos.
        </li>
      </ul>

      <h2>Cómo decidir</h2>
      <p>No hay una respuesta única. Algunos factores que pueden inclinar la balanza:</p>
      <ul>
        <li>
          <strong>Tu colchón financiero</strong>: si una factura veterinaria
          imprevista de varios cientos de euros no supondría un problema, el
          seguro pesa menos en la decisión.
        </li>
        <li>
          <strong>La raza</strong>: algunas razas tienen predisposiciones genéticas
          conocidas a ciertas enfermedades, independientemente del estilo de vida.
        </li>
        <li>
          <strong>La edad</strong>: en gatos jóvenes y sanos, muchas familias optan
          por un seguro básico de accidentes; en gatos mayores, el riesgo de
          enfermedad aumenta y una cobertura de salud más completa puede compensar
          más.
        </li>
        <li>
          <strong>El coste real de la póliza</strong> frente al de una visita de
          urgencia en tu zona: compara antes de descartar la opción solo por
          intuición.
        </li>
      </ul>

      <p>
        Una alternativa intermedia habitual es contratar solo responsabilidad civil
        (barata, y útil incluso en interior si el gato causa algún daño, por
        ejemplo, a una visita) sin cobertura de salud, y reservar un fondo de
        ahorro propio para imprevistos veterinarios.
      </p>

      <blockquote>
        &quot;Vive en interior&quot; reduce el riesgo, no lo elimina. La decisión de
        asegurar o no depende más de tu situación financiera y de tu tolerancia al
        riesgo que del propio hecho de que el gato salga o no a la calle.
      </blockquote>

      <p>
        Consulta también nuestra guía de{" "}
        <Link href="/cuanto-cuesta-seguro-mascota">precios orientativos</Link> y el{" "}
        <Link href="/comparador">comparador de seguros</Link> para ver opciones
        concretas.
      </p>
    </ArticleShell>
  );
}
