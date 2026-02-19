import { useParams, Link } from "react-router-dom";
import { paths } from "../../routes/paths";

export default function CityHomePage() {
  const { citySlug = "milano" } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">CityLife • {citySlug}</h1>
      <p className="text-sm text-neutral-600">
        Questa è la home della città. Qui metteremo categorie + “vicino a te”.
      </p>

      <div className="flex flex-wrap gap-2">
        <Link className="rounded-xl border px-3 py-2 text-sm" to={paths.category(citySlug, "farmacie")}>
          Farmacie
        </Link>
        <Link className="rounded-xl border px-3 py-2 text-sm" to={paths.category(citySlug, "distributori")}>
          Distributori
        </Link>
        <Link className="rounded-xl border px-3 py-2 text-sm" to={paths.search(citySlug) + "?q=farmacia"}>
          Cerca “farmacia”
        </Link>
      </div>
    </div>
  );
}