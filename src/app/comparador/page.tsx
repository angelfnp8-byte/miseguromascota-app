import type { Metadata } from "next";
import Link from "next/link";
import { getInsurers } from "@/lib/insurers";
import { ComparadorClient } from "@/components/comparador/ComparadorClient";
import { AdSlot } from "@/components/ads/AdSlot";
import { AD_SLOTS } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "Comparador de seguros para perros y gatos",
  description:
    "Compara coberturas de las principales aseguradoras de mascotas en España -RC, salud básica y completa- con enlace directo a la web oficial de cada una.",
  alternates: { canonical: "/comparador" },
};

export default async function ComparadorPage() {
  const insurers = await getInsurers();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: insurers.map((insurer, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: `Seguro de mascotas — ${insurer.name}`,
        provider: { "@type": "Organization", name: insurer.name },
        url: insurer.website_url,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-[820px] px-5 pt-10 pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>{" "}
        / Comparador
      </p>
      <p className="section-eyebrow">🇪🇸 Mercado: España</p>
      <h1>Comparador de seguros para perros y gatos</h1>
      <p>
        Compara de un vistazo las coberturas, precios orientativos y valoraciones
        de las principales aseguradoras de mascotas <strong>disponibles en
        España</strong>. Cuando mostramos un precio, procede de la propia web
        oficial de la aseguradora o de cobertura de prensa citando su tarifa de
        lanzamiento — nunca lo calculamos ni lo estimamos nosotros. Te lleva con
        un enlace directo a la web oficial para ver el precio final y completar
        la solicitud.
      </p>

      <blockquote className="my-6 rounded-r-2xl border-l-4 border-(--color-primary) bg-(--color-secondary-light) p-5 text-[0.98rem]">
        Desde 2026, la Ley de Bienestar Animal obliga en España a contratar un
        seguro de responsabilidad civil para <strong>perros</strong> (no es exigible
        para gatos). Ni esta página ni Mi Seguro Mascota son una aseguradora ni un
        corredor de seguros: solo comparamos información pública para ayudarte a
        decidir. El precio y las condiciones definitivas los fija siempre la
        aseguradora en su web oficial.
      </blockquote>

      <ComparadorClient insurers={insurers} />

      <AdSlot slot={AD_SLOTS.contentTop} />

      <p className="mt-11 border-t border-(--color-border) pt-4.5 text-[0.82rem] text-(--color-text-light)">
        Los precios mostrados, cuando existen, son orientativos. El precio final
        puede variar según las características de la mascota, edad, ubicación,
        coberturas, condiciones de contratación y otros factores determinados por la
        aseguradora. Este sitio no es un corredor ni intermediario de seguros y no
        percibe comisión por las contrataciones que puedas realizar en las webs
        enlazadas salvo que se indique expresamente lo contrario. Las
        valoraciones mostradas proceden de Trustpilot y corresponden a la
        reputación general de cada aseguradora (no a una valoración específica
        de su seguro de mascotas), en la fecha de comprobación indicada junto a
        cada una.
      </p>
    </div>
  );
}
