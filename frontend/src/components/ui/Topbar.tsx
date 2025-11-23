import "../../styles/topbar.css";
import { useLocation } from "react-router-dom";

export function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { pathname } = useLocation();

  const titles: Record<string, string> = {
    "/": "Dashboard",
    "/gallery": "Galería",
    "/map": "Map",
    "/alerts": "Alerts",
    "/settings": "Settings",
    "/support": "Support",
  };

  const title = titles[pathname] || "";

  return (
    <header className="topbar">
      {/* Hamburguesa (solo móvil) */}
      <div className="hamburger" onClick={onToggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* TÍTULO A LA IZQUIERDA */}
      <h2 className="topbar-title-left">{title}</h2>

      {/* Avatar */}
      <div className="user-avatar"></div>
    </header>
  );
}
