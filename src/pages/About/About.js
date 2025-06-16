import React from 'react';
import './About.css';
import { Zoom } from 'react-awesome-reveal';
import { FcNext } from "react-icons/fc";

const About = () => {
  return (
    <div className="col-md-6 col-xl-6 col-xl-10 about-container" id="about">
      <div className="about-title">
        <h2>About Me</h2>
        <p>
          I am a passionate learner with a background in Electronic and Computer Engineering. 
          My academic experience has honed my ability to approach
          challenges from a logical and systematic perspective. I thrive on
          challenges and love exploring new technologies, constantly seeking to
          push the boundaries of what I can create.
        </p>
      </div>
      
      
      <div className="about-row">
        <Zoom duration={1000}>
        <div className="about-img">
          <img src="./brain.png" alt="Profile Pic" />
        </div>
        </Zoom>
      
        <Zoom direction='right' duration={1000}>
        <div className="about-text">
          <h3>Full Stack Developer</h3>
          <p>
            Dedicated and motivated Full Stack Developer with a passion for
            creating innovative and user-friendly websites. Skilled in front-end
            development with proficiency in HTML, CSS, JavaScript and backend
            development using the MERN stack. Seeking to utilize my coding
            expertise and problem-solving skills to contribute to a dynamic and
            collaborative team in a fast-paced environment.
          </p>

          <div className="about-info">
            <div>
              <ul>
                <li>
                  <i><FcNext/></i>
                  <strong>Birthday:</strong>
                  <span> July 17th</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>Degree:</strong>
                  <span> Bsc. Computer Engineering</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>Phone:</strong>
                  <span className="phone"> +2347066836656</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>City:</strong>
                  <span> Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <i><FcNext/></i>
                  <strong>Freelance:</strong>
                  <span> Available</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>Language:</strong>
                  <span> English, Yoruba</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>Email:</strong>
                  <span> olusegunadejolu@gmail.com</span>
                </li>
                <li>
                  <i><FcNext/></i>
                  <strong>Work:</strong>
                  <span> Full Stack Developer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </Zoom>

      </div>
    </div>
  );
};

export default About;
