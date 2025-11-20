import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import profilePic from "./assets/lean.png.png";
import "./App.css";

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Certificates data
  const certificates = [
    { title: "React Developer", issuer: "Coursera", img: "/certificates/react.png" },
    { title: "Frontend Mastery", issuer: "Udemy", img: "/certificates/frontend.png" },
    { title: "UI/UX Design", issuer: "Figma Academy", img: "/certificates/uiux.png" },
    { title: "Network Security", issuer: "NetSec", img: "/certificates/NetworkSupportandSecurityUpdate2025.png" },
  ];

  // Projects data
  const projects = [
    {
      title: "React CRUD App",
      desc: "A full React.js CRUD application deployed on Vercel.",
      img: "/projects/react-crud.png", // Add screenshot in public/projects/react-crud.png
      link: "https://react-crud-demo-xi.vercel.app"
    },
    {
      title: "Project 2",
      desc: "Description for project 2",
      img: "/projects/project2.png",
      link: "#"
    },
    {
      title: "Project 3",
      desc: "Description for project 3",
      img: "/projects/project3.png",
      link: "#"
    }
  ];

  return (
    <div style={{ backgroundColor: "#1A0E2A", color: "#FFFFFF", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#1A0E2A", borderBottom: "1px solid #C855FF" }}>
        <div className="container">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand text-white fw-bold" href="#home">LeanPortfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#certificates">Certificates</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="d-flex align-items-center" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center">

          {/* LEFT TEXT */}
          <div className="text-center text-md-start me-md-5" data-aos="fade-right">
            <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
              Hi, I'm <br />
              <span style={{ color: "#C855FF" }}>Lean Laxamana</span>
            </h1>
            <p className="lead mt-3" style={{ color: "#D8D5DE" }}>
              Front-End Developer • React.js • Bootstrap • UI Designer
            </p>
            <a href="/CV.pdf" className="btn btn-lg mt-4"
              style={{ backgroundColor: "#C855FF", color: "#1A0E2A", fontWeight: "700", padding: "12px 25px", borderRadius: "50px" }}>
              Download CV
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left" className="d-flex justify-content-center justify-content-md-end">
            <div style={{
              position: "relative",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C855FF, #6B1AB7)",
              padding: "8px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}>
              <img src={profilePic} alt="Profile" className="img-fluid rounded-circle" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid rgba(255,255,255,0.2)"
              }} />
              <div style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: "370px",
                height: "370px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(200,85,255,0.3) 0%, transparent 70%)",
                zIndex: "-1"
              }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-5" style={{ backgroundColor: "#F5F2FA", color: "#1A0E2A" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="zoom-in">Projects</h2>
          <div className="row g-4">
            {projects.map((proj, i) => (
              <div className="col-md-4" key={i}>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card h-100 shadow" data-aos="fade-up" data-aos-delay={i * 150}
                    style={{ border: "1px solid #D8D5DE", transition: "0.3s", cursor: "pointer" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
                    <img src={proj.img} className="card-img-top" alt={proj.title} style={{ objectFit: "cover", height: "200px" }} />
                    <div className="card-body text-center">
                      <h5 className="fw-bold">{proj.title}</h5>
                      <p className="text-muted">{proj.desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-5" style={{ backgroundColor: "#FFFFFF", color: "#1A0E2A" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" data-aos="zoom-in" style={{ color: "#C855FF" }}>Certificates</h2>
          <div className="row g-4">
            {certificates.map((cert, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm" data-aos="fade-up" data-aos-delay={i * 150}
                  style={{ border: "1px solid #D8D5DE", transition: "0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  onClick={() => setSelectedCert(cert)}
                >
                  <img src={cert.img} className="card-img-top" alt={cert.title} style={{ objectFit: "cover", height: "200px" }} />
                  <div className="card-body text-center">
                    <h5 className="fw-bold">{cert.title}</h5>
                    <p className="text-muted">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CERTIFICATE MODAL */}
          {selectedCert && (
            <div className="modal show d-block fade-modal" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-transparent border-0 text-center animate-zoom">
                  <img src={selectedCert.img} alt={selectedCert.title} className="img-fluid rounded shadow-lg" />
                  <h5 className="text-white mt-3">{selectedCert.title}</h5>
                  <p className="text-white">{selectedCert.issuer}</p>
                  <button className="btn btn-outline-light mt-2" onClick={() => setSelectedCert(null)}>Close</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold" style={{ color: "#C855FF" }}>About Me</h2>
          <p className="mt-3" style={{ color: "#D8D5DE", maxWidth: "700px", margin: "auto" }}>
            I am a passionate front-end developer with experience in React.js, Firebase, UI design, and animation.
            I love creating modern, clean, responsive user interfaces with smooth motion and professional layouts.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5" style={{ backgroundColor: "#F5F2FA", color: "#1A0E2A" }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Contact Me</h2>
          <p>Email: yourname@gmail.com</p>
        </div>
      </section>

    </div>
  );
}
