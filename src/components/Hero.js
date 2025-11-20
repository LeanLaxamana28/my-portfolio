import React from "react";
import profilePic from "../assets/lean.png.png";
import "./Hero.css"; // create this CSS file

function Hero() {
  return (
    <section id="hero" className="hero-section vh-100 d-flex align-items-center text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-3 fw-bold mb-3">Lean Laxamana</h1>
            <p className="lead mb-4">
              Aspiring Web Developer • React & Django
            </p>
            <a href="#projects" className="btn btn-light btn-lg">
              View My Work
            </a>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={profilePic}
              alt="Lean Laxamana"
              className="img-fluid rounded-circle shadow-lg border border-white"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
