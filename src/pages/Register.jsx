function Register() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
