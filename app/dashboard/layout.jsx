"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/dashboard/auth-context";
import ProtectedRoute from "@/components/dashboard/protected-route";
import api from "@/lib/axios";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: "fas fa-tachometer-alt" },
  { name: "Banner", href: "/dashboard/banner", icon: "fas fa-image" },
  { name: "Stats", href: "/dashboard/stats", icon: "fas fa-chart-line" },
  { name: "Services", href: "/dashboard/services", icon: "fas fa-briefcase" },
  { name: "Advertisements", href: "/dashboard/advertisement", icon: "fas fa-play-circle" },
  { name: "Partners", href: "/dashboard/partners", icon: "fas fa-users" },
  { name: "Team", href: "/dashboard/team", icon: "fas fa-user-check" },
  { name: "Testimonials", href: "/dashboard/testimonials", icon: "fas fa-comment" },
  { name: "Blogs", href: "/dashboard/blogs", icon: "fas fa-file-alt" },
  { name: "Careers", href: "/dashboard/careers", icon: "fas fa-user-friends" },
];

function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="d-flex flex-column h-100 pb-4">
      <div className="flex-grow-1 overflow-auto">
        <div className="p-3">
          <h2 className="h5 fw-bold mb-3 px-2">Dashboard</h2>

          {user && (
            <div className="p-3 mb-3 bg-light rounded-3">
              <p className="mb-1 fw-medium small">{user.name}</p>
              <p className="mb-1 text-muted small">{user.email}</p>
              <p className="mb-0 text-success small fw-medium">{user.role}</p>
            </div>
          )}

          <div className="d-flex flex-column gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`d-flex align-items-center rounded px-3 py-2 text-sm fw-medium transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <i className={`${item.icon} me-2`} style={{ width: "16px" }}></i>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-top mt-3 pt-3 px-3">
        <button
          onClick={logout}
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-start text-danger hover-bg-danger-subtle"
          style={{ fontSize: "0.875rem" }}
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    async function isValid() {
      try {
        const response = await api.get("/landing/isValid");
        if (!response.data.success) {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
    isValid();
  }, [logout]);

  return (
    <ProtectedRoute>
      {/* Bootstrap & Font Awesome CDN (Add in layout.tsx or _document.tsx) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="d-flex h-100 vh-100 bg-light">
        {/* Desktop Sidebar */}
        <div className="d-none d-lg-block flex-shrink-0 border-end bg-white" style={{ width: "16rem" }}>
          <Sidebar />
        </div>

        {/* Mobile Offcanvas Sidebar */}
        <div
          className={`offcanvas offcanvas-start ${sidebarOpen ? "show" : ""}`}
          style={{ visibility: sidebarOpen ? "visible" : "hidden" }}
          tabIndex={-1}
          id="sidebarOffcanvas"
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Dashboard</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <Sidebar />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="d-lg-none position-fixed top-0 start-0 m-3 btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow z-3"
          style={{ width: "40px", height: "40px" }}
          onClick={() => setSidebarOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column overflow-hidden">
          <main className="flex-grow-1 overflow-auto p-3 p-md-4">{children}</main>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="offcanvas-backdrop fade show d-lg-none"
          onClick={() => setSidebarOpen(false)}
          style={{ zIndex: 1040 }}
        ></div>
      )}
    </ProtectedRoute>
  );
}