import React from "react";
import './Hero.css';
import Iphone from "../Iphone/Iphone";

const Hero = ({linkedIn, GitHubProfile}) => {
    return (
        <div>
            <div className="hero">
                <h1 className="name">Anthony Dampier</h1>
                <h2 className="title">Developer / Project Manager</h2>
                <p>Talk about me</p>
                <button className="about-me">Learn More</button>
                <div>   
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn"/></a>
                    <a href={GitHubProfile} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub"/></a>
                </div>
            </div>
            <img src="https://via.placeholder.com/300" alt="Hero"/>
            <Iphone />
        </div>
    );
}

export default Hero;