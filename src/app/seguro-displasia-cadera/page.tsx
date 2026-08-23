import type { Metadata } from "next";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Seguro de mascotas para razas con predisposición a displasia de cadera",
  description:
    "Qué es la displasia de cadera, qué razas tienen predisposición reconocida y cómo tratan las aseguradoras las condiciones hereditarias y preexistentes.",
  alternates: { canonical: "/seguro-displasia-cadera" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Displasia de cadera y seguro"
      title="Seguro de mascotas para razas con predisposición a displasia de cadera"
    >
      <p>
        Si tu perro pertenece a una raza con predisposición conocida a la displasia
        de cadera, el momento en que contratas el seguro puede ser tan importante
        como la póliza que elijas.
      </p>

      <h2>Qué es la displasia de cadera canina</h2>
      <p>
        Es una anomalía del desarrollo de la articulación de la cadera: la cabeza
        del fémur y el acetábulo no encajan ni se alinean correctamente, lo que
        genera inestabilidad, desgaste del cartílago y, con el tiempo, artrosis. Es
        una enfermedad hereditaria y poligénica: el perro nace con las caderas
        normales, pero la anomalía puede desarrollarse durante el crecimiento si
        porta los genes de predisposición, combinados con factores como el ritmo de
        crecimiento, el peso o el ejercicio en la etapa de cachorro.
      </p>

      <h2>Razas con predisposición genética reconocida</h2>
      <p>
        Aparecen citadas de forma consistente en fuentes veterinarias: Pastor
        Alemán, Labrador Retriever, Golden Retriever, Rottweiler, San Bernardo,
        Mastín napolitano, Terranova y Boyero de Berna. Si tu perro pertenece a una
        de estas razas —o es un cruce con predominancia de alguna de ellas—, merece
        la pena informarse antes de elegir seguro.
      </p>

      <h2>Cómo se diagnostica oficialmente en España</h2>
      <p>
        La AVEPA (Asociación de Veterinarios Especialistas en Pequeños Animales)
        gestiona un programa de certificación por radiografía con cinco grados, del
        A (ausencia de signos) al E (signos severos), a partir del año de edad (15
        meses en Rottweiler y Perro Lobo Checoslovaco). También existe la técnica
        PennHIP, que permite un diagnóstico precoz desde los 4 meses.
      </p>

      <h2>Cómo tratan esto las aseguradoras</h2>
      <p>
        La regla general del sector es que ningún seguro cubre enfermedades{" "}
        <strong>preexistentes</strong> a la contratación. Las condiciones
        hereditarias, como la displasia, suelen tratarse de forma distinta: muchas
        aseguradoras las cubren siempre que la mascota no mostrara síntomas ni
        tuviera un diagnóstico antes de contratar la póliza. En la práctica, esto
        significa que si tu perro ya cojea o tiene un diagnóstico radiológico
        previo, esa condición probablemente quedará excluida en cualquier seguro
        que contrates después.
      </p>

      <h2>Qué es la &quot;carencia&quot; y por qué el momento de contratar importa</h2>
      <p>
        La carencia es el periodo tras la contratación durante el cual ciertas
        coberturas todavía no están activas. Los plazos varían según la
        aseguradora, pero suelen rondar entre 14 y 60 días para enfermedad general,
        y hasta 90 días para determinadas cirugías. Contratar el seguro cuando el
        cachorro es joven y todavía no muestra signos es, en la práctica, la única
        forma de tener cobertura futura garantizada para una raza con predisposición
        conocida: cuanto más esperes, más riesgo hay de que la displasia se
        manifieste y pase a considerarse preexistente.
      </p>

      <h2>Coste aproximado de la cirugía</h2>
      <p>
        No existe una tarifa oficial única, pero fuentes veterinarias y de
        aseguradoras del sector publican rangos orientativos: desde 500-1.500 €
        para técnicas como la osteotomía púbica o la excisión de cabeza femoral,
        hasta 2.000-5.000 € por cadera en el caso de una prótesis total. El precio
        final depende de la clínica, la comunidad autónoma, el tamaño del perro y la
        técnica elegida.
      </p>

      <blockquote>
        Este artículo tiene fines informativos. Consulta siempre el condicionado
        exacto de cada póliza —no solo el folleto comercial— para saber cómo trata
        específicamente las condiciones hereditarias y preexistentes.
      </blockquote>

      <p className="border-t border-(--color-border) pt-4 text-[0.85rem] text-(--color-text-light)">
        Fuentes:{" "}
        <a href="https://avepa.org/displasias-cadera/" target="_blank" rel="noopener">
          AVEPA
        </a>{" "}
        ·{" "}
        <a
          href="http://racve.es/publicaciones/diagnostico-precoz-y-tratamiento-de-la-displasia-de-cadera/"
          target="_blank"
          rel="noopener"
        >
          Real Academia de Ciencias Veterinarias de España
        </a>{" "}
        ·{" "}
        <a
          href="https://www.barkibu.com/blog/seguros-mascotas/enfermedades-preexistentes-en-los-seguros-para-perros"
          target="_blank"
          rel="noopener"
        >
          Barkibu — Enfermedades preexistentes
        </a>
      </p>
    </ArticleShell>
  );
}
