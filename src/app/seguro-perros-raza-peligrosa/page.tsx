import type { Metadata } from "next";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Seguro para perros de raza potencialmente peligrosa: qué exige la ley",
  description:
    "Qué razas están catalogadas como PPP en España, la cuantía del seguro de responsabilidad civil obligatorio y el estado real de la obligación de seguro para todos los perros.",
  alternates: { canonical: "/seguro-perros-raza-peligrosa" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Perros de raza potencialmente peligrosa"
      title="Seguro para perros de raza potencialmente peligrosa: qué exige la ley"
    >
      <p>
        Si tu perro está catalogado legalmente como &quot;potencialmente
        peligroso&quot; (PPP), la ley española no deja el seguro como algo
        opcional: es un requisito para poder tenerlo. Esto es lo que dice la
        normativa vigente, y qué es todavía un proyecto sin aprobar.
      </p>

      <h2>Qué perros se consideran &quot;potencialmente peligrosos&quot;</h2>
      <p>
        La Ley 50/1999, sobre el Régimen Jurídico de la Tenencia de Animales
        Potencialmente Peligrosos, y su desarrollo, el Real Decreto 287/2002,
        establecen dos vías para que un perro entre en esta categoría:
      </p>
      <ul>
        <li>
          <strong>Por raza:</strong> el Anexo I del RD 287/2002 cataloga
          expresamente Pit Bull Terrier, Staffordshire Bull Terrier, American
          Staffordshire Terrier, Rottweiler, Dogo Argentino, Fila Brasileiro, Tosa
          Inu y Akita Inu.
        </li>
        <li>
          <strong>Por características</strong>, aunque no sea de esas razas: el
          Anexo II describe rasgos como musculatura marcada, carácter fuerte, pelo
          corto, perímetro torácico de 60 a 80 cm, altura a la cruz de 50 a 70 cm y
          peso superior a 20 kg, entre otros, cuando concurren la mayoría de ellos.
          También se considera PPP el perro que haya protagonizado episodios de
          agresión a personas o a otros animales.
        </li>
      </ul>

      <h2>El seguro de responsabilidad civil: 120.000 € de cobertura mínima</h2>
      <p>
        El artículo 3.1.e) del RD 287/2002 exige acreditar un seguro de
        responsabilidad civil por daños a terceros con una cobertura no inferior a{" "}
        <strong>120.000 €</strong> para poder obtener la licencia de tenencia de un
        perro PPP. Es un requisito legal en vigor hoy, no una recomendación.
      </p>

      <h2>
        ¿Y el seguro obligatorio para todos los perros? Una obligación que existe en
        la ley, pero que aún no es exigible
      </h2>
      <p>
        Es habitual leer que &quot;desde 2026 todos los perros deben tener un
        seguro de responsabilidad civil&quot; en España. La realidad es más
        matizada. La Ley 7/2023, de protección de los derechos y el bienestar de los
        animales, sí recoge esa obligación en su artículo 30.3, pero la propia
        Dirección General de Seguros y Fondos de Pensiones (DGSFP) y la Dirección
        General de Derechos de los Animales aclararon, en una circular conjunta de
        septiembre de 2023, que ese requisito{" "}
        <strong>no resulta efectivamente aplicable hasta que se apruebe su
        reglamento de desarrollo</strong>, salvo donde ya existiera normativa
        autonómica o local previa.
      </p>
      <p>
        A fecha de esta publicación, ese reglamento todavía no se ha aprobado ni
        publicado en el BOE. Ha circulado un borrador que plantea una cobertura
        mínima de 100.000 € para perros en general, pero sigue siendo un proyecto,
        no una norma en vigor. Lo único plenamente exigible hoy, con cuantía fijada
        por una norma en vigor, sigue siendo el seguro de 120.000 € para perros
        catalogados como PPP.
      </p>
      <p>
        Si tu perro no es PPP, te recomendamos igualmente valorar un seguro de
        responsabilidad civil: además de que la obligación legal general puede
        activarse en cualquier momento en que se publique el reglamento pendiente,
        algunas comunidades autónomas y ayuntamientos ya lo exigen por normativa
        propia.
      </p>

      <h2>La licencia administrativa: un trámite aparte del seguro</h2>
      <p>
        El seguro es uno de los requisitos para obtener la licencia municipal de
        tenencia de un perro PPP, pero no la sustituye. La licencia exige además ser
        mayor de edad, no tener antecedentes penales por determinados delitos, un
        certificado de capacidad física y aptitud psicológica, y no haber sido
        sancionado por infracciones graves o muy graves en esta materia. El
        procedimiento exacto (documentación, tasas, plazos) varía según cada
        comunidad autónoma y ayuntamiento, así que conviene consultarlo directamente
        con el tuyo.
      </p>

      <blockquote>
        Este artículo tiene fines informativos y no sustituye el asesoramiento
        legal. La normativa sobre bienestar animal está en pleno desarrollo
        reglamentario en España: antes de dar por hecho una obligación o una fecha
        concreta, contrasta siempre la información con el BOE o con tu ayuntamiento.
      </blockquote>

      <p className="border-t border-(--color-border) pt-4 text-[0.85rem] text-(--color-text-light)">
        Fuentes:{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1999-24419" target="_blank" rel="noopener">
          Ley 50/1999 (BOE)
        </a>{" "}
        ·{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-6016" target="_blank" rel="noopener">
          RD 287/2002 (BOE)
        </a>{" "}
        ·{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2023-7936" target="_blank" rel="noopener">
          Ley 7/2023 de bienestar animal (BOE)
        </a>{" "}
        ·{" "}
        <a
          href="https://dgsfp.mineco.gob.es/es/Regulacion/DocumentosRegulacion/report_CIRCULAR%20SEGURO.pdf"
          target="_blank"
          rel="noopener"
        >
          Circular DGSFP sobre el seguro obligatorio
        </a>
      </p>
    </ArticleShell>
  );
}
