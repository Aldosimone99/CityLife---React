export type CityConfig = {
  slug: string;
  name: string;
  center: [number, number]; // [lng, lat]
  zoom: number;
  // opzionale (meglio): bounds per fitBounds
  bounds?: [[number, number], [number, number]]; // [[west,south],[east,north]]
};

export const CITIES: Record<string, CityConfig> = {
  milano: {
    slug: "milano",
    name: "Milano",
    center: [9.1900, 45.4642],
    zoom: 12,
    bounds: [[9.009, 45.402], [9.278, 45.535]],
  },
  roma: {
    slug: "roma",
    name: "Roma",
    center: [12.4964, 41.9028],
    zoom: 11,
    bounds: [[12.235, 41.769], [12.734, 42.012]],
  },
  napoli: {
    slug: "napoli",
    name: "Napoli",
    center: [14.2681, 40.8518],
    zoom: 12,
    bounds: [[14.129, 40.779], [14.365, 40.915]],
  },
  torino: {
    slug: "torino",
    name: "Torino",
    center: [7.6869, 45.0703],
    zoom: 12,
    bounds: [[7.582, 45.000], [7.780, 45.121]],
  },
};

export const DEFAULT_CITY = CITIES.milano;