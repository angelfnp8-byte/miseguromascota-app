export type NavLink = {
  label: string;
  href: string;
  group: "adopcion" | "seguros";
};

/** Single source of truth for the main nav — header and footer both read from here. */
export const mainNav: NavLink[] = [
  { label: "Adopción", href: "/adopcion", group: "adopcion" },
  { label: "Qué es", href: "/que-es-seguro-mascotas", group: "seguros" },
  { label: "Tipos de seguro", href: "/tipos-seguros-mascotas", group: "seguros" },
  { label: "Comparador", href: "/comparador", group: "seguros" },
  { label: "Perros vs gatos", href: "/seguro-perros-vs-gatos", group: "seguros" },
  { label: "Precios", href: "/cuanto-cuesta-seguro-mascota", group: "seguros" },
  { label: "Cómo elegir", href: "/como-elegir-seguro-mascota", group: "seguros" },
  { label: "FAQ", href: "/preguntas-frecuentes", group: "seguros" },
  { label: "Blog", href: "/blog", group: "seguros" },
];

type FooterLink = { label: string; href: string };

export const footerContentLinks: FooterLink[] = [
  { label: "Adopción de mascotas", href: "/adopcion" },
  { label: "Cómo funciona la adopción", href: "/adopcion/como-funciona" },
  { label: "Adopción segura", href: "/adopcion/adopcion-segura" },
  { label: "Qué es un seguro de mascotas", href: "/que-es-seguro-mascotas" },
  { label: "Tipos de seguro", href: "/tipos-seguros-mascotas" },
  { label: "Comparador de seguros", href: "/comparador" },
  { label: "Precios", href: "/cuanto-cuesta-seguro-mascota" },
  { label: "Blog", href: "/blog" },
];

export const footerLegalLinks: FooterLink[] = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
  { label: "Aviso legal", href: "/aviso-legal" },
];
