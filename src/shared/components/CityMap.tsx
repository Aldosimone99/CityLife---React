import { useEffect, useMemo, useRef } from "react";
import maplibregl, { type Map as MapLibreMap } from "maplibre-gl";
import { CITIES, DEFAULT_CITY } from "../data/cities";

type Props = {
  citySlug?: string;
};

export default function CityMap({ citySlug }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  const city = useMemo(() => {
    if (!citySlug) return DEFAULT_CITY;
    return CITIES[citySlug] ?? DEFAULT_CITY;
  }, [citySlug]);

  // init map (once)
  useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: city.center,
      zoom: city.zoom,
    });

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");

    // marker demo (centro città)
    markerRef.current = new maplibregl.Marker({ color: "#0284c7" })
      .setLngLat(city.center)
      .addTo(map);

    mapRef.current = map;

    return () => {
      markerRef.current?.remove();
      mapRef.current?.remove();
      markerRef.current = null;
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update on city change
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (city.bounds) {
      map.fitBounds(city.bounds, { padding: 60, duration: 800 });
    } else {
      map.flyTo({ center: city.center, zoom: city.zoom, duration: 800 });
    }

    markerRef.current?.setLngLat(city.center);
  }, [city]);

  return (
    <div className="h-[calc(100vh-140px)] min-h-[640px] w-full">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}