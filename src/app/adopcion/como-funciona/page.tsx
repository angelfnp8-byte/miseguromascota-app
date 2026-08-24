import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Cómo funciona la adopción en Mi Seguro Mascota",
  description:
    "Publicar o adoptar un animal en Mi Seguro Mascota es gratuito y sin intermediarios. Te explicamos paso a paso cómo funciona el proceso.",
  alternates: { canonical: "/adopcion/como-funciona" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Adopción / Cómo funciona" title="Cómo funciona la adopción en Mi Seguro Mascota">
      <p>
        Mi Seguro Mascota es un espacio de adopción <strong>gratuito y sin
        intermediarios</strong>: conectamos directamente a quien tiene un animal para
        dar en adopción con quien quiere adoptarlo. No cobramos comisión ni gestionamos
        pagos entre las partes.
      </p>

      <h2>1. Publicar un anuncio</h2>
      <p>
        Cualquier persona particular o protectora puede{" "}
        <Link href="/adopcion/nuevo">publicar un animal en adopción</Link> tras crear
        una cuenta: tipo de animal, edad, género, raza, vacunación, ubicación, una
        descripción, fotos y, opcionalmente, sus rasgos de carácter (si es cariñoso,
        activo, cómo se lleva con otros animales o con niños, etc.), que ayudan a
        quien busca adoptar a valorar si encaja con su situación.
      </p>

      <h2>2. Buscar y filtrar</h2>
      <p>
        En <Link href="/adopcion">el listado de adopción</Link> puedes filtrar por
        tipo de animal, edad, género, vacunación, ubicación y rasgos de carácter, y
        entrar en la ficha de cada animal para ver sus fotos, su descripción completa
        y responder nuestro cuestionario de compatibilidad.
      </p>

      <h2>3. Contactar</h2>
      <p>
        Para contactar con quien ha publicado un anuncio necesitas iniciar sesión o
        crear una cuenta — así la conversación queda guardada y no se pierde, y ambas
        partes pueden intercambiar un teléfono y/o email de contacto de forma segura,
        visible solo entre vosotros dos. Todo ocurre a través de nuestro chat privado.
      </p>

      <h2>4. Conocerse y adoptar</h2>
      <p>
        Recomendamos quedar en persona antes de decidir, en un lugar público o
        acompañado, y seguir nuestros{" "}
        <Link href="/adopcion/adopcion-segura">consejos de adopción segura</Link>. Si
        decidís seguir adelante, quien publicó el anuncio puede marcarlo como
        "adoptado" desde{" "}
        <Link href="/adopcion/mis-publicaciones">sus publicaciones</Link>.
      </p>

      <blockquote>
        Mi Seguro Mascota no verifica la identidad de quienes publican o contactan, ni
        media en la entrega del animal. Actúa siempre con precaución y sentido común, y
        consulta nuestras guías de{" "}
        <Link href="/adopcion/adopcion-segura">adopción segura</Link> y{" "}
        <Link href="/adopcion/cuidados-primeros-dias">
          cuidados los primeros días
        </Link>
        .
      </blockquote>

      <p>
        ¿Tienes más dudas? Consulta las{" "}
        <Link href="/adopcion/preguntas-frecuentes">preguntas frecuentes sobre adopción</Link>.
      </p>
    </ArticleShell>
  );
}
