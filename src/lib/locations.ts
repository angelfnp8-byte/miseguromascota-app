/**
 * Location autocomplete data — same idea as breeds.ts. Provinces are the
 * complete, closed official list (52: 50 provincias + Ceuta y Melilla).
 * Cities are a curated set of the largest/best-known Spanish municipalities
 * (province capitals + other major cities) — not exhaustive (Spain has
 * ~8,000 municipalities), just a helpful starting set; the fields stay free
 * text, so anything not listed can still be typed in.
 */

export const spanishProvinces: string[] = [
  "A Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila",
  "Badajoz", "Barcelona", "Bizkaia", "Burgos", "Cáceres", "Cádiz", "Cantabria",
  "Castellón", "Ciudad Real", "Córdoba", "Cuenca", "Girona", "Gipuzkoa",
  "Granada", "Guadalajara", "Huelva", "Huesca", "Islas Baleares", "Jaén",
  "La Rioja", "Las Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga",
  "Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca",
  "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona",
  "Teruel", "Toledo", "Valencia", "Valladolid", "Zamora", "Zaragoza",
  "Ceuta", "Melilla",
];

export const spanishCities: string[] = [
  "A Coruña", "Alcalá de Henares", "Alcobendas", "Alcorcón", "Algeciras",
  "Alicante", "Almería", "Arona", "Ávila", "Badajoz", "Badalona", "Barcelona",
  "Benidorm", "Bilbao", "Burgos", "Cáceres", "Cádiz", "Cartagena", "Castellón de la Plana",
  "Ceuta", "Chiclana de la Frontera", "Ciudad Real", "Coslada", "Córdoba",
  "Cuenca", "Dos Hermanas", "El Puerto de Santa María", "Elche", "Estepona",
  "Ferrol", "Fuenlabrada", "Gandía", "Getafe", "Gijón", "Girona", "Granada",
  "Guadalajara", "Huelva", "Huesca", "Jaén", "Jerez de la Frontera",
  "L'Hospitalet de Llobregat", "Las Palmas de Gran Canaria", "Leganés",
  "León", "Lleida", "Logroño", "Lorca", "Lugo", "Madrid", "Málaga",
  "Manresa", "Marbella", "Mataró", "Melilla", "Mérida", "Móstoles",
  "Motril", "Murcia", "Ourense", "Oviedo", "Palencia", "Palma de Mallorca",
  "Pamplona", "Parla", "Pontevedra", "Reus", "Rivas-Vaciamadrid",
  "Roquetas de Mar", "Sabadell", "Salamanca", "San Cristóbal de La Laguna",
  "San Fernando", "San Sebastián", "San Sebastián de los Reyes",
  "Sanlúcar de Barrameda", "Santa Coloma de Gramenet",
  "Santa Cruz de Tenerife", "Santander", "Segovia", "Sevilla", "Soria",
  "Talavera de la Reina", "Tarragona", "Telde", "Terrassa", "Teruel",
  "Toledo", "Torrejón de Ardoz", "Torrent", "Valencia", "Valladolid",
  "Vélez-Málaga", "Vic", "Vigo", "Vinaròs", "Vitoria-Gasteiz",
  "Zamora", "Zaragoza",
];
