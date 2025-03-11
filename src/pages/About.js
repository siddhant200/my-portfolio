import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="fade-in">About Me</h2>
        <p className="para fade-in">
          Hi there, I'm <span className="highlight">Siddhant</span>,<br />
          I am a passionate <strong>Full Stack Java Developer</strong> with experience in building scalable and efficient web applications. <br />
          Skilled in <span className="highlight">Java, Spring Boot, React.js, and SQL</span>, I specialize in crafting seamless user experiences and robust backend systems. <br />
          I thrive on solving complex problems, optimizing performance, and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.
        </p>
      </div>
    </section>
  );
};

export default About;
