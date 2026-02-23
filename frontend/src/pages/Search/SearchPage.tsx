import { useParams, useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const { citySlug } = useParams();
  const [sp] = useSearchParams();
  const q = sp.get("q") ?? "";

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Ricerca</h1>
      <p className="text-sm text-neutral-600">
        city: <span className="font-medium">{citySlug}</span> — query:{" "}
        <span className="font-medium">{q}</span>
      </p>
    </div>
  );
}