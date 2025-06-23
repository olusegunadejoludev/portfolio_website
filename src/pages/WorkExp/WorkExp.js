import React from 'react';
import './WorkExp.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircleDot } from "react-icons/fa6";
import { Zoom } from 'react-awesome-reveal';

const WorkExp = () => {
  return (
    <>
    <div className="work-exp-container" id="work">
      <div className="work-exp-title">
        <h2>Work Experience</h2>
      </div>

      <Zoom duration={1000}>
      <div className="work-exp-timeline">
            <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1e1e2c', color: '#e0b504' }}
          contentArrowStyle={{ borderRight: '7px solid  #1e1e2c' }}
          iconStyle={{ background: '#1e1e2c', color: '#fff' }}
          icon={<FaCircleDot />}
        >
          <div className="custom-date">November 2024 – Present</div>
          <h3 className="vertical-timeline-element-title">Frontend Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Freelancer – (Contract Roles)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Developed user interfaces for web applications using React.js, HTML, CSS, and JavaScript.</li>
              <li>Designed intuitive UI features that improved navigation and overall user experience.</li>
              <li>Built reusable components to streamline development and increase project efficiency.</li>
              <li>Enhanced site performance by optimizing code, reducing page load times, and improving responsiveness.</li>
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
          <div className="custom-date">November 2023 – November 2024</div>
          <h3 className="vertical-timeline-element-title">Full Stack Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">GOMYCODE Academy – (Remote)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Collaborated with architecture teams to design and implement scalable solutions.</li>
              <li>Developed and deployed responsive web applications in line with design requirements.</li>
              <li>Assisted senior developers in writing efficient and scalable code.</li>
              <li>Implemented dynamic features that improved user engagement by 20%.</li>
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
          <div className="custom-date">August 2023 – January 2024</div>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern (Frontend)</h3>
          <h4 className="vertical-timeline-element-subtitle">NSIA Insurance Limited – (On-Site)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Developed dynamic web interfaces with React.js and TypeScript.</li>
              <li>Collaborated with designers to implement creative and user-friendly UI solutions.</li>
              <li>Conducted code reviews to maintain high-quality standards.</li>
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
          <div className="custom-date">May 2023 – July 2023</div>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern (Frontend)</h3>
          <h4 className="vertical-timeline-element-subtitle">Doyen Emerging Technologies Engineering Limited – (Hybrid)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Developed responsive and interactive websites using HTML, CSS, and JavaScript.</li>
              <li>Conducted rigorous testing to ensure optimal performance across devices.</li>
              <li>Mentored aspiring software engineers in fundamental programming concepts, data structures, and problem-solving.</li>
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

export default WorkExp;
