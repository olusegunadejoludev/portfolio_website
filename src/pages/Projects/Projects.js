import React from 'react';
import './Projects.css';
import ProjectCard from "../../components/ProjectCard.jsx";
import portfolioProjects from "../../utilies/portfolioProjects.js";
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
      <>
      <div className="section-container projects-container" id="projects">
        <div className='projects-title'>
          <h2>Projects</h2>
        </div>

        <Zoom duration={1000}>
    <div className="portfolio-wrap">
      {portfolioProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
        </Zoom>
    </div>
    </>
  );
};

export default Projects;
