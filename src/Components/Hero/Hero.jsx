import React from "react";
import './Hero.css';
import Iphone from "../Iphone/Iphone";

const Hero = ({linkedIn, GitHubProfile}) => {
    return (
        <div className="hero">
            <div className="hero-info">
                <h3 className="salutations">WELCOME! My name is</h3>
                <h1 className="name">Anthony Dampier</h1>
                <h2 className="title">I'm a Developer and Project Manager</h2>
                <p>with multi-dimensional skill-set to the forefront of Salesforce consulting and development. With a strong background in Salesforce Software Development, React JS Application Development, Solution Management, and DevOps, I have delivered innovative and effective solutions for various clients at Digital Mass, a leading Salesforce consulting firm. Some of my notable achievements include:</p>
                <p>Developing and deploying a custom Salesforce app for a large education client, using Lightning Web Components, Tailwind CSS, and HTML5, resulting in improved user experience and functionality.</p>
                <p>Implementing a React JS and Next JS web application for clients, using RESTful APIs, Firebase, and Cloud Functions.</p>
                <p>Managing the end-to-end project lifecycle for multiple Salesforce projects, from scoping and planning to testing and deployment, using agile methodologies, tools, and best practices, ensuring quality, efficiency, and customer satisfaction.</p>
                <button className="about-me">Check out my resume! CLICK HERE!!</button>
                <div className="hero-links">   
                    <a href={GitHubProfile} class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href={linkedIn} class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="hero-image">
                <img src="../Assets/ProfilePhoto.jpeg" alt="Hero"/>
            </div>
            <div className="hero-phone">
                <Iphone />
            </div>
        </div>
    );
}

export default Hero;