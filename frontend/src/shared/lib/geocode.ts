const KEY = import.meta.env.VITE_MAPTILER_KEY;

export type GeocodeResult = {
  name: string;
  lat: number;
  lng: number;
};

// Minimal MapTiler GeoJSON types (only what we use)
type MapTilerFeature = {
  place_name: string;
  center: [number, number]; // [lng, lat]
};

type MapTilerResponse = {
  features?: MapTilerFeature[];
};

// Safe error message extractor (no `any`)
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

export async function geocode(query: string): Promise<GeocodeResult[]> {
  if (!KEY || !query.trim()) return [];

  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
    query
  )}.json?key=${KEY}&country=it&limit=5`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("[geocode] HTTP error:", res.status, res.statusText);
      return [];
    }

    const data: MapTilerResponse = await res.json();

    return (data.features ?? []).map((f) => ({
      name: f.place_name,
      lng: f.center[0],
      lat: f.center[1],
    }));
  } catch (error: unknown) {
    console.error("[geocode] Unexpected error:", getErrorMessage(error));
    return [];
  }
}