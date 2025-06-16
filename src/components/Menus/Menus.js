
import React from 'react';
import './Menus.css';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

import {
  FcHome,
  FcAbout,
  FcBusinessman,
  FcSupport,
  FcWorkflow,
  FcBusinessContact
} from "react-icons/fc";
import { HiAcademicCap } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const menuItems = [
  { to: 'home', icon: <FcHome />, label: 'Home' },
  { to: 'about', icon: <FcAbout />, label: 'About' },
  { to: 'work', icon: <FcBusinessman />, label: 'Work Experience' },
  { to: 'stack', icon: <FcSupport />, label: 'Tech Stack' },
  { to: 'education', icon: <HiAcademicCap />, label: 'Education' },
  { to: 'projects', icon: <FcWorkflow />, label: 'Projects' },
  { to: 'contact', icon: <FcBusinessContact />, label: 'Contact' },
];

const Menus = () => {
  return (
    <div className="desktop-only">
      <Zoom>
        <div className="navbar-profile-pic">
          <img src="/brain.png" alt="profile-pic" />
        </div>
      </Zoom>

      <div className="social-icons">
        <a href="https://github.com/olusegunadejoludev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/adejoluolusegun" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/brainyshegs" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://instagram.com/brainyshegs" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <Fade duration={1500} direction='left' triggerOnce>
        <div className="nav-items">
          <div className="nav-item">
            {menuItems.map((item) => (
              <div className="nav-link" key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  {item.icon} {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Menus;
