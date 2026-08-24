"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/site-nav";

const adoptionLinks = mainNav.filter((item) => item.group === "adopcion");
const insuranceLinks = mainNav.filter((item) => item.group === "seguros");

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú móvil al navegar a cualquier página — incluye enlaces
  // fuera de este componente (p. ej. "Iniciar sesión" en AuthStatus), que
  // visualmente aparece justo debajo del menú desplegado en móvil pero no
  // comparte este estado.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={`w-full basis-full lg:order-none lg:w-auto lg:basis-auto ${
          open ? "block" : "hidden lg:block"
        }`}
      >
        <div className="mt-3.5 flex flex-col gap-4 border-t border-(--color-border) pt-3 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:pt-0">
          <div>
            <p className="mb-1.5 px-1 text-[0.72rem] font-bold uppercase tracking-wide text-(--color-text-light) lg:hidden">
              Adopción
            </p>
            <ul className="flex flex-col gap-0 lg:flex-row">
              {adoptionLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-3.5 py-2.5 text-[0.94rem] font-bold text-(--color-secondary) hover:bg-(--color-secondary-light) lg:bg-(--color-secondary-light) lg:py-1.5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden h-6 w-px bg-(--color-border) lg:block" aria-hidden />

          <div>
            <p className="mb-1.5 mt-2 px-1 text-[0.72rem] font-bold uppercase tracking-wide text-(--color-text-light) lg:hidden">
              Seguros y guías
            </p>
            <ul className="flex flex-col gap-0 border-t border-(--color-border) lg:flex-row lg:gap-5 lg:border-0">
              {insuranceLinks.map((item) => (
                <li key={item.href} className="border-b border-(--color-border) lg:border-0">
                  <Link
                    href={item.href}
                    className="block px-1 py-3 text-[0.94rem] font-semibold text-(--color-text) hover:text-(--color-primary) lg:py-0"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-2xl text-(--color-secondary) lg:hidden"
      >
        ☰
      </button>
    </>
  );
}
