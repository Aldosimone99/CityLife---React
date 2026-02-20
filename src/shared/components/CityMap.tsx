import { useEffect, useMemo, useRef } from "react";
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";
import { findCityBySlug } from "../data/cities-it";

// =============================
// MAP STYLE CONFIGURATION
// =============================

// API key (optional but recommended for full Google-like style)
const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY as string | undefined;

// Map style:
// - If key exists → MapTiler Basic (Google-like streets)
// - If no key → fallback demo style
const MAP_STYLE: string = MAPTILER_KEY
  ? `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`
  : "https://demotiles.maplibre.org/style.json";

// =============================
// TYPES
// =============================

type Props = {
  citySlug?: string;
};

// Fallback city (Milano) if slug not found
const FALLBACK_CITY = {
  lng: 9.19,
  lat: 45.4642,
  zoom: 12,
};

// =============================
// COMPONENT
// =============================

export default function CityMap({ citySlug }: Props) {
  // -----------------------------
  // REFS
  // -----------------------------

  // Map container DOM reference
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Map instance reference
  const mapRef = useRef<MapLibreMap | null>(null);

  // Marker reference (center marker)
  const markerRef = useRef<maplibregl.Marker | null>(null);

  // -----------------------------
  // DERIVED CITY DATA
  // -----------------------------

  // Compute city coordinates from slug
  const city = useMemo(() => {
    if (!citySlug) return FALLBACK_CITY;

    const found = findCityBySlug(citySlug);

    if (!found) return FALLBACK_CITY;

    return {
      lng: found.lng,
      lat: found.lat,
      zoom: 12,
    };
  }, [citySlug]);

  // -----------------------------
  // INITIAL MAP CREATION (RUNS ONCE)
  // -----------------------------

  useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current) return; // Prevent double init

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [city.lng, city.lat],
      zoom: city.zoom,
    });

    // Warn developer if MapTiler key missing
    if (!MAPTILER_KEY) {
      console.warn(
        "[CityMap] VITE_MAPTILER_KEY missing: using fallback style. Add .env.local for full street detail."
      );
    }

    // Add navigation controls (zoom + rotation)
    map.addControl(
      new maplibregl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    // Create center marker
    markerRef.current = new maplibregl.Marker({ color: "#0284c7" })
      .setLngLat([city.lng, city.lat])
      .addTo(map);

    mapRef.current = map;

    // Cleanup on unmount
    return () => {
      markerRef.current?.remove();
      mapRef.current?.remove();
      markerRef.current = null;
      mapRef.current = null;
    };
  }, []);

  // -----------------------------
  // UPDATE MAP WHEN CITY CHANGES
  // -----------------------------

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Animate camera to new city
    map.flyTo({
      center: [city.lng, city.lat],
      zoom: city.zoom,
      duration: 900,
    });

    // Move marker to new city
    markerRef.current?.setLngLat([city.lng, city.lat]);
  }, [city]);

  // -----------------------------
  // RENDER
  // -----------------------------

  return (
    <div className="h-[calc(100vh-140px)] min-h-[640px] w-full">
      {/* Map container element */}
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}