import React, { useEffect, useState } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/LeanLaxamana28/repos")
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-5 text-center mb-5 text-danger">Projects</h2>
        <div className="row g-4">
          {repos.map(repo => (
            <div key={repo.id} className="col-md-4">
              <div className="card h-100 shadow-sm border-danger">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-danger">{repo.name}</h5>
                  <p className="card-text flex-grow-1 text-dark">{repo.description || "No description"}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn-danger btn-sm">
                      GitHub
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn btn-success btn-sm">
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
