import React, {useState} from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar main">
        <div className="navbar-container">
            <div className="menu-icon" onClick={handleClick}>
                {/* You can put an <i> tag here for your menu icon */}
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div className="logo">
            {/* You can put an <img> tag here for your logo or use text */}
            <a href="https://github.com/AnthonyDampier" target="_blank" rel="noreferrer">
                
            </a>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {/* List your nav items here */}
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links">
                    Project
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume" className="nav-links">
                    Resume
                    </Link>
                </li>
                {/*
                <li className="nav-item">
                    <Link to="/AboutMe" className="nav-links">
                    AboutMe
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Network" className="nav-links">
                    Network
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link to="/ProfessionalResources" className="nav-links">
                    Resources
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;
