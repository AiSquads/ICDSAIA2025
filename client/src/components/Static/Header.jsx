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
              <Link to="/">Home</Link>
            </li>
            <li className="items">
              <Link to="/comm">Committee</Link>
            </li>
            <li className="items">
              <Link to="/call">Call for Papers</Link>
            </li>
            <li className="items">
              <Link to="/keynote">Keynote</Link>
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
                  <Link to="/submission">Submission</Link>
                </li>
                <li>
                  <Link to="/publication">Publication</Link>
                </li>
                <li>
                  <Link to="/registration">Registration</Link>
                </li>
              </ul>
            </li>
            <li className="items">
              <Link to="/venue">Venue</Link>
            </li>
            <li className="items">
              <a href="/date">Dates</a>
            </li>
            <li className="items dropdown">
              <div className="nav_dropdown">
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
                  <Link to="/dwnld">Download</Link>
                </li>
                <li>
                  <Link to="/accom">Accommodation</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/gobi">About Gobi</Link>
                </li>
                <li>
                  <Link to="/tectovia">Tectovia</Link>
                </li>
              </ul>
            </li>
            <li className="items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="line" id="line" onClick={toggleMenu}>
          <img
            id="icon"
            className="menu"
            src={menuOpen ? closeIcon : menuIcon}
            alt="Menu Icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
