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
          <div className="custom-date">November 2025 – August 2026</div>
          <h3 className="vertical-timeline-element-title">Application Support Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">IBADAN Electricity Distribution Company – (NYSC Internship)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Provided first-line and second-line application support for internal web and mobile systems,
              ensuring timely resolution of incidents, bugs and user-reported 
              issues to maintain system availability and reliability.
              </li>
              <li>Worked closely with IT operations, network and business users to gather requirements,
                support system enhancements and ensure applications aligned with IBEDC operational workflows.
              </li>
              <li>Monitored application performances, identified recurring issues and collaborated with 
                development team to implement fixes and preventive solutions, reducing 
                downtime and improving user experience by 30%.
              </li>
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
          <div className="custom-date">June 2025 – August 2025</div>
          <h3 className="vertical-timeline-element-title">Mobile Application Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">BINCOM Dev Center – (Internship)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Designed and deployed an incident reporting mobile application using React,
              wrapped with Capacitor–Cordova for native Android deployment, 
              alongside high-performance web applications built with Next.js and TypeScript.
              </li>
              <li>Participated in code reviews to drive efficiency and performance improvements,
                resulting in up to 20% load times.
              </li>
              <li>Built and deployed modern, responsive user interface websites with React.js, HTML, CSS,
                Angular.js and JavaScript, ensuring cohesive user experience.
              </li>
              <li>Collaborated closely with team members to implement secure application modules by integrating
                authentication systems and third-party API services, ensuring robust, end-to-end functionality.
              </li>
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
              <li>Designed, developed, and deployed an e-commerce platform with 
                advanced cart functionality, secure user authentication, 
                and integrated payment systems, boosting user engagement and lowering operational costs by 15%.
              </li>
              <li>Built and optimized responsive web applications aligned with design specifications, 
                improving platform accessibility and reducing UI inconsistencies by 30%.
              </li>
              <li>Collaborated with senior developers to refine backend and frontend codebases,
                enhancing performance and reducing server response times by 20%.
              </li>
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
          <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">NSIA Insurance Limited – (On-Site)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Collaborated closely with the senior developers to build the NSIA Inventory Portal 
                to facilitate staff items requests from the admin department, 
                ensured the website bugs were fixed boosting user satisfaction by 40%.
              </li>
              <li>Worked closely with the senior developers in bringing the NSIA Mobile App to live, 
                performed usability tests to identify bugs, fixed UI errors, 
                tested the API and payment processing integrations to ensure the 
                optimization of user-centric design thereby boosting customers 
                engagement and task completion rates by 30%.
              </li>
              <li>Performed in-depth code reviews and enforced best practices, 
                resulting in a 15% reduction in post-deployment issues and 
                improved team delivery efficiency.
              </li>
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
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Doyen Emerging Technologies Engineering Limited – (Hybrid)</h4>
          <p>
            <ul style={{ fontStyle: 'italic', fontWeight: '400', color: 'white'}}>
              <li>Developed and deployed responsive, interactive websites using HTML, CSS, and JavaScript, 
                enhancing user engagement 
                and mobile accessibility.
              </li>
              <li>Conducted rigorous testing to ensure optimal performance 
                across devices reducing user-reported issues by 30%.
              </li>
              <li>Mentored junior developers in programming fundamentals, data structures, 
                and problem-solving, improving their project completion rate and code quality.
              </li>
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
