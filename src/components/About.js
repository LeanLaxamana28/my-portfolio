import React from "react";

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="display-5 mb-4 text-danger">About Me</h2>
        <p className="lead mx-auto text-dark" style={{ maxWidth: "700px" }}>
          I’m Lean, a web developer passionate about building responsive and modern web applications.
          I love creating interfaces that are both functional and visually appealing.
        </p>
      </div>
    </section>
  );
}

export default About;
