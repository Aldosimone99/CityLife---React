import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Shell from "./layout/Shell";
import AppRoutes from "../routes/AppRoutes";

export default function App() {
  const [citySlug, setCitySlug] = useState("milano");

  return (
    <BrowserRouter>
      <Shell citySlug={citySlug} onCityChange={setCitySlug}>
        <AppRoutes citySlug={citySlug} />
      </Shell>
    </BrowserRouter>
  );
}