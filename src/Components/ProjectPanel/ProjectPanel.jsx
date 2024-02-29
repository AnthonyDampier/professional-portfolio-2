import React from 'react';
import GitActivity from "../../Components/GitActivity/GitActivity";
import './ProjectPanel.css';

const ProjectPanel = () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description of Project 1', url: '' },
        { id: 2, title: 'Project 2', description: 'Description of Project 2', url: '' },
        { id: 3, title: 'Project 3', description: 'Description of Project 3', url: '' },
        { id: 4, title: 'Project 4', description: 'Description of Project 4', url: '' },
        { id: 5, title: 'Project 5', description: 'Description of Project 5', url: '' },
        { id: 6, title: 'Project 6', description: 'Description of Project 6', url: '' },
        { id: 7, title: 'Project 7', description: 'Description of Project 7', url: '' }
    ];

    const featuredProject = { id: 0, title: 'Featured Project', description: 'Description of Featured Project', url: '' };
    
    return (

        <div className='project-panel'>
            <div className='feature-section'>
                <GitActivity username="AnthonyDampier"/>
                <div key={-1} className="feature-grid-item">
                    <h3>{featuredProject.title}</h3>
                    <p>{featuredProject.description}</p>
                </div>
            </div>
            
            <div className='grid-container'>
            {projects.size >= 2 ? (<p>`Find More &gt;`</p>) : (<></>)}
            {projects.splice(0, 6).map((project, index) => (
                <div key={project.id} className="grid-item">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
            
            </div>
        </div>

    );
}

export default ProjectPanel;