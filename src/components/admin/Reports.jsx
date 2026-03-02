import React from "react";

function Reports() {
  const reports = [
    {
      id: 1,
      title: "Monthly Sales Report",
      date: "2024-02-01",
      type: "Sales",
      status: "Completed",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Customer Analytics Q1",
      date: "2024-02-05",
      type: "Analytics",
      status: "Completed",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Inventory Report",
      date: "2024-02-10",
      type: "Inventory",
      status: "In Progress",
      size: "3.2 MB"
    },
    {
      id: 4,
      title: "Revenue Report Q1 2024",
      date: "2024-02-12",
      type: "Financial",
      status: "Pending",
      size: "1.5 MB"
    },
    {
      id: 5,
      title: "Product Performance",
      date: "2024-02-14",
      type: "Analytics",
      status: "Completed",
      size: "2.1 MB"
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      "Completed": "bg-success",
      "In Progress": "bg-warning",
      "Pending": "bg-secondary"
    };
    return badges[status] || "bg-secondary";
  };

  const getTypeIcon = (type) => {
    const icons = {
      "Sales": "💰",
      "Analytics": "📊",
      "Inventory": "📦",
      "Financial": "💵"
    };
    return icons[type] || "📄";
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Reports</h1>
        <button className="btn btn-success">
          ➕ Generate New Report
        </button>
      </div>

      {/* Report Statistics */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm border-start border-4 border-primary">
            <div className="card-body">
              <h6 className="text-muted mb-2">Total Reports</h6>
              <h3 className="mb-0">{reports.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm border-start border-4 border-success">
            <div className="card-body">
              <h6 className="text-muted mb-2">Completed</h6>
              <h3 className="mb-0 text-success">
                {reports.filter(r => r.status === "Completed").length}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm border-start border-4 border-warning">
            <div className="card-body">
              <h6 className="text-muted mb-2">In Progress</h6>
              <h3 className="mb-0 text-warning">
                {reports.filter(r => r.status === "In Progress").length}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm border-start border-4 border-secondary">
            <div className="card-body">
              <h6 className="text-muted mb-2">Pending</h6>
              <h3 className="mb-0 text-secondary">
                {reports.filter(r => r.status === "Pending").length}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Recent Reports</h5>
        </div>
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            {reports.map((report) => (
              <div key={report.id} className="list-group-item list-group-item-action">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="bg-light rounded p-3" style={{ fontSize: "2rem" }}>
                      {getTypeIcon(report.type)}
                    </div>
                  </div>
                  <div className="col">
                    <h6 className="mb-1">{report.title}</h6>
                    <small className="text-muted">
                      {report.date} • {report.type} • {report.size}
                    </small>
                  </div>
                  <div className="col-auto">
                    <span className={`badge ${getStatusBadge(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-outline-success me-2">
                      👁️ View
                    </button>
                    <button className="btn btn-sm btn-outline-primary">
                      ⬇️ Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Available Report Types</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3 border rounded h-100">
                    <div style={{ fontSize: "3rem" }}>💰</div>
                    <h6 className="mt-2">Sales Reports</h6>
                    <small className="text-muted">Track sales performance</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3 border rounded h-100">
                    <div style={{ fontSize: "3rem" }}>📊</div>
                    <h6 className="mt-2">Analytics</h6>
                    <small className="text-muted">Customer insights</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3 border rounded h-100">
                    <div style={{ fontSize: "3rem" }}>📦</div>
                    <h6 className="mt-2">Inventory</h6>
                    <small className="text-muted">Stock management</small>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="text-center p-3 border rounded h-100">
                    <div style={{ fontSize: "3rem" }}>💵</div>
                    <h6 className="mt-2">Financial</h6>
                    <small className="text-muted">Revenue tracking</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
