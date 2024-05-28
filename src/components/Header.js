import React, { useEffect, useState } from "react";
import { PROJECT_TITLE, images } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  });

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const closemenu = () => {
    setOpenMenu(false);
  };
  return (
    <header className="header">
      {openMenu && <div className="header-overlay" onClick={closemenu}></div>}
      <div className="container header-container">
        <div className="logo">
          <img src={images.logo} alt={PROJECT_TITLE} />
        </div>
        <div className="menu-trigger" onClick={handleMenuClick}>
          <svg
            role="img"
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="14" width="26" height="2" fill=""></rect>
            <rect y="7" width="26" height="2" fill=""></rect>
            <rect width="26" height="2" fill=""></rect>
          </svg>
        </div>
        <div className="header-menu">
          <nav>
            <ul className="level-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="cta-group">
            <button>Sign In</button>
            <button className="secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
