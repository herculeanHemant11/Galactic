import React, { useEffect, useRef, useState } from "react";
import { PROJECT_TITLE, SUPPORTED_LANG, images } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const langSwitcherRef = useRef(null);
  const selectedLanguage = useSelector((store) => store.config.lang);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  }, [openMenu]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langSwitcherRef.current &&
        !langSwitcherRef.current.contains(event.target)
      ) {
        langSwitcherRef.current.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const closemenu = () => {
    setOpenMenu(false);
  };
  const handleLanguageMenu = () => {
    const langMenu = document.querySelector(".lang-switcher");
    langMenu.classList.toggle("active");
  };
  const handleLanguageSwitcher = (event) => {
    const langMenu = document.querySelector(".lang-switcher");
    langMenu.classList.remove("active");
    const langValue = event.target.getAttribute("data-value");
    dispatch(changeLanguage(langValue));
    document.documentElement.lang = langValue;
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
                <Link to="/" onClick={closemenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closemenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closemenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="cta-group">
            <div className="lang-switcher" ref={langSwitcherRef}>
              <div className="lang-icon" onClick={handleLanguageMenu}>
                Svg
              </div>
              <ul>
                {SUPPORTED_LANG.map((lang) => {
                  return (
                    <li
                      key={lang.identifier}
                      onClick={
                        selectedLanguage === lang.identifier
                          ? null
                          : handleLanguageSwitcher
                      }
                      data-value={lang.identifier}
                      className={
                        selectedLanguage === lang.identifier ? "active" : ""
                      }
                    >
                      {lang.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button>Sign In</button>
            <button className="secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
