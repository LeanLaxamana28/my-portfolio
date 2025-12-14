import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import profilePic from "./assets/lean.png.png";
import "./App.css";

/* =====================
   DESIGN SYSTEM
===================== */
const COLORS = {
  bgDark: "#1A0E2A",
  bgSoft: "#24143A",
  primary: "#C855FF",
  primarySoft: "#E3B8FF",
  textMain: "#FFFFFF",
  textMuted: "#CFC7DD",
  border: "rgba(200,85,255,0.25)"
};

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  /* =====================
     DATA
  ===================== */
  const projects = [
    {
      title: "React CRUD App",
      desc: "Full-featured React CRUD application with clean UI.",
      img: "/projects/React_Blog.png",
      link: "https://react-crud-demo-xi.vercel.app"
    },
    {
      title: "Bakery Ordering System",
      desc: "React-based bakery ordering and cart system.",
      img: "/projects/Bakery_Ordering System.png",
      link: "https://sweet-treats-bakery-app.vercel.app/"
    },
    {
      title: "Attendance App (Mobile)",
      desc: "React Native mobile attendance tracker.",
      img: "/projects/Attendance_Mobile.png",
      link: "https://snack.expo.dev/@leantot/class-attendance-app-mobile"
    },
    {
      title: "Attendance App (Web)",
      desc: "Web dashboard for managing attendance records.",
      img: "/projects/Attendance_Web.png",
      link: "https://attendance-app-two-xi.vercel.app/"
    }
  ];

  const certificates = [
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      img: "/certificates/JavaScript Essentials 1.png",
      link: "https://www.credly.com/badges/36d0bbd1-6bce-40c9-a054-1b6f8092495a/public_url"
    },
    {
      title: "Network Security",
      issuer: "Cisco",
      img: "/certificates/NetworkSupportandSecurityUpdate2025.png",
      link: "https://www.credly.com/badges/075321f1-c29f-49b0-ba9b-69a8651cf7a2/public_url"
    }
  ];

  return (
    <div style={{ backgroundColor: COLORS.bgDark, color: COLORS.textMain }}>

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: COLORS.bgDark,
          borderBottom: `1px solid ${COLORS.border}`
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" style={{ color: COLORS.textMain }}>
            LeanPortfolio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              {["home", "projects", "certificates", "about", "contact"].map(item => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item}`} style={{ color: COLORS.textMuted }}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="d-flex align-items-center" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <div className="me-md-5 text-center text-md-start" data-aos="fade-right">
            <h1 className="fw-bold display-4">
              Hi, I'm <br />
              <span style={{ color: COLORS.primary }}>Lean Laxamana</span>
            </h1>
            <p className="mt-3" style={{ color: COLORS.textMuted, maxWidth: 520 }}>
              Front-End Developer crafting modern, responsive, and animated web experiences.
            </p>
            <a
              href="/CV.pdf"
              className="btn mt-4"
              style={{
                backgroundColor: COLORS.primary,
                color: COLORS.bgDark,
                borderRadius: 50,
                padding: "12px 32px",
                fontWeight: 700
              }}
            >
              Download CV
            </a>
          </div>

          <div data-aos="fade-left" className="mt-4 mt-md-0">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-circle"
              style={{
                width: 320,
                border: `4px solid ${COLORS.primary}`,
                display: "block"
              }}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-5" style={{ backgroundColor: COLORS.bgSoft }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: COLORS.primary }}>
            Projects
          </h2>

          <div className="row g-4">
            {projects.map((proj, i) => (
              <div className="col-md-4" key={i}>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div
                    className="card h-100"
                    style={{
                      backgroundColor: COLORS.bgDark,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "0.3s",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <img
                      src={proj.img}
                      alt={proj.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 style={{ color: COLORS.textMain }}>{proj.title}</h5>
                      <p style={{ color: COLORS.textMuted, fontSize: "0.95rem" }}>{proj.desc}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-5" style={{ backgroundColor: COLORS.bgDark }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-5" style={{ color: COLORS.primary }}>
            Certificates
          </h2>

          <div className="row g-4">
            {certificates.map((cert, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card h-100"
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    backgroundColor: COLORS.bgSoft,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: 16,
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 style={{ color: COLORS.textMain }}>{cert.title}</h5>
                    <p style={{ color: COLORS.textMuted }}>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL */}
          {selectedCert && (
            <div className="modal show d-block" style={{ backgroundColor: "rgba(26,14,42,0.95)" }}>
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-transparent border-0 text-center">
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    style={{
                      maxHeight: "80vh",
                      width: "100%",
                      objectFit: "contain",
                      display: "block",
                      margin: "auto"
                    }}
                  />
                  <h5 className="mt-3" style={{ color: COLORS.textMain }}>{selectedCert.title}</h5>
                  <p style={{ color: COLORS.textMuted }}>{selectedCert.issuer}</p>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{ backgroundColor: COLORS.primary, color: COLORS.bgDark }}
                    >
                      Live
                    </a>
                    <button className="btn btn-outline-light" onClick={() => setSelectedCert(null)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold" style={{ color: COLORS.primary }}>About Me</h2>
          <p style={{ color: COLORS.textMuted, maxWidth: 720, margin: "auto" }}>
            I specialize in building modern front-end applications with React, animations, and thoughtful UX design.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 text-center" style={{ backgroundColor: COLORS.bgSoft }}>
        <h2 className="fw-bold">Contact</h2>
        <p style={{ color: COLORS.textMuted }}>📞 09925381167</p>
        <p style={{ color: COLORS.textMuted }}>📧 leanlaxamana35@gmail.com</p>
      </section>

    </div>
  );
}
