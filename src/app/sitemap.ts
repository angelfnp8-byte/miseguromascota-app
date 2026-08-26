import type { MetadataRoute } from "next";
import { getAnimals } from "@/lib/animals";

const baseUrl = "https://miseguromascota-app.vercel.app";

const publicPaths = [
  "",
  "/adopcion",
  "/adopcion/como-funciona",
  "/adopcion/adopcion-segura",
  "/adopcion/preguntas-frecuentes",
  "/adopcion/cuidados-primeros-dias",
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticEntries = publicPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const animals = await getAnimals();
  const animalEntries = animals.map((animal) => ({
    url: `${baseUrl}/adopcion/${animal.id}`,
    lastModified: new Date(animal.updated_at),
  }));

  return [...staticEntries, ...animalEntries];
}
