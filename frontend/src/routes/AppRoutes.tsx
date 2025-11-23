// Este archivo se encargará de definir las rutas de la aplicación
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { GalleryPage } from "../pages/Gallery/GalleryPage";
import { MapPage } from "../pages/Map/MapPage";
import { AlertsPage } from "../pages/Alerts/AlertsPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}
