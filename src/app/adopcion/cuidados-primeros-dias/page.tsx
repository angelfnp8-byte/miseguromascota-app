import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Cómo cuidar a tu mascota recién adoptada los primeros días",
  description:
    "Consejos para que un perro, gato u otro animal recién adoptado se adapte bien a su nuevo hogar: espacio seguro, rutina y primera visita al veterinario.",
  alternates: { canonical: "/adopcion/cuidados-primeros-dias" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Adopción / Cuidados primeros días"
      title="Cómo cuidar a tu mascota recién adoptada los primeros días"
    >
      <p>
        Llegar a un hogar nuevo es estresante para cualquier animal, aunque venga de
        una buena situación anterior. Dale tiempo para adaptarse: la mayoría de
        animales necesita entre unos días y varias semanas para sentirse seguro.
      </p>

      <h2>Antes de que llegue</h2>
      <ul>
        <li>
          Prepara un espacio propio y tranquilo (una habitación o un rincón) con agua,
          comida, una cama y, si es un gato, una bandeja de arena.
        </li>
        <li>
          Retira objetos peligrosos o frágiles a su alcance, y asegura ventanas y
          balcones si es un gato.
        </li>
        <li>
          Pide a quien te lo entrega toda la información posible: qué come, sus
          rutinas, su historial de salud y, si la tiene, su cartilla veterinaria.
        </li>
      </ul>

      <h2>Perros</h2>
      <ul>
        <li>
          Los primeros días, mantén rutinas de paseo y comida sencillas y estables;
          evita visitas y estímulos innecesarios.
        </li>
        <li>
          Es normal que esté más nervioso, tímido o incluso poco activo al principio.
          No fuerces el contacto físico, deja que se acerque él.
        </li>
        <li>Introduce a otras mascotas de casa de forma gradual y supervisada.</li>
      </ul>

      <h2>Gatos</h2>
      <ul>
        <li>
          Déjalo explorar una sola habitación al principio, y ve ampliando su espacio
          poco a poco a medida que se sienta seguro.
        </li>
        <li>
          Es habitual que se esconda los primeros días — no lo saques a la fuerza,
          acércate a su ritmo con comida y voz tranquila.
        </li>
        <li>
          Coloca la bandeja de arena lejos de la comida y del agua, en un lugar
          tranquilo.
        </li>
      </ul>

      <h2>Otros animales</h2>
      <p>
        Conejos, roedores, aves y reptiles también necesitan un espacio propio,
        silencioso y con una temperatura adecuada a la especie. Infórmate bien de las
        necesidades específicas de cada especie antes de la adopción, idealmente
        preguntando directamente a quien te lo entrega.
      </p>

      <h2>La primera visita al veterinario</h2>
      <p>
        Programa una revisión veterinaria en las primeras semanas, aunque el animal
        parezca sano: sirve para confirmar su estado de salud, poner al día sus
        vacunas si hace falta, y —si todavía no lo tiene— valorar la identificación
        con microchip. Recuerda que, en España, la Ley de Bienestar Animal exige
        seguro de responsabilidad civil para perros; consulta nuestro{" "}
        <Link href="/comparador">comparador de seguros</Link> si quieres protegerle
        frente a imprevistos.
      </p>

      <blockquote>
        Ten paciencia: el vínculo de confianza se construye con el tiempo, rutinas
        estables y sin forzar situaciones. Si notas signos de estrés muy intenso o
        problemas de salud, consulta con un profesional veterinario o de conducta
        animal.
      </blockquote>

      <p>
        Consulta también <Link href="/adopcion/como-funciona">cómo funciona la
        adopción</Link> y nuestras <Link href="/adopcion/preguntas-frecuentes">
        preguntas frecuentes</Link>.
      </p>
    </ArticleShell>
  );
}
