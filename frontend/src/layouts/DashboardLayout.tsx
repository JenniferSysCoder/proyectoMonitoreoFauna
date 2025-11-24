import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { Topbar } from "../components/ui/Topbar";
import "../styles/layout.css";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => setSidebarOpen(!sidebarOpen);
  const handleClose = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={handleClose} />

      <div className="dashboard-content">
        <Topbar onToggleSidebar={handleToggle} />
        <main style={{ padding: "25px" }}>{children}</main>
      </div>
    </div>
  );
}
