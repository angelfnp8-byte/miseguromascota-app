import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Glosario del seguro de mascotas: términos que debes conocer",
  description:
    "Carencia, franquicia, capital asegurado, preexistencia y otros términos del seguro de mascotas explicados sin jerga.",
  alternates: { canonical: "/glosario-seguro-mascotas" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Glosario" title="Glosario del seguro de mascotas: términos que debes conocer">
      <p>
        Comparar pólizas es más fácil cuando entiendes el vocabulario del sector.
        Aquí tienes los términos que más veces te vas a encontrar, explicados sin
        jerga.
      </p>

      <h2>Carencia</h2>
      <p>
        Periodo de tiempo tras la contratación durante el cual determinadas
        coberturas todavía no están activas. Es habitual que la carencia sea más
        corta para accidentes (a veces incluso 0 días) y más larga para enfermedad o
        determinadas cirugías. Sirve para evitar que alguien contrate el seguro
        justo cuando ya sabe que va a necesitarlo.
      </p>

      <h2>Franquicia</h2>
      <p>
        Cantidad que el propietario asume de su bolsillo en cada siniestro, antes de
        que la aseguradora empiece a pagar. Puede ser una cifra fija o un porcentaje
        de la factura. A mayor franquicia, suele ser menor la prima mensual, y
        viceversa.
      </p>

      <h2>Capital asegurado</h2>
      <p>
        El límite máximo que la aseguradora pagará por un siniestro, por año, o
        durante toda la vida de la póliza (según cómo esté estructurada). Es
        distinto de la franquicia: el capital asegurado es el &quot;techo&quot; de
        la cobertura, la franquicia es el &quot;suelo&quot; que pagas tú.
      </p>

      <h2>Preexistencia</h2>
      <p>
        Cualquier enfermedad, lesión o condición que la mascota ya tenía
        —diagnosticada o con síntomas evidentes— antes de contratar el seguro.
        Ninguna aseguradora cubre las preexistencias: es la exclusión más universal
        del sector.
      </p>

      <h2>Condición hereditaria o congénita</h2>
      <p>
        Enfermedad relacionada con la genética de la raza (como la displasia de
        cadera) o presente desde el nacimiento. A diferencia de una preexistencia,
        muchas aseguradoras sí la cubren si la mascota no mostraba síntomas ni tenía
        diagnóstico en el momento de contratar.
      </p>

      <h2>Responsabilidad civil (RC)</h2>
      <p>
        Cobertura que responde por los daños que tu mascota pueda causar a terceros
        (personas, otros animales, bienes). Es obligatoria por ley para los perros
        catalogados como potencialmente peligrosos, con una cobertura mínima de
        120.000 €.
      </p>

      <h2>Reembolso vs. pago directo</h2>
      <p>
        En el modelo de <strong>reembolso</strong>, tú pagas primero al veterinario
        y la aseguradora te devuelve después la parte que le corresponde. En el
        modelo de <strong>pago directo</strong>, la aseguradora paga directamente a
        la clínica concertada, y tú solo abonas, en su caso, la franquicia.
      </p>

      <h2>Red de veterinarios concertados</h2>
      <p>
        Conjunto de clínicas con las que la aseguradora tiene un acuerdo, normalmente
        necesario para poder usar el modelo de pago directo. Fuera de esa red, es
        habitual que solo se pueda optar al modelo de reembolso.
      </p>

      <h2>Prima</h2>
      <p>
        El precio que pagas por el seguro, normalmente de forma mensual o anual.
        Puede variar según la especie, raza, edad, ubicación y las coberturas
        contratadas.
      </p>

      <h2>Póliza</h2>
      <p>
        El contrato de seguro en sí: recoge las condiciones generales (comunes a
        todos los asegurados) y las particulares (específicas de tu mascota y tu
        contrato).
      </p>

      <p>
        Si tienes dudas sobre cómo se aplican estos términos en la práctica,
        consulta también nuestra guía{" "}
        <Link href="/como-elegir-seguro-mascota">cómo elegir el mejor seguro</Link>, o
        compara pólizas reales en el{" "}
        <Link href="/comparador">comparador de aseguradoras</Link>.
      </p>
    </ArticleShell>
  );
}
