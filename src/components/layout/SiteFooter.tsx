import Link from "next/link";
import { LogoFooter } from "@/components/logo/LogoFooter";
import { footerContentLinks, footerLegalLinks } from "@/lib/site-nav";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-(--color-footer-bg) pt-11 pb-6 text-(--color-footer-text) text-[0.92rem]">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="mb-8 grid grid-cols-1 gap-7 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <LogoFooter className="mb-3.5 h-8 w-auto" />
            <p>
              Guías y comparativas independientes sobre seguros para mascotas en
              España, pensadas para ayudarte a entender tus opciones antes de
              contratar.
            </p>
          </div>
          <div>
            <h4 className="mb-3.5 font-heading text-base text-white">Contenido</h4>
            <ul className="space-y-2">
              {footerContentLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3.5 font-heading text-base text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/10 pt-4.5 text-[0.82rem] text-(--color-footer-muted)">
          <span>© {new Date().getFullYear()} Mi Seguro Mascota. Todos los derechos reservados.</span>
          <span>Sitio informativo — no somos una aseguradora ni corredores de seguros.</span>
        </div>
      </div>
    </footer>
  );
}
