// components/PortfolioCard.jsx
import React from "react";

const ProjectCard = ({ title, image, alt, demoLink, codeLink }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title fw-bold fs-3 d-flex justify-content-center">
        {title}
      </h5>
    </div>
    <div className="p-card-img">
      <img src={image} alt={alt} />
      <div className="portfolio-hover-options">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
