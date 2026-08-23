import type { Metadata } from "next";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Seguro de viaje para mascotas: qué cubrir si viajas dentro de la UE",
  description:
    "Requisitos oficiales para viajar con tu perro o gato por la Unión Europea, el pasaporte europeo para animales de compañía y qué debería cubrir un seguro pensado para viajar.",
  alternates: { canonical: "/seguro-viaje-mascotas-ue" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Seguro de viaje para mascotas en la UE"
      title="Seguro de viaje para mascotas: qué cubrir si viajas dentro de la UE"
    >
      <p>
        Viajar con tu perro o gato por la Unión Europea implica cumplir unos
        requisitos sanitarios concretos, y tu seguro habitual probablemente no te
        cubre en cuanto cruzas la frontera. Esto es lo que necesitas saber.
      </p>

      <h2>Requisitos oficiales para viajar con tu mascota por la UE</h2>
      <ul>
        <li>
          <strong>Microchip</strong> conforme a la norma ISO 11784/11785, implantado
          antes de la vacunación antirrábica.
        </li>
        <li>
          <strong>Vacunación antirrábica</strong> a partir de las 12 semanas de
          edad, válida solo transcurridos 21 días desde su administración (así que
          la edad mínima efectiva para viajar ronda las 15 semanas).
        </li>
        <li>La fecha de la vacuna no puede ser anterior a la del implante del microchip.</li>
        <li>
          Máximo 5 animales por propietario en un mismo desplazamiento no comercial,
          salvo excepciones para competiciones registradas.
        </li>
      </ul>
      <p>
        Estos requisitos se recogían en el Reglamento (UE) 576/2013, sustituido el
        22 de abril de 2026 por un nuevo marco (Reglamento Delegado (UE) 2026/131 y
        normas de ejecución asociadas). Las condiciones sustantivas —microchip,
        vacuna, plazo de 21 días— no han cambiado, pero conviene saber que la
        referencia legal es ahora otra.
      </p>

      <h2>El pasaporte europeo para animales de compañía</h2>
      <p>
        Lo expide cualquier veterinario autorizado o colegiado en el país donde
        reside el animal. Recoge la identificación del animal (código de
        microchip), el registro completo de vacunas antirrábicas y los datos del
        veterinario que lo emitió. Con la normativa vigente desde 2026 también se
        anota el tratamiento antiparasitario cuando corresponde.
      </p>

      <h2>Un requisito extra si viajas a ciertos países (solo perros)</h2>
      <p>
        Finlandia, Irlanda, Malta, Irlanda del Norte y Noruega exigen un tratamiento
        contra la tenia <em>Echinococcus multilocularis</em>, administrado por un
        veterinario autorizado entre 24 y 120 horas antes de la llegada, y anotado
        en el pasaporte. No aplica a gatos ni hurones.
      </p>

      <h2>Tu seguro habitual probablemente no te cubre fuera de España</h2>
      <p>
        La mayoría de pólizas de mascotas contratadas en España dejan de aplicarse
        en cuanto sales del país. Si vas a viajar, conviene revisar
        específicamente si tu aseguradora ofrece cobertura fuera de España o si
        necesitas un producto de viaje aparte. Un seguro pensado para viajar debería
        incluir, como mínimo:
      </p>
      <ul>
        <li>Asistencia veterinaria de urgencia en el país de destino.</li>
        <li>Gastos de repatriación de la mascota si enferma gravemente.</li>
        <li>Cobertura por extravío: búsqueda, publicidad, alojamiento si aparece más tarde.</li>
        <li>Prolongación de la estancia del propietario en caso de accidente grave del animal.</li>
      </ul>
      <p>
        No todas las aseguradoras publican con claridad si ofrecen esta cobertura;
        revisa siempre el condicionado y la nota informativa (IPID) antes de dar por
        hecho que estás cubierto en otro país de la UE.
      </p>

      <blockquote>
        Consulta siempre las condiciones actualizadas del reglamento aplicable en el
        momento de tu viaje y confirma los requisitos específicos del país de
        destino con la embajada o el organismo veterinario oficial correspondiente.
      </blockquote>

      <p className="border-t border-(--color-border) pt-4 text-[0.85rem] text-(--color-text-light)">
        Fuentes:{" "}
        <a
          href="https://food.ec.europa.eu/animals/live-animal-movements/dogs-cats-and-ferrets/travelling-pet-within-eu_en"
          target="_blank"
          rel="noopener"
        >
          Comisión Europea
        </a>{" "}
        ·{" "}
        <a href="https://www.mapa.gob.es/es/ganaderia/preguntas-frecuentes/preguntas-mascotas" target="_blank" rel="noopener">
          MAPA — Preguntas frecuentes sobre mascotas
        </a>{" "}
        ·{" "}
        <a href="https://www.colvema.org/tramites-para-viajar-con-animales" target="_blank" rel="noopener">
          Colegio de Veterinarios de Madrid
        </a>
      </p>
    </ArticleShell>
  );
}
