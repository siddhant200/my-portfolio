import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Siddhant Kadam. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
