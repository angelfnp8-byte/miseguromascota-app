import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/layout/ArticleShell";

export const metadata: Metadata = {
  title: "Adopción segura: consejos antes de adoptar o dar en adopción",
  description:
    "Consejos prácticos de seguridad para adoptar o dar en adopción un animal: cómo quedar, qué pedir, señales de alerta y qué evitar.",
  alternates: { canonical: "/adopcion/adopcion-segura" },
};

export default function Page() {
  return (
    <ArticleShell crumb="Adopción / Adopción segura" title="Adopción segura: consejos antes de adoptar o dar en adopción">
      <p>
        Adoptar o dar en adopción a un animal implica quedar con una persona que no
        conoces. Sigue estos consejos para que el proceso sea seguro para ti y para el
        animal.
      </p>

      <h2>Antes de quedar</h2>
      <ul>
        <li>
          Habla primero por nuestro chat interno el tiempo que necesites, y desconfía
          de quien tenga prisa por cerrar el trato o presione para saltarse pasos.
        </li>
        <li>
          Pide fotos y vídeos recientes del animal, y toda la información posible
          sobre su salud y su historia.
        </li>
        <li>
          Comparte tu ubicación aproximada solo cuando confíes en la conversación, y
          nunca tu domicilio exacto antes de conoceros.
        </li>
      </ul>

      <h2>Al quedar en persona</h2>
      <ul>
        <li>
          Elige un <strong>lugar público</strong> para el primer encuentro (una plaza,
          un parque, la puerta de un centro veterinario), o ve acompañado si es
          posible.
        </li>
        <li>Avisa a alguien de confianza de dónde y con quién vas a quedar.</li>
        <li>
          Pide la cartilla veterinaria o el certificado del chip identificativo del
          animal si existen, y comprueba que el animal parece sano y bien cuidado.
        </li>
      </ul>

      <h2>Sobre el dinero</h2>
      <p>
        Mi Seguro Mascota no gestiona pagos entre las partes. Adoptar no debería tener
        coste, más allá de que una protectora pida una colaboración razonable para
        cubrir gastos veterinarios ya realizados (esterilización, vacunas, chip).
        Desconfía siempre de:
      </p>
      <ul>
        <li>Peticiones de pago por adelantado antes de ver al animal en persona.</li>
        <li>
          Propuestas de "envío" del animal por transporte o mensajería a cambio de un
          pago previo.
        </li>
        <li>Cantidades elevadas o poco justificadas.</li>
      </ul>

      <h2>Al formalizar la entrega</h2>
      <p>
        Te recomendamos dejar por escrito (aunque sea un documento sencillo, firmado
        por ambas partes) la fecha de entrega, los datos de contacto de ambas
        personas, y el compromiso de quien adopta de cuidar al animal. No es un
        trámite legal obligatorio, pero ayuda a que quede constancia clara de lo
        acordado.
      </p>

      <h2>Señales de alerta</h2>
      <p>
        Ten especial cuidado si detectas cualquiera de estas señales, y no continúes
        con la conversación:
      </p>
      <ul>
        <li>Piden dinero antes de cualquier contacto o encuentro real.</li>
        <li>Se niegan sistemáticamente a una videollamada o a enviar más fotos.</li>
        <li>El anuncio se repite de forma idéntica para muchos animales distintos.</li>
        <li>Presionan para cerrar el trato con urgencia inusual.</li>
      </ul>
      <p>
        Si detectas un anuncio sospechoso, contáctanos desde{" "}
        <Link href="/contacto">nuestra página de contacto</Link> para revisarlo.
      </p>

      <p>
        Una vez adoptes, consulta también{" "}
        <Link href="/adopcion/cuidados-primeros-dias">
          cómo cuidar a tu mascota los primeros días
        </Link>
        .
      </p>
    </ArticleShell>
  );
}
