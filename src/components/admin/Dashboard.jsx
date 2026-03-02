import React from "react";

function Dashboard() {
  const stats = [
    { label: "Total Users", value: "2,543", change: "+12%", icon: "👥", color: "primary" },
    { label: "Active Orders", value: "847", change: "+8%", icon: "🛍️", color: "success" },
    { label: "Products Sold", value: "1,234", change: "+23%", icon: "📦", color: "warning" },
    { label: "Revenue", value: "$45,670", change: "+15%", icon: "💰", color: "info" }
  ];

  const recentActivity = [
    { user: "Sarah L.", action: "Purchased Dog Sweater", time: "2 mins ago" },
    { user: "James P.", action: "New user registration", time: "15 mins ago" },
    { user: "Emily R.", action: "Left 5-star review", time: "1 hour ago" },
    { user: "Mike T.", action: "Ordered Cat Collar", time: "2 hours ago" }
  ];

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>

      {/* Statistics Cards */}
      <div className="row mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span style={{ fontSize: "2rem" }}>{stat.icon}</span>
                  <span className="badge bg-success">{stat.change}</span>
                </div>
                <h6 className="text-muted mb-1">{stat.label}</h6>
                <h3 className="mb-0">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {/* Recent Activity */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              {recentActivity.map((activity, index) => (
                <div key={index} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" 
                       style={{ width: "40px", height: "40px" }}>
                    <span className="text-white">👤</span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0 fw-bold">{activity.user}</p>
                    <small className="text-muted">{activity.action}</small>
                  </div>
                  <small className="text-muted">{activity.time}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">System Status</h5>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Orders Processing</span>
                  <span className="fw-bold">45%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Inventory Stock</span>
                  <span className="fw-bold">78%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div className="progress-bar bg-success" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Customer Satisfaction</span>
                  <span className="fw-bold">92%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div className="progress-bar bg-warning" style={{ width: "92%" }}></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Server Load</span>
                  <span className="fw-bold">34%</span>
                </div>
                <div className="progress" style={{ height: "10px" }}>
                  <div className="progress-bar bg-info" style={{ width: "34%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Quick Actions</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 mb-2">
              <button className="btn btn-success w-100">
                ➕ Add Product
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-primary w-100">
                📧 Send Newsletter
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-warning w-100">
                📊 Generate Report
              </button>
            </div>
            <div className="col-md-3 mb-2">
              <button className="btn btn-info w-100">
                🔧 System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
