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
  textMain: "#FFFFFF",
  textMuted: "#CFC7DD",
  border: "rgba(200,85,255,0.25)"
};

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      title: "React CRUD App",
      desc: "Full-featured React CRUD application with admin authentication.",
      img: "/projects/React_Blog.png",
      link: "https://react-crud-demo-xi.vercel.app",
      credentials: ["Email: admin@gmail.com", "Password: admin123"]
    },
    {
      title: "Bakery Ordering System",
      desc: "Bakery ordering system with staff login access.",
      img: "/projects/Bakery_Ordering System.png",
      link: "https://sweet-treats-bakery-app.vercel.app/",
      credentials: ["Username: staff", "Password: 1234"]
    },
    {
      title: "Attendance App (Mobile)",
      desc: "Mobile attendance tracking app for teachers.",
      img: "/projects/Attendance_Mobile.png",
      link: "https://snack.expo.dev/@leantot/class-attendance-app-mobile",
      credentials: [
        "teacher1@gmail.com / 123456",
        "teacher2@gmail.com / 123456"
      ]
    },
    {
      title: "Attendance App (Web)",
      desc: "Web-based attendance management system.",
      img: "/projects/Attendance_Web.png",
      link: "https://attendance-app-two-xi.vercel.app/",
      credentials: [
        "teacher1@gmail.com / 123456",
        "teacher2@gmail.com / 123456"
      ]
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
      <nav className="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: COLORS.bgDark, borderBottom: `1px solid ${COLORS.border}` }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" style={{ color: COLORS.textMain }}>
            LeanPortfolio
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["home", "projects", "certificates", "about", "skills", "experience", "contact"].map(item => (
                <li key={item} className="nav-item">
                  <a className="nav-link" href={`#${item}`} style={{ color: COLORS.textMuted }}>
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="d-flex align-items-center"
        style={{ minHeight: "100vh", paddingTop: 100 }}>
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <div data-aos="fade-right">
            <h1 className="fw-bold display-4">
              Hi, I'm <span style={{ color: COLORS.primary }}>Lean Laxamana</span>
            </h1>
            <p style={{ color: COLORS.textMuted }}>
              Front-End Developer • React • UI/UX
            </p>
            <a href="/CV.pdf" className="btn mt-3"
              style={{ backgroundColor: COLORS.primary, color: COLORS.bgDark, borderRadius: 50 }}>
              Download CV
            </a>
          </div>
          <img src={profilePic} alt="Lean Laxamana"
            className="rounded-circle ms-md-5 mt-4 mt-md-0"
            style={{ width: 280, border: `4px solid ${COLORS.primary}` }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: COLORS.primary }}>Projects</h2>
          <div className="row g-4">
            {projects.map((proj, i) => (
              <div className="col-md-6 col-lg-4" key={i} data-aos="zoom-in">
                <a href={proj.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <div className="card h-100"
                    style={{
                      backgroundColor: COLORS.bgDark,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 16
                    }}>
                    <img src={proj.img} alt={proj.title} loading="lazy"
                      style={{ height: 200, objectFit: "cover" }} />
                    <div className="card-body">
                      <h5>{proj.title}</h5>
                      <p style={{ color: COLORS.textMuted }}>{proj.desc}</p>
                      <small style={{ color: COLORS.primary }}>Demo Login</small>
                      <ul style={{ fontSize: "0.85rem", color: COLORS.textMuted }}>
                        {proj.credentials.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-5" style={{ backgroundColor: COLORS.bgSoft }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: COLORS.primary }}>
            Certificates
          </h2>
          <div className="row g-4">
            {certificates.map((cert, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100"
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: COLORS.bgDark,
                    borderRadius: 16
                  }}>
                  <img src={cert.img} alt={cert.title}
                    style={{ height: 200, objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h5>{cert.title}</h5>
                    <p style={{ color: COLORS.textMuted }}>{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedCert && (
            <div className="modal show d-block"
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-transparent border-0 text-center">
                  <img src={selectedCert.img} alt="Certificate"
                    style={{ maxHeight: "80vh" }} />
                  <a href={selectedCert.link} target="_blank" rel="noreferrer"
                    className="btn mt-3"
                    style={{ backgroundColor: COLORS.primary }}>
                    View Live
                  </a>
                  <button className="btn btn-outline-light mt-2"
                    onClick={() => setSelectedCert(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ color: COLORS.primary }}>About Me</h2>
          <p style={{ maxWidth: 760, margin: "auto", color: COLORS.textMuted }}>
            Front-End Developer with hands-on experience building React-based web
            and mobile applications. Strong focus on UI/UX, performance, and
            maintainable code. Passionate about learning new technologies
            and solving real-world problems.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-5" style={{ backgroundColor: COLORS.bgSoft }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: COLORS.primary }}>Skills</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "React", "JavaScript", "HTML", "CSS",
              "Bootstrap", "Git", "Firebase",
              "REST API", "UI/UX Design"
            ].map(skill => (
              <span key={skill}
                style={{
                  padding: "8px 18px",
                  borderRadius: 20,
                  border: `1px solid ${COLORS.border}`
                }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE / HIGHLIGHTS WITH METRICS */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: COLORS.primary }}>
            Experience & Highlights
          </h2>
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div style={{
                backgroundColor: COLORS.bgSoft,
                padding: 30,
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`
              }}>
                <h3 style={{ color: COLORS.primary }}>4+</h3>
                <p>React Projects Built</p>
              </div>
            </div>
            <div className="col-md-3">
              <div style={{
                backgroundColor: COLORS.bgSoft,
                padding: 30,
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`
              }}>
                <h3 style={{ color: COLORS.primary }}>3</h3>
                <p>Mobile Apps Developed</p>
              </div>
            </div>
            <div className="col-md-3">
              <div style={{
                backgroundColor: COLORS.bgSoft,
                padding: 30,
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`
              }}>
                <h3 style={{ color: COLORS.primary }}>5+</h3>
                <p>APIs Integrated</p>
              </div>
            </div>
            <div className="col-md-3">
              <div style={{
                backgroundColor: COLORS.bgSoft,
                padding: 30,
                borderRadius: 12,
                border: `1px solid ${COLORS.border}`
              }}>
                <h3 style={{ color: COLORS.primary }}>100%</h3>
                <p>Responsive UI Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5 text-center" style={{ backgroundColor: COLORS.bgSoft }}>
        <h2 className="fw-bold">Contact</h2>
        <p>📞 09925381167</p>
        <p>📧 leanlaxamana35@gmail.com</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://github.com/LeanLaxamana28" target="_blank" rel="noreferrer">GitHub</a>
         
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-4"
        style={{ borderTop: `1px solid ${COLORS.border}` }}>
        <small style={{ color: COLORS.textMuted }}>
          © {new Date().getFullYear()} Lean Laxamana
        </small>
      </footer>

    </div>
  );
}
