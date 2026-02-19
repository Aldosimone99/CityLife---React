export default function MapMock() {
  return (
    <div className="relative h-[calc(100vh-140px)] min-h-[640px] w-full bg-gradient-to-br from-neutral-100 to-neutral-200">
      {/* Top toolbar */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white/80 px-3 py-2 text-xs text-neutral-700 shadow-sm backdrop-blur">
          <span className="font-medium">Mappa</span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">Milano</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-2xl border border-neutral-200 bg-white/80 px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur hover:bg-white">
            Filtri
          </button>
          <button className="rounded-2xl border border-neutral-200 bg-white/80 px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm backdrop-blur hover:bg-white">
            Vicino a me
          </button>
        </div>
      </div>

      {/* Fake map grid */}
      <div className="absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:28px_28px]" />
      </div>

      {/* Pins */}
      <Pin x="22%" y="30%" />
      <Pin x="49%" y="38%" />
      <Pin x="76%" y="24%" />
      <Pin x="64%" y="60%" />
      <Pin x="32%" y="66%" />

      {/* Floating card */}
      <div className="absolute bottom-6 left-6 right-6 max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            ➕
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">Farmacia Centrale</div>
            <div className="mt-1 text-xs text-neutral-500">Via Roma, 15 • Milano</div>
            <div className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Aperta ora
            </div>
          </div>
          <button className="h-9 rounded-xl bg-sky-600 px-4 text-sm font-medium text-white hover:bg-sky-700">
            Dettagli
          </button>
        </div>
      </div>
    </div>
  );
}

function Pin({ x, y }: { x: string; y: string }) {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-md ring-1 ring-neutral-200" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600" />
    </div>
  );
}