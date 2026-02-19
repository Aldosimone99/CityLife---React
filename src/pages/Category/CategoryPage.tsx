import { useParams, Link } from "react-router-dom";
import { paths } from "../../routes/paths";

export default function CategoryPage() {
  const { citySlug = "milano", categorySlug = "farmacie" } = useParams();

  // mock results
  const results = [
    { id: "1", name: "Farmacia Centrale", address: "Via Roma 15" },
    { id: "2", name: "Farmacia Duomo", address: "Piazza Duomo 1" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold capitalize">
        {categorySlug} • {citySlug}
      </h1>

      <div className="grid gap-3">
        {results.map((r) => (
          <Link
            key={r.id}
            to={paths.place(citySlug, r.id)}
            className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md"
          >
            <div className="text-sm font-semibold">{r.name}</div>
            <div className="mt-1 text-xs text-neutral-500">{r.address}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}