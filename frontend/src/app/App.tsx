import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Shell from "./layout/Shell";
import AppRoutes from "../routes/AppRoutes";
import { findCityBySlug } from "../shared/data/cities-it";

export default function App() {
  const [citySlug, setCitySlug] = useState("milano");

  // Map center derived from selected city (fallback to Milano)
  const center = useMemo(() => {
    const found = findCityBySlug(citySlug);
    return found ? { lng: found.lng, lat: found.lat } : { lng: 9.19, lat: 45.4642 };
  }, [citySlug]);

  return (
    <BrowserRouter>
      <Shell citySlug={citySlug} onCityChange={setCitySlug}>
      <AppRoutes center={center} />
      </Shell>
    </BrowserRouter>
  );
}