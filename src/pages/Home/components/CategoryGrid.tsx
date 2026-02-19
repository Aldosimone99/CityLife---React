type Category = {
  title: string;
  icon: string;
  subtitle: string;
  gradient: string;
  slug: string;
};

const categories: Category[] = [
  { title: "Farmacie", icon: "➕", subtitle: "Aperte ora", gradient: "from-sky-500 to-cyan-400", slug: "farmacie" },
  { title: "Distributori", icon: "⛽", subtitle: "Prezzi & vicini", gradient: "from-rose-500 to-orange-400", slug: "distributori" },
  { title: "Supermercati", icon: "🛒", subtitle: "Spesa rapida", gradient: "from-amber-500 to-yellow-400", slug: "supermercati" },
  { title: "Medici", icon: "🩺", subtitle: "Studi & ambulatori", gradient: "from-emerald-500 to-lime-400", slug: "medici" },
  { title: "Altri servizi", icon: "🛠️", subtitle: "Tutto il resto", gradient: "from-indigo-500 to-violet-400", slug: "servizi" },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map((c) => (
        <button
          key={c.slug}
          className="group relative flex h-28 w-full flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient}`}>
              <span className="text-lg">{c.icon}</span>
            </div>
            <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-700">
              Apri →
            </span>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-900">{c.title}</div>
            <div className="mt-1 text-xs text-neutral-500">{c.subtitle}</div>
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-neutral-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
        </button>
      ))}
    </div>
  );
}