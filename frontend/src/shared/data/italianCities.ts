export type CityItem = {
  name: string;
  province?: string;
  region?: string;
  slug: string;
};

export function toSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// MVP list (poi la sostituiamo con tutte le città)
export const ITALIAN_CITIES: CityItem[] = [
  { name: "Milano", province: "MI", region: "Lombardia", slug: "milano" },
  { name: "Roma", province: "RM", region: "Lazio", slug: "roma" },
  { name: "Napoli", province: "NA", region: "Campania", slug: "napoli" },
  { name: "Torino", province: "TO", region: "Piemonte", slug: "torino" },
  { name: "Bologna", province: "BO", region: "Emilia-Romagna", slug: "bologna" },
  { name: "Firenze", province: "FI", region: "Toscana", slug: "firenze" },
  { name: "Palermo", province: "PA", region: "Sicilia", slug: "palermo" },
  { name: "Bari", province: "BA", region: "Puglia", slug: "bari" },
];