import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre seguros para mascotas",
  description:
    "Respuestas claras a las dudas más comunes sobre seguros para perros y gatos: edad mínima, preexistencias, carencias, cancelación y más.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const faqs = [
  {
    q: "¿A qué edad puedo asegurar a mi mascota?",
    a: "La mayoría de aseguradoras permite asegurar a cachorros y gatitos a partir de las 8-10 semanas de vida, y muchas fijan también una edad máxima de entrada, que varía según la compañía.",
  },
  {
    q: "¿Qué es una preexistencia y por qué no se cubre?",
    a: "Es una condición de salud que la mascota ya tenía antes de contratar la póliza. No se cubre porque el seguro está pensado para riesgos futuros e inciertos, no para gastos ya conocidos de antemano.",
  },
  {
    q: "¿Puedo cambiar de aseguradora sin perder cobertura?",
    a: "Es posible, pero ten en cuenta que la nueva aseguradora aplicará sus propios periodos de carencia y podría considerar como preexistente cualquier condición diagnosticada durante la póliza anterior.",
  },
  {
    q: "¿El seguro cubre la esterilización o las vacunas?",
    a: "Depende de la póliza. Algunas coberturas básicas no las incluyen, mientras que planes más completos añaden estos servicios como parte de un paquete de bienestar o prevención.",
  },
  {
    q: "¿Qué pasa si llevo a mi mascota a un veterinario que no está en la red concertada?",
    a: "En los seguros de pago directo, normalmente solo se aplica automáticamente en clínicas concertadas. Fuera de la red, es habitual tener que pagar tú primero y solicitar el reembolso según lo previsto en tu póliza, si esta lo permite.",
  },
  {
    q: "¿Existe algún límite de edad a partir del cual ya no puedo renovar?",
    a: "Algunas aseguradoras limitan la renovación a partir de cierta edad avanzada del animal, o incrementan sustancialmente la prima. Conviene preguntarlo explícitamente antes de contratar, no solo al llegar a esa edad.",
  },
  {
    q: "¿Merece la pena un seguro si mi mascota nunca ha tenido problemas de salud?",
    a: "Es una decisión personal que depende de tu tolerancia al riesgo económico. El seguro tiene sentido precisamente para cubrir sucesos imprevisibles; no haber tenido incidencias hasta ahora no garantiza que no vayan a producirse en el futuro.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ArticleShell crumb="Preguntas frecuentes" title="Preguntas frecuentes sobre seguros para mascotas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqs.map((f) => (
        <div key={f.q} className="faq-item">
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
      <p className="mt-8">
        ¿No encuentras respuesta a tu duda? Visita nuestra página de{" "}
        <Link href="/contacto">contacto</Link>.
      </p>
    </ArticleShell>
  );
}
