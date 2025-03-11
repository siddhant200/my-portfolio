import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Siddhant Kadam. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/siddhant200" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/siddhant-kadam-459b85348/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:kadamsiddhant222@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
