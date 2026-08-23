import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos y guías adicionales sobre seguros para perros y gatos: casos prácticos, dudas concretas y comparativas por situación.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    href: "/seguro-perros-raza-peligrosa",
    title: "Seguro para perros de raza potencialmente peligrosa: qué exige la ley",
    description:
      "Requisitos de responsabilidad civil obligatoria, qué razas están catalogadas y el estado real de la obligación de seguro para todos los perros.",
  },
  {
    href: "/seguro-gato-interior",
    title: "¿Vale la pena asegurar a un gato que vive solo en interior?",
    description: "Análisis del riesgo real frente al coste cuando la mascota no sale nunca a la calle.",
  },
  {
    href: "/seguro-displasia-cadera",
    title: "Seguro de mascotas para razas con predisposición a displasia de cadera",
    description: "Qué cubren (y qué no) las pólizas cuando existe un componente hereditario conocido.",
  },
  {
    href: "/reclamar-reembolso-denegado",
    title: "Cómo reclamar un reembolso que la aseguradora ha denegado",
    description: "Pasos habituales para presentar una reclamación formal y qué documentación conviene conservar.",
  },
  {
    href: "/seguro-viaje-mascotas-ue",
    title: "Seguro de viaje para mascotas: qué cubrir si viajas dentro de la UE",
    description: "Diferencias entre la cobertura veterinaria habitual y las pólizas pensadas para desplazamientos.",
  },
  {
    href: "/adoptar-perro-senior-seguro",
    title: "Adoptar un perro senior: ¿es posible asegurarlo igualmente?",
    description: "Opciones realistas de cobertura cuando la mascota ya no es joven en el momento de la adopción.",
  },
  {
    href: "/glosario-seguro-mascotas",
    title: "Glosario del seguro de mascotas: términos que debes conocer",
    description: "Carencia, franquicia, capital asegurado, preexistencia y otros conceptos explicados sin jerga.",
  },
];

export default function Page() {
  return (
    <ArticleShell crumb="Blog" title="Blog: guías y casos prácticos">
      <p>
        Además de nuestras guías principales, iremos publicando artículos centrados
        en situaciones concretas. Estas son las próximas piezas de contenido que
        forman parte de nuestro plan editorial:
      </p>

      <ul className="grid list-none gap-4 p-0">
        {posts.map((post) => (
          <li
            key={post.href}
            className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-6 py-5"
          >
            <Link href={post.href} className="text-[1.08rem] font-bold no-underline hover:underline">
              {post.title}
            </Link>
            <p className="mb-0 mt-1.5 text-[0.96rem] text-(--color-text-light)">{post.description}</p>
          </li>
        ))}
      </ul>

      <blockquote className="mt-6">
        Iremos añadiendo más artículos progresivamente. Si quieres sugerir un tema,
        escríbenos desde la página de <Link href="/contacto">contacto</Link>.
      </blockquote>
    </ArticleShell>
  );
}
