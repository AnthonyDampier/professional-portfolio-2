import React from "react";
import './Home.css';

// components
import Hero from "../../Components/Hero/Hero";

// links
const linkedIn = "https://www.linkedin.com/in/anthonydampier/";
const GitHubProfile = "https://github.com/AnthonyDampier";

const home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Hero 
            linkedIn={linkedIn} 
            GitHubProfile = {GitHubProfile}/>
        {/* Hero w/ 
            1. call to action to about me page 
            2. Technical central image or persons page
            3. IPhone mock up of about me with working links (Linked, GitHub, Resources*/}
        {/* GitHub Activity Block */}
        {/* Project of 6 project complete and to complete 
            1. Project LINK
            2. GitHub Activity Block*/}
        {/* Scroll Wheel of Clients I've worked with */}
        {/* Scroll Wheel of Skills */}
        </div>
    );
}

export default home;