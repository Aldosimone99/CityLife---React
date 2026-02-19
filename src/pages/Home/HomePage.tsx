import { Card } from "../../shared/components/Card";
import CategoryGrid from "./components/CategoryGrid";
import NearbyList from "./components/NearbyList";
import MapMock from "./components/MapMock";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[420px_1fr]">
      {/* LEFT */}
      <div className="space-y-6">
        <Card className="p-5">
          <h1 className="text-xl font-semibold tracking-tight">Esplora la tua città</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Trova servizi essenziali in pochi secondi: farmacie, distributori, supermercati e altro.
          </p>

          <div className="mt-5">
            <CategoryGrid />
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="text-base font-semibold">Vicino a te</h2>
          <p className="mt-1 text-sm text-neutral-600">Suggerimenti basati sulla città selezionata.</p>
          <div className="mt-4">
            <NearbyList />
          </div>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="lg:sticky lg:top-[84px]">
  <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
    <MapMock />
  </div>
</div>
    </div>
  );
}