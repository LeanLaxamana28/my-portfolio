import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css"; // new CSS file

function Navbar() {
  const sections = ["hero", "about", "skills", "projects", "contact"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link
          className="navbar-brand fw-bold text-danger"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Lean Laxamana
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {sections.map((section) => (
              <li key={section} className="nav-item">
                <Link
                  activeClass="active-link"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link text-danger"
                  style={{ cursor: "pointer", transition: "0.3s" }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
