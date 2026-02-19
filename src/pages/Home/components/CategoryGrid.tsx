const categories = [
  { title: "Farmacie", emoji: "➕", gradient: "from-sky-500 to-sky-400" },
  { title: "Distributori", emoji: "⛽", gradient: "from-rose-500 to-rose-400" },
  { title: "Supermercati", emoji: "🛒", gradient: "from-amber-500 to-amber-400" },
  { title: "Medici", emoji: "🩺", gradient: "from-emerald-500 to-emerald-400" },
  { title: "Altri Servizi", emoji: "🛠️", gradient: "from-indigo-500 to-indigo-400" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((c) => (
        <button
          key={c.title}
          className="group flex h-28 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient}`}>
            <span className="text-lg">{c.emoji}</span>
          </div>
          <div className="mt-3 text-sm font-semibold text-neutral-900">{c.title}</div>
          <div className="mt-1 text-xs text-neutral-500 group-hover:text-neutral-600">Apri</div>
        </button>
      ))}
    </div>
  );
}