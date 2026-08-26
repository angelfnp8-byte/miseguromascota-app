import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/ads/AdSlot";
import { AD_SLOTS } from "@/lib/adsense";
import { Icon } from "@/components/icons/Icon";
import { HeroPetsIllustration } from "@/components/illustrations/HeroPetsIllustration";
import { AdoptionIllustration } from "@/components/illustrations/AdoptionIllustration";

export const metadata: Metadata = {
  title: "Mi Seguro Mascota — Guías y comparativas de seguros para mascotas en España",
  description:
    "Comparativas independientes, guías y precios orientativos de seguros para perros y gatos en España. Aprende qué cubren y cómo elegir el mejor.",
  alternates: { canonical: "/" },
};

const startHereCards = [
  {
    icon: "book",
    title: "¿Qué es un seguro de mascotas?",
    href: "/que-es-seguro-mascotas",
    description:
      "Cómo funciona, qué suele cubrir y por qué cada vez más familias en España lo contratan.",
  },
  {
    icon: "document",
    title: "Tipos de seguro",
    href: "/tipos-seguros-mascotas",
    description:
      "Responsabilidad civil, accidentes, enfermedad o cobertura completa: diferencias clave.",
  },
  {
    icon: "paw",
    title: "Seguro para perros vs. gatos",
    href: "/seguro-perros-vs-gatos",
    description:
      "Por qué el precio y las coberturas varían según la especie, raza y edad.",
  },
  {
    icon: "coin",
    title: "¿Cuánto cuesta?",
    href: "/cuanto-cuesta-seguro-mascota",
    description:
      "Rangos de precios orientativos y los factores que más influyen en la cuota mensual.",
  },
  {
    icon: "check",
    title: "Cómo elegir el mejor",
    href: "/como-elegir-seguro-mascota",
    description:
      "Checklist práctico para comparar pólizas sin perderte en la letra pequeña.",
  },
  {
    icon: "help",
    title: "Preguntas frecuentes",
    href: "/preguntas-frecuentes",
    description: "Dudas habituales resueltas: edad mínima, preexistencias, carencias y más.",
  },
] as const;

const adoptionSteps = [
  {
    icon: "search",
    title: "Explora mascotas cerca de ti",
    description:
      "Filtra por tipo, edad, género o ubicación entre los animales publicados por particulares y protectoras.",
  },
  {
    icon: "message",
    title: "Contacta directamente",
    description:
      "Escribe a quien ha publicado el anuncio a través de nuestro chat privado, sin intermediarios.",
  },
  {
    icon: "heart",
    title: "Adopta y dale un hogar",
    description: "Quedad para conocerse y, si encaja, dale a esa mascota una segunda oportunidad.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-(--color-hero-from) to-(--color-hero-to) py-16 pb-19 text-white">
        <div
          className="decorative-blob -top-24 -right-24 h-80 w-80 bg-(--color-primary)"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1120px] gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="section-eyebrow text-[#bfe8de]">Seguros · Adopción</p>
            <h1 className="text-[clamp(1.9rem,4vw,2.7rem)] text-white">
              Entiende el seguro de tu mascota, y encuéntrale una si aún no la tienes
            </h1>
            <p className="mt-4 max-w-[46ch] text-[1.15rem] text-[#dff2ec]">
              Guías claras y comparativas independientes sobre seguros para perros y
              gatos en España, y un espacio de adopción para que particulares y
              protectoras encuentren un hogar para sus animales.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/tipos-seguros-mascotas"
                className="rounded-full bg-(--color-primary) px-6.5 py-3.5 text-[0.98rem] font-bold text-white hover:bg-(--color-primary-dark)"
              >
                Ver tipos de seguro
              </Link>
              <Link
                href="/adopcion"
                className="rounded-full border-2 border-white px-6.5 py-3.5 text-[0.98rem] font-bold text-white hover:bg-white/10"
              >
                Ver mascotas en adopción
              </Link>
            </div>
          </div>
          <div
            aria-hidden
            className="relative rounded-2xl border border-white/20 bg-white/10 p-4"
          >
            <HeroPetsIllustration className="mx-auto h-auto w-full max-w-[360px]" />
          </div>
        </div>
      </section>

      <AdSlot slot={AD_SLOTS.contentTop} />

      <section className="relative overflow-hidden py-16">
        <div
          className="decorative-blob -bottom-16 -left-24 h-72 w-72 bg-(--color-secondary-light)"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 px-5 md:grid-cols-[0.95fr_1.05fr]">
          <AdoptionIllustration className="mx-auto h-auto w-full max-w-[380px] md:order-2" />
          <div className="md:order-1">
            <p className="section-eyebrow">Adopción responsable</p>
            <h2>Encuentra a tu próxima mascota, o dale un hogar a quien lo necesita</h2>
            <p className="max-w-[52ch]">
              Mi Seguro Mascota también es un espacio de adopción: cualquier persona o
              protectora puede publicar un animal, y quien busca adoptar puede filtrar
              por tipo, edad, ubicación y más, y contactar directamente sin
              intermediarios.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {adoptionSteps.map((step, i) => (
                <div key={step.title}>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-(--color-secondary-light) text-(--color-secondary)">
                    <Icon name={step.icon} className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mb-1 text-[1rem]">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mb-0 text-[0.9rem] text-(--color-text-light)">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link
                href="/adopcion"
                className="rounded-full bg-(--color-primary) px-6 py-3 font-bold text-white hover:bg-(--color-primary-dark)"
              >
                Ver mascotas en adopción
              </Link>
              <Link
                href="/adopcion/nuevo"
                className="rounded-full border-2 border-(--color-border) px-6 py-3 font-bold text-(--color-text) hover:bg-(--color-secondary-light)"
              >
                Publicar un animal
              </Link>
              <Link
                href="/adopcion/adopcion-segura"
                className="rounded-full px-6 py-3 font-bold text-(--color-secondary) hover:underline"
              >
                Consejos de adopción segura
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-[1120px] px-5">
          <p className="section-eyebrow">Guías sobre seguros</p>
          <h2>Empieza por aquí</h2>
          <div className="mt-7.5 grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {startHereCards.map((card) => (
              <div
                key={card.href}
                className="rounded-t-2xl border border-(--color-border) border-t-4 border-t-(--color-primary) bg-(--color-surface) p-6.5 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow)]"
              >
                <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-(--color-accent-light) text-(--color-primary)">
                  <Icon name={card.icon} className="h-5.5 w-5.5" />
                </div>
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

      <AdSlot slot={AD_SLOTS.contentBottom} />
    </>
  );
}
