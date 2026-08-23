import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Seguro Mascota — Guías y comparativas de seguros para mascotas en España",
  description:
    "Comparativas independientes, guías y precios orientativos de seguros para perros y gatos en España. Aprende qué cubren, cuánto cuestan y cómo elegir el mejor para tu mascota.",
  alternates: { canonical: "/" },
};

const startHereCards = [
  {
    icon: "📘",
    title: "¿Qué es un seguro de mascotas?",
    href: "/que-es-seguro-mascotas",
    description:
      "Cómo funciona, qué suele cubrir y por qué cada vez más familias en España lo contratan.",
  },
  {
    icon: "🧾",
    title: "Tipos de seguro",
    href: "/tipos-seguros-mascotas",
    description:
      "Responsabilidad civil, accidentes, enfermedad o cobertura completa: diferencias clave.",
  },
  {
    icon: "🐕🐈",
    title: "Seguro para perros vs. gatos",
    href: "/seguro-perros-vs-gatos",
    description:
      "Por qué el precio y las coberturas varían según la especie, raza y edad.",
  },
  {
    icon: "💶",
    title: "¿Cuánto cuesta?",
    href: "/cuanto-cuesta-seguro-mascota",
    description:
      "Rangos de precios orientativos y los factores que más influyen en la cuota mensual.",
  },
  {
    icon: "✅",
    title: "Cómo elegir el mejor",
    href: "/como-elegir-seguro-mascota",
    description:
      "Checklist práctico para comparar pólizas sin perderte en la letra pequeña.",
  },
  {
    icon: "❓",
    title: "Preguntas frecuentes",
    href: "/preguntas-frecuentes",
    description: "Dudas habituales resueltas: edad mínima, preexistencias, carencias y más.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-(--color-hero-from) to-(--color-hero-to) py-16 pb-19 text-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="text-[clamp(1.9rem,4vw,2.7rem)] text-white">
              Entiende el seguro de tu mascota antes de contratarlo
            </h1>
            <p className="mt-4 max-w-[46ch] text-[1.15rem] text-[#dff2ec]">
              Guías claras y comparativas independientes sobre seguros para perros y
              gatos en España: coberturas, precios orientativos, exclusiones habituales
              y cómo elegir sin sorpresas.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/tipos-seguros-mascotas"
                className="rounded-full bg-(--color-primary) px-6.5 py-3.5 text-[0.98rem] font-bold text-white hover:bg-(--color-primary-dark)"
              >
                Ver tipos de seguro
              </Link>
              <Link
                href="/cuanto-cuesta-seguro-mascota"
                className="rounded-full border-2 border-white px-6.5 py-3.5 text-[0.98rem] font-bold text-white hover:bg-white/10"
              >
                Ver precios orientativos
              </Link>
            </div>
          </div>
          <div
            aria-hidden
            className="rounded-2xl border border-white/20 bg-white/10 p-7 text-center text-[3.4rem]"
          >
            🐶🐱🏥
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-[1120px] px-5">
          <h2>Empieza por aquí</h2>
          <div className="mt-7.5 grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {startHereCards.map((card) => (
              <div
                key={card.href}
                className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6.5 shadow-[var(--shadow)]"
              >
                <span aria-hidden className="mb-2.5 block text-[1.8rem]">
                  {card.icon}
                </span>
                <h3 className="mb-1.5">
                  <Link href={card.href} className="text-(--color-secondary) hover:underline">
                    {card.title}
                  </Link>
                </h3>
                <p className="mb-0 text-(--color-text-light)">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-secondary-light) py-14">
        <div className="mx-auto max-w-[1120px] px-5">
          <h2>Por qué existe Mi Seguro Mascota</h2>
          <p>
            Cada año, cientos de miles de familias en España adoptan un perro o un
            gato, y muchas descubren tarde que una urgencia veterinaria puede costar
            varios cientos —incluso miles— de euros. Nuestro objetivo es explicar, de
            forma clara y sin tecnicismos, cómo funcionan los seguros para mascotas,
            qué preguntas hacer antes de firmar y qué factores mueven el precio, para
            que decidas con información real.
          </p>
          <blockquote className="mt-6 rounded-r-2xl border-l-4 border-(--color-primary) bg-(--color-bg) p-5 text-[0.98rem]">
            Este sitio es informativo y no somos una aseguradora, corredores ni
            asesores financieros. Antes de contratar cualquier póliza, consulta
            siempre las condiciones generales y particulares con la propia
            aseguradora.
          </blockquote>
        </div>
      </section>
    </>
  );
}
