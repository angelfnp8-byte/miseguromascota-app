import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Adoptar un perro senior: ¿es posible asegurarlo igualmente?",
  description:
    "Opciones realistas de seguro para un perro que ya no es joven en el momento de la adopción: qué suele ser posible y qué limitaciones son habituales.",
  alternates: { canonical: "/adoptar-perro-senior-seguro" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Asegurar a un perro senior adoptado"
      title="Adoptar un perro senior: ¿es posible asegurarlo igualmente?"
    >
      <p>
        Los perros senior son de los que más tardan en encontrar hogar en las
        protectoras, y una de las dudas más frecuentes de quien se plantea adoptar
        uno es si todavía se puede contratar un seguro. La respuesta, con matices,
        es que sí, pero con opciones más limitadas que con un cachorro.
      </p>

      <h2>La responsabilidad civil casi siempre está disponible</h2>
      <p>
        El seguro de responsabilidad civil, que cubre los daños que tu perro pueda
        causar a terceros, no suele tener limitaciones relevantes por edad: es el
        tipo de cobertura más accesible para un perro senior, y en algunos casos
        (perros PPP) es obligatorio con independencia de la edad del animal.
      </p>

      <h2>La cobertura de salud es donde aparecen las limitaciones</h2>
      <p>Aquí es donde conviene gestionar expectativas:</p>
      <ul>
        <li>
          Algunas aseguradoras establecen una <strong>edad máxima de alta</strong>{" "}
          para nuevas pólizas de salud, por lo que un perro ya senior puede no ser
          aceptado en según qué producto.
        </li>
        <li>
          Las que sí aceptan altas a edades avanzadas suelen aplicar{" "}
          <strong>primas más elevadas</strong> que para un cachorro, precisamente
          porque el riesgo estadístico de enfermedad es mayor.
        </li>
        <li>
          Cualquier condición que el perro ya tuviera diagnosticada en el momento
          de la adopción se tratará como <strong>preexistente</strong> y quedará
          excluida de cobertura, con independencia de la aseguradora que elijas.
        </li>
      </ul>

      <h2>Qué puedes hacer antes de decidirte</h2>
      <ul>
        <li>
          Pide a la protectora o al anterior responsable el historial veterinario
          disponible del animal, si existe. Cuanta más información tengas, menos
          sorpresas con las exclusiones.
        </li>
        <li>
          Compara varias aseguradoras específicamente por su política de edad
          máxima de alta: varía bastante de una a otra, así que descartar el
          seguro tras la primera negativa puede ser precipitado.
        </li>
        <li>
          Valora productos centrados en accidentes en vez de salud completa: suelen
          tener menos restricciones de edad que las pólizas de enfermedad.
        </li>
        <li>
          Si ninguna opción de seguro encaja, considera reservar un fondo de
          ahorro específico para gastos veterinarios del animal, sobre todo si la
          protectora ya te ha informado de alguna condición conocida.
        </li>
      </ul>

      <blockquote>
        Que un perro sea senior no debería ser, por sí solo, un motivo para no
        adoptarlo. Sí conviene informarse bien sobre las opciones de seguro
        disponibles —y sus límites— antes de dar el paso, para llegar sin sorpresas
        económicas.
      </blockquote>

      <p>
        Consulta también nuestro{" "}
        <Link href="/comparador">comparador de seguros</Link> para ver qué
        aseguradoras cubren perros y en qué condiciones.
      </p>
    </ArticleShell>
  );
}
