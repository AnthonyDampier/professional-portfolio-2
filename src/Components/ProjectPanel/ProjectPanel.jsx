import React, {useEffect, useState} from 'react';
import Microlink from '@microlink/react';
import GitActivity from "../../Components/GitActivity/GitActivity";
import getUserRepositories from '../../Utils/GetUserRepositories/GetUserRepositories.jsx';
import './ProjectPanel.css';

const ProjectPanel = () => {
    const [username, setUsername] = useState('AnthonyDampier');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [repoSet, setRepoSet] = useState([]);

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

    // const [githubToken, setGithubToken] = useState(env.REACT_APP_GITHUB_TOKEN);
    let githubToken = process.env.REACT_APP_GITHUB_TOKEN;
     // Load environment variables from .env file
    const fetchEventsContributions = async () => { 
        setLoading(true);
        try {
            setRepoSet(await getUserRepositories(username, process.env.REACT_APP_GITHUB_TOKEN));
        } catch (error) {
            setError(error.message);
        } finally {
            console.log(repoSet);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchEventsContributions();

    }, [username, githubToken]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (

        <div className='project-panel'>
            <div className='feature-section'>
                <GitActivity username="AnthonyDampier"/>
                <div className='grid-container'>
                {repoSet.length !== 0 ? 
                            repoSet.map((repoName, index) => (
                                <div key={index} className="grid-item">
                                    <Microlink url={`https://github.com/${username}/${repoName}/`}
                                        lazy={{ threshold: 0.01 }}
                                        media='auto'
                                        size='medium'
                                    />
                                </div>
                            )) 
                            : ( loading ? <div>`Loading...`</div> : (<div>`Error: ${error}`</div>))
                        }           
                        </div>
                    </div>
        </div>

    );
}

export default ProjectPanel;