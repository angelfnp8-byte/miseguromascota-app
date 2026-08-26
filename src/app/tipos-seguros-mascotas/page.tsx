import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Tipos de seguro para mascotas: ¿cuál se ajusta a ti?",
  description:
    "Diferencias entre seguro de responsabilidad civil, seguro de accidentes, seguro de enfermedad y coberturas completas para perros y gatos.",
  alternates: { canonical: "/tipos-seguros-mascotas" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Tipos de seguro" title="Tipos de seguro para mascotas: ¿cuál se ajusta a ti?">
      <p>
        No todos los seguros para mascotas cubren lo mismo. Antes de comparar
        precios, conviene entender las cuatro grandes familias de coberturas que
        existen en el mercado español.
      </p>

      <h2>1. Seguro de responsabilidad civil</h2>
      <p>
        Cubre los daños que tu mascota pueda causar a terceros: una persona, otro
        animal o una propiedad. Es el tipo de cobertura obligatoria para{" "}
        <Link href="/seguro-perros-raza-peligrosa">
          razas o ejemplares clasificados como perros potencialmente peligrosos
        </Link>
        , aunque también puede contratarse de forma voluntaria para cualquier
        mascota.
      </p>

      <h2>2. Seguro de accidentes</h2>
      <p>
        Cubre gastos veterinarios derivados de sucesos súbitos y accidentales:
        atropellos, caídas, ingestión de objetos, peleas con otros animales, etc.
        Suele tener carencias más cortas que las coberturas de enfermedad,
        precisamente porque un accidente no se puede planificar.
      </p>

      <h2>3. Seguro de enfermedad</h2>
      <p>
        Amplía la cobertura a patologías no derivadas de un accidente: infecciones,
        problemas digestivos, enfermedades crónicas o hereditarias (salvo que se
        consideren preexistentes). Normalmente exige una carencia más larga y suele
        ser la variante más cara, porque el riesgo cubierto es mayor.
      </p>

      <h2>4. Coberturas completas o &quot;todo incluido&quot;</h2>
      <p>
        Combinan accidente y enfermedad, y con frecuencia añaden servicios
        adicionales como vacunación, desparasitación, revisiones anuales, atención
        dental o incluso una pequeña indemnización en caso de fallecimiento. Son las
        pólizas más completas, y también las de cuota mensual más alta.
      </p>

      <table>
        <thead>
          <tr>
            <th>Tipo de cobertura</th>
            <th>Qué cubre</th>
            <th>Nivel de precio orientativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responsabilidad civil</td>
            <td>Daños a terceros</td>
            <td>Bajo</td>
          </tr>
          <tr>
            <td>Accidentes</td>
            <td>Sucesos súbitos e imprevistos</td>
            <td>Bajo-medio</td>
          </tr>
          <tr>
            <td>Enfermedad</td>
            <td>Patologías no accidentales</td>
            <td>Medio-alto</td>
          </tr>
          <tr>
            <td>Completa / todo incluido</td>
            <td>Accidente + enfermedad + extras</td>
            <td>Alto</td>
          </tr>
        </tbody>
      </table>

      <blockquote>
        Los niveles de precio son orientativos y varían mucho entre aseguradoras,
        zonas geográficas, raza, edad y franquicia elegida. Consulta siempre varias
        cotizaciones reales antes de decidir.
      </blockquote>

      <h2>¿Qué tipo elegir según tu situación?</h2>
      <p>
        Como orientación general: un cachorro o gatito joven y sano puede
        beneficiarse de contratar pronto una cobertura de enfermedad, ya que así se
        evita que futuras condiciones queden clasificadas como preexistentes. Una
        mascota adulta y sin patologías previas también puede optar por una
        cobertura completa. Si el presupuesto es limitado, empezar por accidentes
        suele ser la opción más económica que sigue cubriendo los imprevistos más
        comunes.
      </p>

      <p>
        Sigue leyendo:{" "}
        <Link href="/seguro-perros-vs-gatos">
          diferencias entre seguro para perros y para gatos
        </Link>{" "}
        o consulta directamente{" "}
        <Link href="/cuanto-cuesta-seguro-mascota">
          cuánto cuesta cada tipo de cobertura
        </Link>
        . También puedes usar el{" "}
        <Link href="/comparador">comparador de aseguradoras</Link>.
      </p>
    </ArticleShell>
  );
}
