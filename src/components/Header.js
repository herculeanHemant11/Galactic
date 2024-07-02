import React, { useEffect, useRef, useState } from "react";
import { PROJECT_TITLE, SUPPORTED_LANG, images } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const langSwitcherRef = useRef(null);
  const selectedLanguage = useSelector((store) => store.config.lang);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        {isMobile && (
          <div className="menu-trigger">
            <div className="lang-switcher" ref={langSwitcherRef}>
              <div className="lang-icon" onClick={handleLanguageMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                  <g
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="36" cy="36" r="28" />
                    <path d="m36 8v56c-8.5604 0-15.5-12.536-15.5-28s6.9396-28 15.5-28 15.5 12.536 15.5 28-6.9396 28-15.5 28" />
                    <path d="m64 36h-56" />
                    <path d="m60 22h-48" />
                    <path d="m60 50h-48" />
                  </g>
                </svg>
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

            <div className="" onClick={handleMenuClick}>
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
          </div>
        )}
        <div className="header-menu">
          <nav>
            <ul className="level-1">
              <li>
                <NavLink to="/" activeClassName="active" onClick={closemenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  onClick={closemenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={closemenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="cta-group">
            {!isMobile && (
              <div className="lang-switcher" ref={langSwitcherRef}>
                <div className="lang-icon" onClick={handleLanguageMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                    <g
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="36" cy="36" r="28" />
                      <path d="m36 8v56c-8.5604 0-15.5-12.536-15.5-28s6.9396-28 15.5-28 15.5 12.536 15.5 28-6.9396 28-15.5 28" />
                      <path d="m64 36h-56" />
                      <path d="m60 22h-48" />
                      <path d="m60 50h-48" />
                    </g>
                  </svg>
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
            )}
            <button>Sign In</button>
            <button className="secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
