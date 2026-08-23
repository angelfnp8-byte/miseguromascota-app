import type { Metadata } from "next";
import Link from "next/link";
import { getInsurers } from "@/lib/insurers";
import { ComparadorClient } from "@/components/comparador/ComparadorClient";

export const metadata: Metadata = {
  title: "Comparador de seguros para perros y gatos",
  description:
    "Compara las coberturas de las principales aseguradoras de mascotas en España -responsabilidad civil, salud básica y salud completa- con enlace directo a la web oficial de cada aseguradora.",
  alternates: { canonical: "/comparador" },
};

export default async function ComparadorPage() {
  const insurers = await getInsurers();

  return (
    <div className="mx-auto max-w-[820px] px-5 pt-10 pb-14">
      <p className="mb-1.5 text-[0.85rem] text-(--color-text-light)">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>{" "}
        / Comparador
      </p>
      <h1>Comparador de seguros para perros y gatos</h1>
      <p className="mb-4 mt-4 inline-flex items-center gap-1.5 rounded-full bg-(--color-secondary-light) px-3.5 py-1.5 text-[0.85rem] font-bold text-(--color-secondary)">
        🇪🇸 Mercado: España
      </p>
      <p>
        Compara de un vistazo las coberturas de las principales aseguradoras de
        mascotas <strong>disponibles en España</strong>. Esta herramienta{" "}
        <strong>no calcula ni muestra precios oficiales</strong>: te ayuda a acortar
        la lista según lo que cubre cada póliza, y te lleva con un enlace directo a
        la web oficial española de la aseguradora para ver el precio real y
        completar la solicitud.
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

      <p className="mt-11 border-t border-(--color-border) pt-4.5 text-[0.82rem] text-(--color-text-light)">
        Los precios mostrados, cuando existen, son orientativos. El precio final
        puede variar según las características de la mascota, edad, ubicación,
        coberturas, condiciones de contratación y otros factores determinados por la
        aseguradora. Este sitio no es un corredor ni intermediario de seguros y no
        percibe comisión por las contrataciones que puedas realizar en las webs
        enlazadas salvo que se indique expresamente lo contrario.
      </p>
    </div>
  );
}
