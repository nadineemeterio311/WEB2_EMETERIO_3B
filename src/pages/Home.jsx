import React from "react";
import { Link } from "react-router-dom"; // for routing to About or Register pages

function Home() {
  return (
    <div className="container-fluid p-0">

      {/* Hero Section with Image */}
      <section 
        className="text-white text-center d-flex flex-column justify-content-center align-items-center" 
        style={{
          height: "80vh",
          backgroundImage: "url('https://www.furb.com/cdn/shop/files/07_2025_Index_2.jpg?v=1752557275&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="display-3 fw-bold" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>FurLuxe</h1>
        <p className="lead mb-4" style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}>Luxury Fashion for Your Furry Friends</p>
        <Link to="/register" className="btn btn-light btn-lg">Shop Now</Link>
      </section>

      {/* Featured Products / Services */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Premium Collections</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src="https://www.furb.com/cdn/shop/products/Furb_220622-1999_540x.jpg?v=1688401946" 
                className="card-img-top" 
                alt="Stylish Dog Clothes"
              />
              <div className="card-body">
                <h5 className="card-title">Stylish Outfits</h5>
                <p className="card-text">Trendy, comfy outfits for every occasion.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src="https://www.furb.com/cdn/shop/files/Picture44_1df54438-a9d2-45ad-be21-5914d85538ea_540x.png?v=1745619839" 
                className="card-img-top" 
                alt="Pet Accessories"
              />
              <div className="card-body">
                <h5 className="card-title">Accessories</h5>
                <p className="card-text">Collars, hats, and more to elevate your pet's style.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img 
                src="https://www.furb.com/cdn/shop/files/JHM02257_VSCO_540x.jpg?v=1741042254" 
                className="card-img-top" 
                alt="Premium Quality"
              />
              <div className="card-body">
                <h5 className="card-title">Premium Quality</h5>
                <p className="card-text">Soft, durable, and safe fabrics for your pets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>About FurLuxe</h2>
          <p className="lead mb-3">
            FurLuxe is dedicated to giving pets the style and comfort they deserve. 
            Trendy clothes, accessories, and premium quality – all in one place.
          </p>
          <Link to="/about" className="btn btn-success">Learn More</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm">
              <p>"My dog has never looked so stylish! FurLuxe is amazing."</p>
              <h6 className="fw-bold">– Sarah L.</h6>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm">
              <p>"High-quality products and great customer service!"</p>
              <h6 className="fw-bold">– James P.</h6>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm">
              <p>"My cat loves her new outfit, so soft and cute!"</p>
              <h6 className="fw-bold">– Emily R.</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-success text-white text-center py-5">
        <h2>Give Your Pets the Luxury They Deserve</h2>
        <Link to="/register" className="btn btn-light btn-lg mt-3">Register Now</Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-top">
        <p>&copy; {new Date().getFullYear()} FurLuxe. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
