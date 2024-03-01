import React from "react";
import './Home.css';

// components
import Hero from "../../Components/Hero/Hero";
import ProjectPanel from "../../Components/ProjectPanel/ProjectPanel";

// links
const linkedIn = "https://www.linkedin.com/in/anthonydampier/";
const GitHubProfile = "https://github.com/AnthonyDampier";

const home = () => {
    return (
        <div>
            <Hero 
                linkedIn={linkedIn} 
                GitHubProfile = {GitHubProfile}
            />
            <ProjectPanel/>
            {/* Project of 6 project complete and to complete 
                1. Project LINK
                2. GitHub Activity Block*/}
            {/* Scroll Wheel of Clients I've worked with */}
            {/* Scroll Wheel of Skills */}
        </div>
    );
}

export default home;