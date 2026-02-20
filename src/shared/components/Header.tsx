import Button from "./Button";

type Props = {
  citySlug: string;
  onCityChange: (slug: string) => void;
};

export default function Header({ citySlug, onCityChange }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-teal-400" />
          <span className="text-lg font-semibold tracking-tight">CityLife</span>
        </div>

        <div className="hidden md:flex">
          <select
            className="h-10 rounded-xl border border-neutral-200 bg-white px-3 text-sm outline-none ring-sky-200 focus:ring"
            value={citySlug}
            onChange={(e) => onCityChange(e.target.value)}
          >
            <option value="milano">Milano</option>
            <option value="roma">Roma</option>
            <option value="napoli">Napoli</option>
            <option value="torino">Torino</option>
          </select>
        </div>

        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 focus-within:ring focus-within:ring-sky-200">
            <span className="text-neutral-400">⌕</span>
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Cerca farmacia, supermercato, medico…"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost">Preferiti</Button>
          <Button variant="ghost">Accedi</Button>
          <Button>Aggiungi Attività</Button>
        </nav>
      </div>
    </header>
  );
}