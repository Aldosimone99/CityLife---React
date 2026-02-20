import { useEffect, useMemo, useRef, useState } from "react";
import { IT_CITIES, type CityIT } from "../data/cities-it";

// Normalizza testo: minuscole, rimuove accenti, compatta spazi, rimuove apostrofi strani
function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")     // rimuove accenti
    .replace(/[’']/g, "")               // apostrofi
    .replace(/\s+/g, " ");              // spazi multipli -> singolo
}

type Props = {
  onSelect: (citySlug: string) => void;
};

export default function CitySearch({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => {
    const q = normalize(query);
    const list = IT_CITIES;

    // Se input vuoto: mostra i primi (giusto per UI)
    if (!q) return list.slice(0, 12);

    // Ricerca: prima i "startsWith", poi "includes"
    const starts: CityIT[] = [];
    const contains: CityIT[] = [];

    for (const c of list) {
      const nameN = normalize(c.name);
      if (nameN.startsWith(q)) starts.push(c);
      else if (nameN.includes(q)) contains.push(c);

      // Limita risultati (prestazioni)
      if (starts.length + contains.length >= 20) break;
    }

    return [...starts, ...contains].slice(0, 20);
  }, [query]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const pick = (city: CityIT) => {
    setQuery(city.name);
    setOpen(false);
    onSelect(city.slug);
  };

  return (
    <div ref={wrapRef} className="relative">
      <label className="sr-only" htmlFor="citysearch">Cerca città</label>

      <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm focus-within:ring focus-within:ring-sky-200">
        <span className="text-neutral-400">⌕</span>
        <input
          id="citysearch"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Cerca un comune (es. Abano Terme, Firenze, Sanremo...)"
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-neutral-600">Nessun risultato.</div>
          ) : (
            <ul className="max-h-72 overflow-auto">
              {results.map((c) => (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => pick(c)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-neutral-50"
                  >
                    <span className="font-medium text-neutral-900">{c.name}</span>
                    {/* Se in futuro aggiungi province/regioni, puoi mostrarle qui */}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}