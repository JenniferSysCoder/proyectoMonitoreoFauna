import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { Topbar } from "../components/ui/Topbar";
import "../styles/layout.css";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} />

      <div className="dashboard-content">
        <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main style={{ padding: "25px" }}>{children}</main>
      </div>
    </div>
  );
}
