import Button from "./Button";
import CitySearch from "./CitySearch";

type Props = {
  citySlug: string;
  onCityChange: (slug: string) => void;
};

export default function Header({ onCityChange }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-6 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-teal-400" />
          <span className="text-lg font-semibold tracking-tight">CityLife</span>
        </div>

        {/* City search (NAVBAR) */}
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-[520px]">
            <CitySearch onSelect={(slug) => onCityChange(slug)} />
          </div>
        </div>

        {/* Actions */}
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost">Preferiti</Button>
          <Button variant="ghost">Accedi</Button>
          <Button>Aggiungi Attività</Button>
        </nav>
      </div>
    </header>
  );
}