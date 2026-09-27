import React from "react";
import "./About.css";
import myimage from "../assets/img/Ayanfe CEO.png"

function About() {
  return (
    <section className="about" >
      <div className="about-container">

        <div className="about-image">
            <img src={myimage} alt="AYANFE" />
      
        </div>

        <div className="about-content">
          <p className="about-subtitle">ABOUT ME</p>

          <h2>
            I'm a Passionate <span>Software Developer</span>
          </h2>

          <p className="about-text">
            I'm a Computer Science student and aspiring software developer
            passionate about building modern, responsive, and user-friendly
            websites and applications.
          </p>

          <p className="about-text">
            I enjoy turning ideas into functional digital experiences while
            continuously improving my skills in web development and modern
            technologies.
          </p>

          <div className="about-info">
            <div>
              <strong>Name:</strong>
              <span>Ogungbeje Ayanfe Adesola</span>
            </div>

            <div>
              <strong>Role:</strong>
              <span>Software Developer</span>
            </div>

            <div>
              <strong>Specialization:</strong>
              <span>Web Development</span>
            </div>

            <div>
              <strong>Education:</strong>
              <span>Computer Science</span>
            </div>
          </div>

          {/* <div className="about-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>

            <a href="#projects" className="btn secondary-btn">
              View Projects
            </a>
          </div> */}
        </div>

      </div>
    </section>
  );
}

export default About;