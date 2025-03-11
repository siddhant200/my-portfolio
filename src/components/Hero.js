import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="fade-in">I love to create</h1>
        <h1 className="fade-in">beautiful and</h1>
        <h1 className="fade-in">efficient websites</h1>
        <div className="hero-buttons">
          {/* Updated Discover Button */}
          <button className="btn primary" onClick={() => scrollToSection("projects")}>
            Discover
          </button>
          
          <button className="btn secondary" onClick={() => scrollToSection("contact")}>
            <i className="fas fa-user"></i> Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
