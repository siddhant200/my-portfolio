import React from "react";
import "../styles/Resume.css";

const resumeFileId = "1yir_cSOm2_z5XxbPQTZNbjj0Wvck2WXK"; // Replace with actual File ID

const resumeViewLink = `https://drive.google.com/file/d/${resumeFileId}/view?usp=sharing`;
const resumeDownloadLink = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">My Resume</h2>
        <p className="resume-description">Take a look at my experience and skills.</p>
        <div className="resume-buttons">
          {/* View Resume Button */}
          <a href={resumeViewLink} target="_blank" rel="noopener noreferrer">
            <button className="btn primary">View Resume</button>
          </a>
          {/* Download Resume Button */}
          <a href={resumeDownloadLink}>
            <button className="btn secondary">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
