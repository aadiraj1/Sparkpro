import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/icon";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const toggleNavbar = () => {
    setNavOpen((prev) => !prev);
    if (isDropdownOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 991) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const closeMenus = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setNavOpen(false);
      setDropdownOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenus);
    return () => document.removeEventListener("mousedown", closeMenus);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <span>SparkPro</span> <span className="SDt">.Details</span>
        </Link>
        <a className="avz" href="tel:+923105555027">Click here to Call Now</a>


        <button
          className={`navbar-toggler ${isNavOpen ? "active" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        

        <div className={`navbar-links ${isNavOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${isDropdownOpen ? "active" : ""}`}
              onClick={toggleDropdown}
              onMouseEnter={() =>
                window.innerWidth > 991 && setDropdownOpen(true)
              }
              onMouseLeave={() =>
                window.innerWidth > 991 && setDropdownOpen(false)
              }
              ref={dropdownRef}
            >
              <span className="nav-link">Services</span>
              <ul className="drop-menu">
                <li>
                  <Link
                    className="drop-item"
                    to="/services/ppf"
                    onClick={handleNavLinkClick}
                  >
                    PPF
                  </Link>
                </li>
                <li>
                  <Link
                    className="drop-item"
                    to="/services/ceramic-coating"
                    onClick={handleNavLinkClick}
                  >
                    Ceramic Coating
                  </Link>
                </li>
                <li>
                  <Link
                    className="drop-item"
                    to="/services/detailing"
                    onClick={handleNavLinkClick}
                  >
                    Car Detailing
                  </Link>
                </li>
                <li>
                  <Link
                    className="drop-item"
                    to="/services/glass-coating"
                    onClick={handleNavLinkClick}
                  >
                    Glass Coating
                  </Link>
                </li>
                <li>
                  <Link
                    className="drop-item"
                    to="/services/chromic-rims"
                    onClick={handleNavLinkClick}
                  >
                    Chromic Rims
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/appointment"
                onClick={handleNavLinkClick}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
