"use client";

import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/lib/site-nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={`w-full basis-full lg:order-none lg:w-auto lg:basis-auto ${
          open ? "block" : "hidden lg:block"
        }`}
      >
        <ul className="mt-3.5 flex flex-col gap-0 border-t border-(--color-border) lg:mt-0 lg:flex-row lg:gap-6 lg:border-0">
          {mainNav.map((item) => (
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
