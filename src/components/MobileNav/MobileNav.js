import React, {useState} from 'react';
import './MobileNav.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { HiAcademicCap } from "react-icons/hi2";
import { FcWorkflow } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
      //handle
    const handleOpen = () => {
        setOpen(!open);
    };

    //handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  }

  return (
    <div className='mobile-nav'>
      <div className="mobile-nav-header">
            {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen}/>) :
            (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
        
        <span className='mobile-nav-title'></span>
      </div>
      {open && (
          <div className="mobile-nav-menu">
        <div className="nav-items">
          <div className="social-icons">
            <a href="https://github.com/olusegunadejoludev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/adejoluolusegun" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/brainyshegs" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://instagram.com/brainyshegs" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
                    <div className="nav-item">
                      <div className="nav-link">
                        <Link to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}
                        onClick={handleMenuClick}
                        >
                        <FcHome />
                        Home
                        </Link>
                        </div>
        
                      <div className="nav-link">
                        <Link to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}
                        onClick={handleMenuClick}
                        >
                        <FcAbout />
                        About
                        </Link>
                        </div>
        
                        <div className="nav-link">
                          <Link to="work" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100}
                        onClick={handleMenuClick}
                        >
                        <FcBusinessman />
                        Work Experience
                        </Link>
                        </div>
        
                        <div className="nav-link">
                          <Link to="stack" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100} 
                        onClick={handleMenuClick}
                        >
                          <FcSupport />
                        Tech Stack
                        </Link>
                        </div>
        
                        <div className="nav-link">
                          <Link to="education" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100} 
                        onClick={handleMenuClick}
                        >
                          <HiAcademicCap />
                        Education
                        </Link>
                        </div>
        
                        <div className="nav-link">
                          <Link to="projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100} 
                        onClick={handleMenuClick}
                        >
                          <FcWorkflow />
                        Projects
                        </Link>
                        </div>
        
                        <div className="nav-link">
                          <Link to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={100} 
                        onClick={handleMenuClick}
                        >
                          <FcBusinessContact />
                        Contact
                        </Link>
                        </div>
        
                    </div>
                  </div>
        </div>
      )}
      
    </div>
  )
}

export default MobileNav
