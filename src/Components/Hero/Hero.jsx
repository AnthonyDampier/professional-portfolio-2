import React from "react";
import { Link } from "react-router-dom";
import './Hero.css';
import Iphone from "../Iphone/Iphone";

const Hero = ({linkedIn, GitHubProfile}) => {
    return (
        <div className="hero">
            <div className="hero-info">
                <h3 className="salutations">WELCOME! My name is</h3>
                <h1 className="name">Anthony Dampier</h1>
                <h2 className="title">I'm a Developer</h2>
                <p>
                    An accomplished professional with a blend of skills in Web Development and Project Management, I, Anthony Dampier, offer a unique combination of technical expertise and strategic vision. 
                </p>
                <p>
                My journey has brought me to many placing and to learn many thing. From leading Salesforce application development at Digital Mass, from orchestration of full-stack projects at Prime Digital Academy showcases my ability to deliver innovative solutions, from the U.S. Marine Corps; leading Marines as Sergeant, has fine-tuned my leadership, strategic problem-solving, and adaptability.
                </p>
                <p>
                With a robust command over modern web technologies and Salesforce, coupled with a proven track record in project management, I am ready to drive growth and technological innovation in your organization.
                </p>
                <button className="about-me"><Link to="/Resume" className="link-btn">Check out my resume! CLICK HERE!!</Link></button>
                <div className="hero-links">   
                    <a href={GitHubProfile} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={linkedIn} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src="../Assets/19 Medium.jpeg" alt="Hero"/>
            </div>
            <div className="hero-phone">
                <Iphone />
            </div>
        </div>
    );
}

export default Hero;