import React from "react";

function About() {
  return (
    <div className="container mt-5">

      {/* Hero Section with Background Image */}
      <div 
        className="text-center text-white d-flex flex-column justify-content-center align-items-center mb-5 rounded" 
        style={{
          height: "400px",
          backgroundImage: "url(https://www.furb.com/cdn/shop/products/Furb_220622-1469-2_540x.jpg?v=1750788407)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="display-4 fw-bold" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>About FurLuxe</h1>
        <p className="lead" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}>
          Premium fashion and comfort for your beloved pets
        </p>
      </div>

      {/* Our Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://www.furb.com/cdn/shop/files/01_2025_Index_cf655182-b4cb-4b96-a88d-cd7311d72367.jpg?v=1766965312&width=1920"
            alt="luxury pet clothing"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            At FurLuxe, we believe pets deserve style and comfort. Founded with a
            passion for fashion and love for furry friends, we create high-quality,
            trendy clothing and accessories that make every pet look and feel special.
            Our mission is to combine style, quality, and care in every product we offer.
          </p>
        </div>
      </div>

      {/* Services Section with Example Images */}
      <div className="mb-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://www.furb.com/cdn/shop/files/fortylove_540x.jpg?v=1752400659"
                alt="Stylish Outfits"
                className="img-fluid rounded mb-3"
              />
              <h4>Stylish Outfits</h4>
              <p>Trendy clothes for all occasions, designed for comfort and flair.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://www.furb.com/cdn/shop/files/Picture27_540x.jpg?v=1736995759"
                alt="Accessories"
                className="img-fluid rounded mb-3"
              />
              <h4>Accessories</h4>
              <p>Collars, leashes, and hats to complete your pet’s fashionable look.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded shadow-sm h-100">
              <img
                src="https://www.furb.com/cdn/shop/files/heart_throb_540x.jpg?v=1748026519"
                alt="Premium Quality"
                className="img-fluid rounded mb-3"
              />
              <h4>Premium Quality</h4>
              <p>Durable materials that are gentle on your pet’s skin and fur.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mb-5">
        <h2>Join the FurLuxe Family</h2>
        <p>Give your pets the luxury they deserve today!</p>
        <a href="/register" className="btn btn-success btn-lg">
          Register Now
        </a>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* Footer Section */}
      <footer className="text-center py-4 border-top">
        <p>&copy; {new Date().getFullYear()} FurLuxe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
