import { NavLink } from "react-router-dom";
import {
  Squares2X2Icon,
  CameraIcon,
  MapIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

import "../../styles/sidebar.css";

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <h1>EcoWatch</h1>
        <span>Sistema de Monitoreo</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" className="sidebar-link">
          <Squares2X2Icon className="icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/gallery" className="sidebar-link">
          <CameraIcon className="icon" />
          <span>Galería</span>
        </NavLink>

        <NavLink to="/map" className="sidebar-link">
          <MapIcon className="icon" />
          <span>Mapa</span>
        </NavLink>

        <NavLink to="/alerts" className="sidebar-link">
          <BellAlertIcon className="icon" />
          <span>Alertas</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="sidebar-link">
          <Cog6ToothIcon className="icon" />
          <span>Configuración</span>
        </NavLink>

        <NavLink to="/support" className="sidebar-link">
          <LifebuoyIcon className="icon" />
          <span>Soporte</span>
        </NavLink>
      </div>
    </aside>
  );
}
