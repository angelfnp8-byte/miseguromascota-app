import type { MetadataRoute } from "next";

const baseUrl = "https://miseguromascota.com";

const publicPaths = [
  "",
  "/que-es-seguro-mascotas",
  "/tipos-seguros-mascotas",
  "/comparador",
  "/seguro-perros-vs-gatos",
  "/cuanto-cuesta-seguro-mascota",
  "/como-elegir-seguro-mascota",
  "/preguntas-frecuentes",
  "/blog",
  "/glosario-seguro-mascotas",
  "/seguro-perros-raza-peligrosa",
  "/seguro-displasia-cadera",
  "/seguro-gato-interior",
  "/seguro-viaje-mascotas-ue",
  "/adoptar-perro-senior-seguro",
  "/reclamar-reembolso-denegado",
  "/sobre-nosotros",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return publicPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
