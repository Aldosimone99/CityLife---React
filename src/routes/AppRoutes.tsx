import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CityHomePage from "../pages/City/CityHomePage";
import CategoryPage from "../pages/Category/CategoryPage";
import PlacePage from "../pages/Place/PlacePage";
import SearchPage from "../pages/Search/SearchPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

export default function AppRoutes({ citySlug }: { citySlug: string }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage citySlug={citySlug} />} />

      <Route path="/c/:citySlug" element={<CityHomePage />} />
      <Route path="/c/:citySlug/search" element={<SearchPage />} />
      <Route path="/c/:citySlug/:categorySlug" element={<CategoryPage />} />
      <Route path="/c/:citySlug/place/:placeId" element={<PlacePage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}