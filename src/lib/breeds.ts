import type { AnimalType } from "@/lib/supabase/types";

/**
 * Curated breed lists for autocomplete — real, publicly known breed names
 * (FCI/common standards), not exhaustive registries. Only species with a
 * standardized breed taxonomy get a list; the rest return [].
 */

export const dogBreeds: string[] = [
  "Akita Inu", "Alaskan Malamute", "Basenji", "Basset Hound", "Beagle",
  "Bearded Collie", "Bichón Frisé", "Bichón Maltés", "Bobtail",
  "Border Collie", "Border Terrier", "Boston Terrier", "Bóxer",
  "Boyero de Berna", "Boyero de Flandes", "Braco Alemán", "Braco Húngaro (Vizsla)",
  "Bull Terrier", "Bull Terrier Miniatura", "Bulldog Francés", "Bulldog Inglés",
  "Bullmastiff", "Cairn Terrier", "Cane Corso", "Carlino (Pug)",
  "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua",
  "Chinese Crested", "Chow Chow", "Cocker Spaniel Americano", "Cocker Spaniel Inglés",
  "Collie", "Corgi Galés", "Coton de Tuléar", "Dálmata", "Dobermann",
  "Dogo Alemán (Gran Danés)", "Dogo Argentino", "Dogo de Burdeos",
  "Epagneul Bretón", "Eurasier", "Fila Brasileiro", "Flat-Coated Retriever",
  "Foxhound", "Fox Terrier", "Galgo Afgano", "Galgo Español",
  "Golden Retriever", "Gran Pirineo", "Greyhound", "Griffon Bruxellois",
  "Husky Siberiano", "Jack Russell Terrier", "Kelpie Australiano", "Kuvasz",
  "Labrador Retriever", "Landseer", "Leonberger", "Lhasa Apso",
  "Mastín Español", "Mastín Napolitano", "Mastín Tibetano",
  "Otterhound", "Papillón", "Pastor Alemán", "Pastor Belga Malinois",
  "Pastor Blanco Suizo", "Pastor Catalán", "Pastor Vasco",
  "Pekinés", "Perdiguero de Burgos", "Perro de Agua Español",
  "Perro de Montaña de los Pirineos", "Perro Finlandés de Laponia",
  "Perro Lobo Checoslovaco", "Perro Pastor de Brie", "Pinscher Miniatura",
  "Pit Bull Terrier", "Podenco Andaluz", "Podenco Canario", "Podenco Ibicenco",
  "Pointer", "Pomerania", "Poodle (Caniche)", "Puli",
  "Ratonero Bodeguero Andaluz", "Ratonero Mallorquín", "Rhodesian Ridgeback",
  "Rottweiler", "Saluki", "Samoyedo", "San Bernardo", "Schipperke",
  "Schnauzer Gigante", "Schnauzer Miniatura", "Scottish Terrier",
  "Sealyham Terrier", "Setter Gordon", "Setter Inglés", "Setter Irlandés",
  "Shar Pei", "Shiba Inu", "Shih Tzu", "Skye Terrier", "Spitz Alemán",
  "Spitz Japonés", "Springer Spaniel", "Staffordshire Bull Terrier",
  "Teckel (Salchicha)", "Terranova", "Terrier Tibetano", "Weimaraner",
  "West Highland White Terrier", "Welsh Terrier", "Whippet",
  "Xoloitzcuintle", "Yorkshire Terrier",
];

export const catBreeds: string[] = [
  "Abisinio", "Angora Turco", "Azul Ruso", "Bengalí", "Birmano (Sagrado de Birmania)",
  "Bombay", "British Longhair", "British Shorthair", "Burmés", "Chartreux",
  "Cornish Rex", "Devon Rex", "Egipcio Mau", "Exótico de Pelo Corto",
  "Gato Común Europeo", "Himalayo", "Korat", "LaPerm", "Maine Coon", "Manx",
  "Munchkin", "Nebelung", "Neva Masquerade", "Noruego del Bosque", "Ocicat",
  "Oriental de Pelo Corto", "Persa", "Peterbald", "Pixie-bob", "Ragdoll",
  "Savannah", "Scottish Fold", "Selkirk Rex", "Serengeti", "Siamés",
  "Siberiano", "Singapura", "Snowshoe", "Somalí", "Sphynx", "Tonkinés",
  "Turco Van",
];

export const rabbitBreeds: string[] = [
  "Angora Enano", "Angora Inglés", "Belier Enano (Mini Lop)", "Belier Francés",
  "Cabeza de León", "Californiano", "Chinchilla Gigante", "Conejo Común Europeo",
  "Enano de Color", "Gigante de Flandes", "Himalayo", "Holandés",
  "Holland Lop", "Mariposa Inglés", "Mini Rex", "Nueva Zelanda",
  "Polaco (Britannia Petite)", "Rex", "Satín",
];

export function breedsForType(type: AnimalType): string[] {
  switch (type) {
    case "perro":
      return dogBreeds;
    case "gato":
      return catBreeds;
    case "conejo":
      return rabbitBreeds;
    default:
      return [];
  }
}
