import { Link } from "react-router-dom";
import { paths } from "../../routes/paths";

export default function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-sm text-neutral-600">Pagina non trovata.</p>
      <Link className="text-sm text-sky-700 underline" to={paths.home()}>
        Torna alla home
      </Link>
    </div>
  );
}