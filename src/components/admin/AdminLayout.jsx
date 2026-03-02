import React, { useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Reports from "./Reports";
import Settings from "./Settings";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { path: "/admin/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/admin/users", icon: "👥", label: "Users" },
    { path: "/admin/reports", icon: "📄", label: "Reports" },
    { path: "/admin/settings", icon: "⚙️", label: "Settings" }
  ];

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white ${sidebarOpen ? "d-block" : "d-none"} d-lg-block`}
        style={{
          width: "250px",
          position: "fixed",
          height: "100vh",
          overflowY: "auto",
          zIndex: 1000
        }}
      >
        <div className="p-3 border-bottom border-secondary">
          <h4 className="mb-0">🐾 FurLuxe Admin</h4>
        </div>
        <nav className="p-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`d-block text-decoration-none p-3 mb-2 rounded ${
                  isActive ? "bg-success text-white" : "text-white-50"
                }`}
                style={{
                  transition: "all 0.3s",
                  backgroundColor: isActive ? "" : "transparent"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.backgroundColor = "#495057";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.backgroundColor = "transparent";
                }}
                onClick={() => window.innerWidth < 992 && setSidebarOpen(false)}
              >
                <span className="me-2">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1" style={{ marginLeft: window.innerWidth >= 992 ? "250px" : "0" }}>
        {/* Top Navbar */}
        <nav className="navbar navbar-light bg-white border-bottom sticky-top">
          <div className="container-fluid">
            <button
              className="btn btn-outline-secondary d-lg-none"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <form className="d-none d-md-flex mx-auto" style={{ width: "50%" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="badge bg-success rounded-circle me-2">A</span>
                Admin User
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item text-danger" to="/">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4" style={{ minHeight: "calc(100vh - 120px)" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <p className="mb-0">&copy; {new Date().getFullYear()} FurLuxe Admin Panel. All rights reserved.</p>
        </footer>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999 }}
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default AdminLayout;
