import { Card } from "../../shared/components/Card";
import CategoryGrid from "./components/CategoryGrid";
import NearbyList from "./components/NearbyList";
import CityMap from "../../shared/components/CityMap";

export default function HomePage({
  citySlug,
}: {
  citySlug: string;
  onCityChange: (slug: string) => void;
}) {
  return (
    // Main layout: 2 columns (sidebar + map)
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
      {/* LEFT COLUMN - Sidebar */}
      <div className="space-y-6">
        {/* CARD 1 - Explore city section */}
        <Card className="p-5">
          {/* Title section */}
          <h1 className="text-xl font-semibold tracking-tight">Esplora la tua città</h1>

          {/* Subtitle description */}
          <p className="mt-1 text-sm text-neutral-600">
            Trova servizi essenziali in pochi secondi: farmacie, distributori, supermercati e altro.
          </p>

          {/* Services search bar */}
          <div className="mt-4">
            <div className="flex w-full items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm focus-within:ring focus-within:ring-sky-200">
              <span className="text-neutral-400">⌕</span>
              <input
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Cerca farmacia, supermercato, medico…"
              />
            </div>
          </div>

          {/* Categories grid */}
          <div className="mt-5">
            <CategoryGrid />
          </div>
        </Card>

        {/* CARD 2 - Nearby suggestions */}
        <Card className="p-5">
          {/* Nearby title */}
          <h2 className="text-base font-semibold">Vicino a te</h2>

          {/* Nearby description */}
          <p className="mt-1 text-sm text-neutral-600">
            Suggerimenti basati sulla città selezionata.
          </p>

          {/* Nearby list container */}
          <div className="mt-4">
            <NearbyList />
          </div>
        </Card>
      </div>

      {/* RIGHT COLUMN - Map section */}
      <div className="lg:sticky lg:top-[84px]">
        {/* Map container card */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <CityMap citySlug={citySlug} />
        </div>
      </div>
    </div>
  );
}