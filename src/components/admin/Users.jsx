import React, { useState } from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "Sarah L.", email: "sarah@example.com", role: "Customer", status: "Active", orders: 12 },
    { id: 2, name: "James P.", email: "james@example.com", role: "Customer", status: "Active", orders: 8 },
    { id: 3, name: "Emily R.", email: "emily@example.com", role: "Customer", status: "Active", orders: 15 },
    { id: 4, name: "Mike T.", email: "mike@example.com", role: "Customer", status: "Inactive", orders: 3 },
    { id: 5, name: "Admin User", email: "admin@furluxe.com", role: "Admin", status: "Active", orders: 0 },
    { id: 6, name: "Lisa K.", email: "lisa@example.com", role: "Customer", status: "Active", orders: 6 }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Users Management</h1>
        <button className="btn btn-success">
          ➕ Add New User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h3 className="text-primary">{users.length}</h3>
              <p className="text-muted mb-0">Total Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h3 className="text-success">
                {users.filter(u => u.status === "Active").length}
              </h3>
              <p className="text-muted mb-0">Active Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h3 className="text-warning">
                {users.filter(u => u.role === "Customer").length}
              </h3>
              <p className="text-muted mb-0">Customers</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h3 className="text-info">
                {users.filter(u => u.role === "Admin").length}
              </h3>
              <p className="text-muted mb-0">Admins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="mb-0">All Users</h5>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Orders</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-2"
                             style={{ width: "35px", height: "35px", fontSize: "14px" }}>
                          <span className="text-white">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <span className="fw-bold">{user.name}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === "Admin" ? "bg-danger" : "bg-primary"}`}>
                        {user.role}
                      </span>
                    </td>
                    <td>{user.orders}</td>
                    <td>
                      <span className={`badge ${user.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        ✏️ Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">
              Showing {filteredUsers.length} of {users.length} users
            </span>
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
