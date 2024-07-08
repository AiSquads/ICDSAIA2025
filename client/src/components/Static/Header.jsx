import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logos/Office.png";
import menuIcon from "../../assets/images/icons/menu.png";
import closeIcon from "../../assets/images/icons/close.png";
import Toparrow from "../../assets/images/icons/top-arrow.png";

import "../../assets/css/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navs">
        <div className="logodiv">
          <div className="logo">
            <img src={logoImg} alt="Office Logo" className="logo_img" />
          </div>
        </div>

        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav_list">
            <li className="items">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="items">
              <Link to="/comm" onClick={closeMenu}>
                Committee
              </Link>
            </li>
            <li className="items">
              <Link to="/call" onClick={closeMenu}>
                Call for Papers
              </Link>
            </li>
            <li className="items">
              <Link to="/keynote" onClick={closeMenu}>
                Keynote
              </Link>
            </li>
            <li className="items dropdown">
              <div className="nav_dropdown">
                <a href="#">Submission</a>
                <img
                  src={Toparrow}
                  alt="Toparrow"
                  className="arrow_icon"
                  width={18}
                />
              </div>
              <ul>
                <li>
                  <Link to="/submission" onClick={closeMenu}>
                    Submission
                  </Link>
                </li>
                <li>
                  <Link to="/publication" onClick={closeMenu}>
                    Publication
                  </Link>
                </li>
                <li>
                  <Link to="/registration" onClick={closeMenu}>
                    Registration
                  </Link>
                </li>
              </ul>
            </li>

            <li className="items dropdown">
              <div className="nav_dropdown about_navitem">
                <a href="#">About</a>
                <img
                  src={Toparrow}
                  alt="Toparrow"
                  className="arrow_icon"
                  width={18}
                />
              </div>
              <ul>
                <li>
                  <Link to="/dwnld" onClick={closeMenu}>
                    Download
                  </Link>
                </li>
                <li>
                  <Link to="/accom" onClick={closeMenu}>
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={closeMenu}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/gobi" onClick={closeMenu}>
                    About Gobi
                  </Link>
                </li>
                <li>
                  <Link to="/tectovia" onClick={closeMenu}>
                    Tectovia
                  </Link>
                </li>
              </ul>
            </li>
            <li className="items">
              <Link to="/venue" onClick={closeMenu}>
                Venue
              </Link>
            </li>
            <li className="items">
              <a href="/date" onClick={closeMenu}>
                Dates
              </a>
            </li>
            <li className="items">
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="line" onClick={toggleMenu}>
          <img id="icon" className="menu" src={menuIcon} alt="Menu Icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
