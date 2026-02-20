import cities from "./italy-cities.json";

export type CityIT = {
  name: string;
  slug: string;
  lat: number;
  lng: number;
};

export const IT_CITIES = cities as CityIT[];

export const findCityBySlug = (slug: string) =>
  IT_CITIES.find((c) => c.slug === slug);