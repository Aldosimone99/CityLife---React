import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CityHomePage from "../pages/City/CityHomePage";
import CategoryPage from "../pages/Category/CategoryPage";
import PlacePage from "../pages/Place/PlacePage";
import SearchPage from "../pages/Search/SearchPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing: scegli città */}
      <Route path="/" element={<HomePage />} />

      {/* “Default city” (opzionale): se vuoi mandare subito su Milano */}
      <Route path="/c" element={<Navigate to="/c/milano" replace />} />

      {/* Home della città */}
      <Route path="/c/:citySlug" element={<CityHomePage />} />

      {/* Ricerca */}
      <Route path="/c/:citySlug/search" element={<SearchPage />} />

      {/* Categoria (farmacie, distributori...) */}
      <Route path="/c/:citySlug/:categorySlug" element={<CategoryPage />} />

      {/* Dettaglio luogo */}
      <Route path="/c/:citySlug/place/:placeId" element={<PlacePage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}