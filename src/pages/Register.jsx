import React, { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !email || !contact || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (isNaN(age) || age < 1) {
      setMessage("Please enter a valid age.");
      return;
    }

    console.log({ firstName, lastName, age, email, contact, password });
    setMessage("Registration successful!");
    setFirstName(""); setLastName(""); setAge(""); setEmail(""); setContact(""); setPassword(""); setConfirmPassword("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://www.furb.com/cdn/shop/files/12_2025_Index.jpg?v=1766965312&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px"
      }}
    >
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-lg p-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.9)" }}>
          <h2 className="text-center mb-4 fw-bold">Register</h2>

          {message && <div className="alert alert-info">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} required min={1} />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input type="tel" className="form-control" placeholder="Enter contact number" value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={6} />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
