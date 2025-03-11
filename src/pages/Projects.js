import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Pet Store Management",
    description: "An online platform for pet adoption and pet store management.",
    technologies: "Spring Boot, Java, MySQL",
    link: "#",
  },
  {
    title: "BooksForYou",
    description: "A book-selling website with a seamless shopping experience.",
    technologies: "Spring Boot, Java, JavaScript, HTML, CSS, Bootstrap",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A simple and efficient task management application.",
    technologies: "React, Node.js, MongoDB, Express",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    technologies: "React, HTML, CSS, JavaScript",
    link: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div className="content">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">Here are some of my recent works.</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech-stack">{project.technologies}</span>
            <a href={project.link} className="btn">View Project</a>
          </div>
        ))}
      </div>
      </div>
    </section>
    
  );
}

export default Projects;
