import { useParams } from "react-router-dom";

export default function PlacePage() {
  const { citySlug, placeId } = useParams();

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Dettaglio luogo</h1>
      <p className="text-sm text-neutral-600">
        city: <span className="font-medium">{citySlug}</span> — placeId:{" "}
        <span className="font-medium">{placeId}</span>
      </p>
    </div>
  );
}