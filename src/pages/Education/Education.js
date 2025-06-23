import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircleDot } from "react-icons/fa6";
import { Zoom } from 'react-awesome-reveal';

const Education = () => {
  return (
    <>
    <div className="education-container" id="education">
      <div className="education-title">
        <h2>Education</h2>
      </div>

        <Zoom duration={1000}>
        <div className="education-timeline">
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1e1e2c', color: '#e0b504' }}
    contentArrowStyle={{ borderRight: '7px solid  #1e1e2c' }}
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaCircleDot />}
  >
    <div className="custom-date">2020 - 2025</div>
    <h3 className="vertical-timeline-element-title">Bsc. Electronic and Computer Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Lagos State University, Nigeria.</h4>
    <p style={{ color: 'white' }}>
      Graduated with Second Class Upper Division Honors.
    </p>
    <p>
      <h5>Relevant Coursework:</h5>
      <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
        <li>Software Engineering Fundamentals</li>
        <li>Computer Programming</li>
        <li>Computer Architecture</li>
        <li>Algorithms and Data Structures</li>
        <li>Systems Programming</li>
        <li>Machine and Assembly Language Programming</li>
        <li>Digital Electronics</li>
        <li>Digital Computer Design</li>
        <li>Microprocessors & Microcomputers</li>
        <li>Database Management</li>
        <li>Computer Networks</li>
        <li>Information Theory & Coding</li>
        <li>Numerical Methods in Engineering</li>
        <li>Technical Communication</li>
        </ul>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1e1e2c', color: '#e0b504' }}
    contentArrowStyle={{ borderRight: '7px solid  #1e1e2c' }}
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<FaCircleDot />}
  >
    <div className="custom-date">2023 - 2024</div>
    <h3 className="vertical-timeline-element-title">FullStack Web Development</h3>
    <h4 className="vertical-timeline-element-subtitle">GOMYCODE Academy</h4>
    <p style={{ color: 'white' }}>
      This course taught comprehensively various technical skills important
      in frontend web development, database-backed development APIs and web applications.
    </p>
    <p>
      <h5>Relevant Coursework:</h5>
      <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
        <li>HTML, CSS and JavaScript</li>
        <li>Responsive Web Design</li>
        <li>Object-Oriented Programming</li>
        <li>Web Accessibility</li>
        <li>Test-driven development</li>
        <li>Working with APIs</li>
        <li>Working with several frameworks (among others)</li>
        <li>SQL and Data Modelling for the Web</li>
        <li>API Development and Documentation</li>
        <li>Server Deployment, Containerization and Testing</li>
        </ul>
    </p>
  </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </Zoom>
      
    </div>
    </>
  )
}

export default Education;
