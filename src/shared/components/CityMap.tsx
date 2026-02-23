import { useEffect, useMemo, useRef } from "react";
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";

// =============================
// MAP STYLE CONFIGURATION
// =============================

// API key (optional but recommended for full Google-like style)
const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY as string | undefined;

// Map style:
// - If key exists → MapTiler Streets (full roads + labels)
// - If no key → fallback demo style
const MAP_STYLE: string = MAPTILER_KEY
  ? `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`
  : "https://demotiles.maplibre.org/style.json";

// =============================
// TYPES
// =============================

export type LngLat = {
  lng: number;
  lat: number;
};

type Props = {
  // Map center (required)
  center: LngLat;

  // Zoom level (optional)
  zoom?: number;

  // Animate when center/zoom changes
  animate?: boolean;

  // Show a marker at the center
  showCenterMarker?: boolean;

  // Optional: override container height classes
  className?: string;
};

// =============================
// COMPONENT
// =============================

export default function CityMap({
  center,
  zoom = 12,
  animate = true,
  showCenterMarker = true,
  className = "h-[calc(100vh-140px)] min-h-[640px] w-full",
}: Props) {
  // -----------------------------
  // REFS
  // -----------------------------

  // Map container DOM reference
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Map instance reference
  const mapRef = useRef<MapLibreMap | null>(null);

  // Marker reference (optional center marker)
  const markerRef = useRef<maplibregl.Marker | null>(null);

  // -----------------------------
  // DERIVED VIEW STATE
  // -----------------------------

  // Keep a stable view object for effects
  const view = useMemo(
    () => ({ lng: center.lng, lat: center.lat, zoom }),
    [center.lng, center.lat, zoom]
  );

  // -----------------------------
  // INITIAL MAP CREATION (RUNS ONCE)
  // -----------------------------

  useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current) return; // Prevent double init

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [view.lng, view.lat],
      zoom: view.zoom,
    });

    // Diagnostics: confirm style loads and surface style/network errors
    map.once("load", () => {
      // Useful when map is inside flex/sticky containers
      map.resize();
      console.info("[CityMap] map loaded", {
        usingMapTiler: Boolean(MAPTILER_KEY),
        style: MAP_STYLE,
      });
    });

    map.on("error", (e) => {
      // MapLibre error events include network/style errors
      console.error("[CityMap] map error", e?.error ?? e);
    });

    map.on("styledata", () => {
      // Fires when style is loaded/updated; handy to verify the style actually applied
      // (avoid noisy logs by keeping it commented out)
      // console.debug("[CityMap] styledata");
    });

    // Warn developer if MapTiler key missing
    if (!MAPTILER_KEY) {
      console.warn(
        "[CityMap] VITE_MAPTILER_KEY missing: using fallback style (may show limited details). Add .env.local with VITE_MAPTILER_KEY and restart the dev server."
      );
    }

    // Add navigation controls (zoom + rotation)
    map.addControl(
      new maplibregl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    // Create center marker (optional)
    if (showCenterMarker) {
      markerRef.current = new maplibregl.Marker({ color: "#0284c7" })
        .setLngLat([view.lng, view.lat])
        .addTo(map);
    }

    mapRef.current = map;

    // Cleanup on unmount
    return () => {
      markerRef.current?.remove();
      mapRef.current?.remove();
      markerRef.current = null;
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -----------------------------
  // UPDATE MAP WHEN CENTER/ZOOM CHANGES
  // -----------------------------

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Animate camera to new center
    if (animate) {
      map.flyTo({
        center: [view.lng, view.lat],
        zoom: view.zoom,
        duration: 900,
      });
    } else {
      map.jumpTo({
        center: [view.lng, view.lat],
        zoom: view.zoom,
      });
    }

    // Move marker to new center
    if (showCenterMarker) {
      if (!markerRef.current) {
        markerRef.current = new maplibregl.Marker({ color: "#0284c7" })
          .setLngLat([view.lng, view.lat])
          .addTo(map);
      } else {
        markerRef.current.setLngLat([view.lng, view.lat]);
      }
    } else {
      markerRef.current?.remove();
      markerRef.current = null;
    }
  }, [view, animate, showCenterMarker]);

  // -----------------------------
  // RENDER
  // -----------------------------

  return (
    <div className={className}>
      {/* Map container element */}
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}