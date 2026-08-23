import type { Metadata } from "next";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Cómo reclamar un reembolso que la aseguradora ha denegado",
  description:
    "Pasos reales para reclamar en España cuando tu aseguradora de mascotas deniega un reembolso: SAC, DGSFP, OCU, documentación y plazos legales.",
  alternates: { canonical: "/reclamar-reembolso-denegado" },
};

export default function Page() {
  return (
    <ArticleShell
      crumb="Reclamar un reembolso denegado"
      title="Cómo reclamar un reembolso que la aseguradora ha denegado"
    >
      <p>
        Que tu aseguradora deniegue un reembolso veterinario no es necesariamente la
        última palabra. En España existe un procedimiento formal, con plazos
        concretos, para reclamar. Así funciona.
      </p>

      <h2>Paso 1: reclama primero al Servicio de Atención al Cliente de tu aseguradora</h2>
      <p>
        Es un paso obligatorio antes de acudir a cualquier organismo externo.
        Preséntalo por escrito (email o el canal que indique tu póliza) explicando
        el motivo de tu disconformidad. La aseguradora dispone de un plazo máximo de{" "}
        <strong>dos meses</strong> para responder, según la Orden ECC/2502/2012. Si
        no responde en ese plazo, o su respuesta no te resulta satisfactoria, puedes
        pasar al siguiente paso.
      </p>

      <h2>Paso 2: Servicio de Reclamaciones de la DGSFP</h2>
      <p>
        La Dirección General de Seguros y Fondos de Pensiones (DGSFP), del
        Ministerio de Economía, tiene un servicio específico para reclamaciones
        contra aseguradoras. Puedes presentar tu reclamación online (con firma
        electrónica) o en papel. La DGSFP emite un informe en un plazo máximo de{" "}
        <strong>4 meses</strong> para reclamaciones (3 meses si es una queja). Ese
        informe no es vinculante para la aseguradora —no es como una sentencia—,
        pero tiene peso práctico y queda reflejado en la supervisión de la
        compañía.
      </p>
      <p>
        Puedes consultar el procedimiento y descargar el formulario en la{" "}
        <a
          href="https://dgsfp.mineco.gob.es/es/Consumidor/Reclamaciones/Paginas/InformacionProcedimiento.aspx"
          target="_blank"
          rel="noopener"
        >
          web oficial de la DGSFP
        </a>
        .
      </p>

      <h2>Otra vía: la plataforma de reclamaciones de la OCU</h2>
      <p>
        La OCU ofrece una{" "}
        <a href="https://www.ocu.org/reclamar" target="_blank" rel="noopener">
          plataforma pública y gratuita
        </a>{" "}
        donde puedes redactar tu reclamación con un asistente guiado; se envía
        directamente a la aseguradora, que suele responder en torno a 15 días, y
        puedes hacerla pública para dar visibilidad al caso. El asesoramiento legal
        más amplio de la OCU está reservado a sus socios, pero presentar la
        reclamación básica es gratuito para cualquier persona.
      </p>

      <h2>Documentación que conviene guardar desde el primer momento</h2>
      <ul>
        <li>La póliza completa, con condiciones generales y particulares.</li>
        <li>Todas las comunicaciones escritas con la aseguradora (emails, cartas, número de expediente).</li>
        <li>La resolución de denegación, con su motivación por escrito.</li>
        <li>Facturas, presupuestos e informes veterinarios del tratamiento reclamado.</li>
        <li>Justificante y fecha de tu reclamación ante el SAC (para acreditar que han pasado los dos meses).</li>
      </ul>

      <h2>Plazos legales a tener en cuenta</h2>
      <p>
        La Ley 50/1980, de Contrato de Seguro, fija en su artículo 23 un plazo de
        prescripción de dos años para las acciones derivadas de un seguro de daños
        (categoría en la que suele encuadrarse un seguro de mascotas centrado en
        gastos veterinarios/RC), frente a los cinco años de los seguros de personas.
        No existe jurisprudencia específica localizada sobre seguros de mascotas,
        así que este plazo debe entenderse por analogía, no como un dato cerrado
        para este producto concreto.
      </p>

      <blockquote>
        Este artículo tiene fines informativos y no sustituye el asesoramiento
        legal. Mi Seguro Mascota no es una aseguradora ni intermediario y no puede
        gestionar reclamaciones en tu nombre.
      </blockquote>

      <p className="border-t border-(--color-border) pt-4 text-[0.85rem] text-(--color-text-light)">
        Fuentes:{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2012-14363" target="_blank" rel="noopener">
          Orden ECC/2502/2012 (BOE)
        </a>{" "}
        ·{" "}
        <a
          href="https://dgsfp.mineco.gob.es/es/Consumidor/Reclamaciones/Paginas/InformacionProcedimiento.aspx"
          target="_blank"
          rel="noopener"
        >
          DGSFP — Servicio de Reclamaciones
        </a>{" "}
        ·{" "}
        <a href="https://www.ocu.org/reclamar" target="_blank" rel="noopener">
          OCU — Reclamaciones
        </a>{" "}
        ·{" "}
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1980-22501" target="_blank" rel="noopener">
          Ley 50/1980 de Contrato de Seguro (BOE)
        </a>
      </p>
    </ArticleShell>
  );
}
