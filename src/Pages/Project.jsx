import React from "react";
import "./Project.css";
import Image1 from "../assets/img/webpage.png"; 
import Image3 from "../assets/img/Ella's Cakes.png"; 
import Image4 from "../assets/img/myprofile.png"; 


function Project() {
  const projects = [
    {
      myImage: Image1,
      title: "DALSE Technology Hub LTD",
      description:
        "A modern and responsive website for a technology and web development business.",
      technologies: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      myImage: Image3,
      title: "Ella's Cakes & Pastries",
      description:
        "A beautiful business website designed for a cake and pastry brand to showcase its products and services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
    {
      myImage: Image4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website designed to showcase my skills, projects, experience, and contact information.",
      technologies: ["React", "CSS", "JavaScript"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY WORK</p>
          <h2>Recent Projects</h2>
          <span>
            Here are some of the projects I've worked on while developing my
            skills and exploring different technologies.
          </span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <span> <img src={project.myImage} alt="Project" /></span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex}>{technology}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;