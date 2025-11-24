import { NavLink, useLocation } from "react-router-dom";
import {
  Squares2X2Icon,
  CameraIcon,
  MapIcon,
  BellAlertIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import "../../styles/sidebar.css";
import React from "react";

export function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const location = useLocation();

  // CERRAR CUANDO SE CAMBIE DE RUTA
  // (Evita que quede abierto luego de navegar)
  React.useEffect(() => {
    // Solo cerrar el menú automáticamente en móvil
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      onClose();
    }
  }, [location.pathname]);

  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {/* FONDO OSCURO — sólo móvil */}
      {isMobile && (
        <div
          className={`sidebar-overlay ${isOpen ? "show" : ""}`}
          onClick={onClose}
        ></div>
      )}

      <aside className={`sidebar${isMobile && isOpen ? " open" : ""}`}>
        <div className="sidebar-logo">
          <h1>EcoWatch</h1>
          <span>Sistema de Monitoreo</span>
        </div>

        <nav className="sidebar-menu">
          <NavLink
            to="/"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <Squares2X2Icon className="icon" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/gallery"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <CameraIcon className="icon" />
            <span>Galería</span>
          </NavLink>

          <NavLink
            to="/map"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <MapIcon className="icon" />
            <span>Mapa</span>
          </NavLink>

          <NavLink
            to="/alerts"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <BellAlertIcon className="icon" />
            <span>Alertas</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <NavLink
            to="/settings"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <Cog6ToothIcon className="icon" />
            <span>Configuración</span>
          </NavLink>

          <NavLink
            to="/support"
            className="sidebar-link"
            onClick={isMobile ? onClose : undefined}
          >
            <LifebuoyIcon className="icon" />
            <span>Acerca de</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}
