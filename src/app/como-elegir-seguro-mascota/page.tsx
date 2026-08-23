import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Cómo elegir el mejor seguro para tu mascota: checklist práctico",
  description:
    "Checklist paso a paso para comparar seguros de mascotas: coberturas, carencias, exclusiones, red de veterinarios y letra pequeña que no debes pasar por alto.",
  alternates: { canonical: "/como-elegir-seguro-mascota" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Cómo elegir" title="Cómo elegir el mejor seguro para tu mascota">
      <p>
        Con tantas opciones en el mercado, elegir por precio a secas es el error más
        común. Este checklist te ayuda a comparar lo que de verdad importa.
      </p>

      <h2>1. Define qué necesitas cubrir</h2>
      <p>
        ¿Buscas solo protección ante imprevistos graves, o quieres también cubrir
        revisiones y vacunas del día a día? Responder esto primero evita pagar de
        más por extras que no vas a usar, o quedarte corto en lo esencial.
      </p>

      <h2>2. Compara la letra pequeña, no solo el precio</h2>
      <ul>
        <li>Periodos de carencia para cada tipo de cobertura.</li>
        <li>Exclusiones específicas (razas, edades, patologías hereditarias).</li>
        <li>Límite de capital asegurado por siniestro, por año y de por vida.</li>
        <li>Franquicia o copago aplicable.</li>
        <li>Si el pago es directo en clínica o por reembolso.</li>
      </ul>

      <h2>3. Revisa la red de veterinarios concertados</h2>
      <p>
        Si el modelo es de pago directo, comprueba que existan clínicas concertadas
        cerca de donde vives o donde sueles viajar. Una red muy limitada puede
        obligarte a desplazarte lejos en una urgencia.
      </p>

      <h2>4. Pregunta cómo evoluciona el precio con la edad</h2>
      <p>
        Algunas pólizas incrementan la cuota de forma notable a medida que la
        mascota envejece, justo cuando más se necesita la cobertura. Pregunta
        explícitamente por la política de renovación y de incrementos por edad.
      </p>

      <h2>5. Comprueba las condiciones de cancelación</h2>
      <p>
        Infórmate sobre plazos de permanencia, preaviso necesario para no renovar y
        si existe algún tipo de penalización por baja anticipada.
      </p>

      <h2>6. Lee opiniones, pero con criterio</h2>
      <p>
        Las reseñas ayudan a detectar patrones (por ejemplo, quejas repetidas sobre
        demoras en el pago de reembolsos), pero recuerda que las experiencias
        individuales pueden no ser representativas. Contrasta varias fuentes.
      </p>

      <h2>7. Pide varios presupuestos con el mismo perfil</h2>
      <p>
        Introduce los mismos datos de tu mascota (especie, raza, edad, código
        postal) en distintas aseguradoras o comparadores para obtener cifras
        comparables entre sí.
      </p>

      <blockquote>
        Ninguna cobertura es &quot;la mejor&quot; en abstracto: la mejor póliza es la
        que se ajusta a tu presupuesto, al perfil de riesgo de tu mascota y a lo que
        tú consideras importante cubrir.
      </blockquote>

      <p>
        Consulta también nuestras{" "}
        <Link href="/preguntas-frecuentes">preguntas frecuentes</Link> para resolver
        dudas concretas.
      </p>
    </ArticleShell>
  );
}
