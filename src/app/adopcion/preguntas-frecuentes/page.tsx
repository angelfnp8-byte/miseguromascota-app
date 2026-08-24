import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre adopción",
  description:
    "Dudas habituales sobre cómo adoptar o dar en adopción un animal en Mi Seguro Mascota: coste, seguridad, contacto y cuestionario de compatibilidad.",
  alternates: { canonical: "/adopcion/preguntas-frecuentes" },
};

const faqs = [
  {
    q: "¿Es gratis adoptar a través de Mi Seguro Mascota?",
    a: "Sí, publicar un anuncio y contactar es gratuito. No cobramos comisión. Algunas protectoras pueden pedir una colaboración para cubrir gastos veterinarios ya realizados; nunca deberías pagar por adelantado sin haber visto al animal.",
  },
  {
    q: "¿Necesito una cuenta para adoptar?",
    a: "Para contactar con quien publica un anuncio sí, es necesario iniciar sesión o registrarte. Así la conversación queda guardada de forma privada entre ambas partes y no se pierde.",
  },
  {
    q: "¿Cómo funciona el cuestionario de compatibilidad?",
    a: "En la ficha de cada animal disponible puedes responder unas preguntas rápidas sobre tu situación (si tienes otras mascotas, niños en casa, cuánta actividad puedes ofrecer, si es tu primera mascota). Con eso, y con los rasgos que haya indicado quien publicó el anuncio, calculamos al instante un porcentaje orientativo de compatibilidad y avisos concretos. No sustituye conocer al animal en persona.",
  },
  {
    q: "¿Por qué algunos animales no muestran rasgos de carácter?",
    a: "Indicar los rasgos es opcional para quien publica el anuncio. Si no aparecen, pregúntalos directamente al contactar.",
  },
  {
    q: "¿Qué datos se comparten al contactar?",
    a: "Al escribir a quien publicó un anuncio, se comparte el teléfono y/o email que tú indiques, y se te muestran los datos de contacto de quien publicó el anuncio. Estos datos solo son visibles para vosotros dos, nunca públicamente.",
  },
  {
    q: "¿Puedo devolver un animal si la adopción no funciona?",
    a: "Mi Seguro Mascota no gestiona devoluciones ni actúa como intermediario legal. Recomendamos hablarlo directamente con quien te lo entregó, idealmente siguiendo lo acordado por escrito en el momento de la adopción.",
  },
  {
    q: "¿Cómo denuncio un anuncio sospechoso?",
    a: "Escríbenos desde nuestra página de contacto indicando el enlace del anuncio y el motivo. Revisaremos el caso lo antes posible.",
  },
  {
    q: "¿Puedo editar o eliminar mi anuncio después de publicarlo?",
    a: "Sí, desde \"Mis anuncios\" puedes editar los datos, marcarlo como adoptado o eliminarlo en cualquier momento.",
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
    <ArticleShell crumb="Adopción / Preguntas frecuentes" title="Preguntas frecuentes sobre adopción">
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
        Consulta también{" "}
        <Link href="/adopcion/como-funciona">cómo funciona la adopción</Link> y
        nuestros <Link href="/adopcion/adopcion-segura">consejos de adopción segura</Link>.
      </p>
    </ArticleShell>
  );
}
