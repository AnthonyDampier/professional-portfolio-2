import React, {useState} from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import './IphoneNav.css';


const IphoneNav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
        return (
            <nav className="iphone navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        {/* You can put an <i> tag here for your menu icon */}
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                        <RxHamburgerMenu />
                    </div>
                    <div className="logo">
                    {/* You can put an <img> tag here for your logo or use text */}
                    <a href="https://github.com/AnthonyDampier" target="_blank" rel="noreferrer">
                        <img className="GitHub logo-img" src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg" alt="GitHub-Logo" />
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
                            Resources
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}

export default IphoneNav;