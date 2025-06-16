import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import { FcAddressBook } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import Resume from '../../assets/docs/Olusegun Adejolu CV - 01.pdf';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <Fade direction='right' duration={1000} triggerOnce>
          <h1>Olusegun Adejolu <span role='img' aria-label='computer'>👨‍💻</span></h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Software Engineer.',
                          'Full-Stack Web Developer.',
                          'I Enjoy Solving Problems and Creating Solutions.',
                          'I am Passionate about Technology and Innovation.',
                          'Lets Build Something Amazing Together!'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </h2>
          </Fade>
          
          <Fade direction='right' duration={1000} triggerOnce>
          <div className="home-buttons">
            <a className="btn btn-hire" 
            href="https://api.whatsapp.com/send?phone=2347066836656&text=Hi%20Olusegun,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            rel='noreferrer'
            target='_blank'
          ><span>Hire Me</span> <FcAddressBook/> </a>
            <a className="btn btn-cv" href={Resume} download="Olusegun_Adejolu_CV.pdf"
          ><span>Resume</span> <FcRules/> </a>
          </div>
          </Fade>
        </div>
      </div> 
    </>
  )
}

export default Home
