import React, { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [siteName, setSiteName] = useState("FurLuxe");
  const [adminEmail, setAdminEmail] = useState("admin@furluxe.com");
  const [timezone, setTimezone] = useState("UTC-8");
  const [language, setLanguage] = useState("English");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div>
      <h1 className="mb-4">Settings</h1>

      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-lg-3 mb-4">
          <div className="card shadow-sm">
            <div className="list-group list-group-flush">
              <button
                className={`list-group-item list-group-item-action ${activeTab === "general" ? "active" : ""}`}
                onClick={() => setActiveTab("general")}
              >
                ⚙️ General
              </button>
              <button
                className={`list-group-item list-group-item-action ${activeTab === "security" ? "active" : ""}`}
                onClick={() => setActiveTab("security")}
              >
                🔒 Security
              </button>
              <button
                className={`list-group-item list-group-item-action ${activeTab === "notifications" ? "active" : ""}`}
                onClick={() => setActiveTab("notifications")}
              >
                🔔 Notifications
              </button>
              <button
                className={`list-group-item list-group-item-action ${activeTab === "integrations" ? "active" : ""}`}
                onClick={() => setActiveTab("integrations")}
              >
                🔌 Integrations
              </button>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* General Settings */}
              {activeTab === "general" && (
                <div>
                  <h4 className="mb-4">General Settings</h4>
                  <form onSubmit={handleSave}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Site Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Admin Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Timezone</label>
                      <select
                        className="form-select"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                      >
                        <option value="UTC-8">UTC-8 (Pacific Time)</option>
                        <option value="UTC-5">UTC-5 (Eastern Time)</option>
                        <option value="UTC+0">UTC+0 (GMT)</option>
                        <option value="UTC+1">UTC+1 (Central European Time)</option>
                        <option value="UTC+8">UTC+8 (Philippine Time)</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Language</label>
                      <select
                        className="form-select"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                      </select>
                    </div>

                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Maintenance Mode</h6>
                            <small className="text-muted">Disable public access to the site</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={maintenanceMode}
                              onChange={(e) => setMaintenanceMode(e.target.checked)}
                              style={{ width: "50px", height: "25px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-success">
                        💾 Save Changes
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div>
                  <h4 className="mb-4">Security Settings</h4>
                  <form onSubmit={handleSave}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Current Password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">New Password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Confirm New Password</label>
                      <input type="password" className="form-control" />
                    </div>

                    <hr className="my-4" />

                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Two-Factor Authentication</h6>
                            <small className="text-muted">Add an extra layer of security</small>
                          </div>
                          <button className="btn btn-outline-success btn-sm">Enable</button>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-success">
                        💾 Update Password
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div>
                  <h4 className="mb-4">Notification Settings</h4>
                  <form onSubmit={handleSave}>
                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Email Notifications</h6>
                            <small className="text-muted">Receive email alerts</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={emailNotifications}
                              onChange={(e) => setEmailNotifications(e.target.checked)}
                              style={{ width: "50px", height: "25px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card bg-light mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">Order Notifications</h6>
                            <small className="text-muted">Get notified about new orders</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={orderNotifications}
                              onChange={(e) => setOrderNotifications(e.target.checked)}
                              style={{ width: "50px", height: "25px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Notification Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="admin@furluxe.com"
                      />
                    </div>

                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-success">
                        💾 Save Settings
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Integrations Settings */}
              {activeTab === "integrations" && (
                <div>
                  <h4 className="mb-4">Integrations</h4>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h6>Payment Gateway</h6>
                          <p className="text-muted small">Connect your payment processor</p>
                          <button className="btn btn-outline-success btn-sm">Configure</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h6>Email Service</h6>
                          <p className="text-muted small">Setup email delivery</p>
                          <button className="btn btn-outline-success btn-sm">Configure</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h6>Shipping API</h6>
                          <p className="text-muted small">Connect shipping providers</p>
                          <button className="btn btn-outline-success btn-sm">Configure</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h6>Analytics</h6>
                          <p className="text-muted small">Track visitor data</p>
                          <button className="btn btn-outline-success btn-sm">Configure</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
