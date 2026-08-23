export type NavLink = {
  label: string;
  href: string;
};

/** Single source of truth for the main nav — header and footer both read from here. */
export const mainNav: NavLink[] = [
  { label: "Qué es", href: "/que-es-seguro-mascotas" },
  { label: "Tipos de seguro", href: "/tipos-seguros-mascotas" },
  { label: "Comparador", href: "/comparador" },
  { label: "Perros vs gatos", href: "/seguro-perros-vs-gatos" },
  { label: "Precios", href: "/cuanto-cuesta-seguro-mascota" },
  { label: "Cómo elegir", href: "/como-elegir-seguro-mascota" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Blog", href: "/blog" },
];

export const footerContentLinks: NavLink[] = [
  { label: "Qué es un seguro de mascotas", href: "/que-es-seguro-mascotas" },
  { label: "Tipos de seguro", href: "/tipos-seguros-mascotas" },
  { label: "Comparador de seguros", href: "/comparador" },
  { label: "Precios", href: "/cuanto-cuesta-seguro-mascota" },
  { label: "Blog", href: "/blog" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
  { label: "Aviso legal", href: "/aviso-legal" },
];
