import React from "react";

function Skills() {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Django", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Git & GitHub", level: "Advanced" },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 mb-5 text-center text-danger">Skills</h2>
        <div className="row g-4 justify-content-center">
          {skills.map(skill => (
            <div key={skill.name} className="col-md-4">
              <div className="card shadow-sm border-danger h-100 text-center p-3">
                <h5 className="card-title text-danger">{skill.name}</h5>
                <p className="card-text text-dark">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
