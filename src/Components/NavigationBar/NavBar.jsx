import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { FaBeer } from "react-icons/fa"; // Just an example icon

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          {/* You can put an <img> tag here for your logo or use text */}
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <ul className="nav-menu">
          {/* List your nav items here */}
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ContactMe" className="nav-links">
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutMe" className="nav-links">
              AboutMe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Network" className="nav-links">
              Network
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ProfessionalResources" className="nav-links">
              Professional Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
