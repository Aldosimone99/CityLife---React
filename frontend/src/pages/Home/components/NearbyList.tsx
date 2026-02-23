const items = [
  { name: "Farmacia Centrale", meta: "1.2 km", badge: "Aperto" },
  { name: "Distributore Q8", meta: "850 m", badge: "Aperto" },
  { name: "Supermercato Coop", meta: "1.5 km", badge: "Aperto" },
];

export default function NearbyList() {
  return (
    <div className="divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200">
      {items.map((it) => (
        <div key={it.name} className="flex items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-neutral-900">{it.name}</div>
            <div className="text-xs text-neutral-500">{it.meta}</div>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            {it.badge}
          </span>
        </div>
      ))}
    </div>
  );
}