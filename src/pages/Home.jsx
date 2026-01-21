function About() {
  return (
    <div className="container mt-5 text-center">
      <h1>About FurLuxe</h1>
      <p className="lead">
        FurLuxe is dedicated to providing luxurious and comfortable products for pets.
      </p>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1561948955-5700c8c3e8b4"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 text-start">
          <h4>Our Mission</h4>
          <p>
            To combine quality, style, and pet wellness into every product we make.
          </p>
          <h4>Our Vision</h4>
          <p>
            To become the leading brand in luxurious and practical pet products worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
