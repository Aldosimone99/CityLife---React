import { useMemo } from "react";
import { useParams } from "react-router-dom";
import CityMap from "../../shared/components/CityMap";
import { findCityBySlug } from "../../shared/data/cities-it";

export default function CityHomePage() {
  const { citySlug } = useParams();

  // Map center derived from the city slug (fallback to Milano)
  const mapCenter = useMemo(() => {
    const found = citySlug ? findCityBySlug(citySlug) : undefined;
    return found ? { lng: found.lng, lat: found.lat } : { lng: 9.19, lat: 45.4642 };
  }, [citySlug]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
      <div className="space-y-6">
        {/* ...sidebar / categorie / vicino a te... */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h1 className="text-xl font-semibold">CityLife • {citySlug}</h1>
          <p className="mt-1 text-sm text-neutral-600">Mappa reale centrata sulla città.</p>
        </div>
      </div>

      <div className="lg:sticky lg:top-[84px]">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <CityMap center={mapCenter} zoom={12} />
        </div>
      </div>
    </div>
  );
}