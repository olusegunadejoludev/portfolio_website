import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container d-flex flex-column justify-content-center align-items-center">
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear()}
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/adejoluolusegun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olusegun Adejolu
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
