import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-danger text-white text-center">
      <div className="container">
        <h2 className="display-5 mb-4">Contact Me</h2>
        <p className="lead mb-4">
          I’m always open to discussing new projects or opportunities.
        </p>
        <a href="mailto:leanlaxamana28@example.com" className="btn btn-light btn-lg">
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
