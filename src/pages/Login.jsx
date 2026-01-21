import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login successful!");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://i.pinimg.com/originals/ec/da/22/ecda22752d849ce153f63dc652b0783f.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px"
      }}
    >
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-lg p-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
          <h2 className="text-center mb-4 fw-bold">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
