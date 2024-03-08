import React from "react";
import './Resume.css';

const Resume = () => {
    return (
        <div className="about-me-page">
            <div className="Resumes">
                <embed className="resume" src="../Assets/AnthonyDampierResumeDeveloper.pdf" type="application/pdf" width="100%" height="100%"/>
            </div>
        </div>
    );
}   

export default Resume;