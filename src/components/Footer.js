import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_TITLE } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer large-padding">
      <div className="container footer-container">
        <div className="footer-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom text-center">
          <p>
            © {`${currentYear} ${PROJECT_TITLE}`}{" "}
            <Link to="/privacy">Privacy Policy</Link>
            &nbsp;All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
