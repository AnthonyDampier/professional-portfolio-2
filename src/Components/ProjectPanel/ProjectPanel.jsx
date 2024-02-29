import React, {useEffect, useState} from 'react';
import Microlink from '@microlink/react';
import GitActivity from "../../Components/GitActivity/GitActivity";
import Loading from "../../Components/Loading/Loading";
import getUserRepositories from '../../Utils/GetUserRepositories/GetUserRepositories.jsx';
import './ProjectPanel.css';

const ProjectPanel = () => {
    const [username, setUsername] = useState('AnthonyDampier');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [repoSet, setRepoSet] = useState([]);

    // Set the loading to true after 2 seconds
    setTimeout(() => {
        if (loading){
            setLoading(false);
        }
    }, 2000); // 2000 milliseconds = 2 seconds


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
        }
    }

    useEffect(() => {
        fetchEventsContributions();

    }, [username, githubToken]);

    if (loading) return <div><Loading/></div>;
    if (error) return <div>Error: {error}</div>;
    
    return (

        <div className='project-panel'>
            <div className='feature-section'>
                <GitActivity username="AnthonyDampier"/>
                <div className='grid-container'>
                {repoSet.length !== 0 && !loading ? 
                            repoSet.map((repoName, index) => (
                                <div key={index} className="grid-item">
                                    <Microlink url={`https://github.com/${username}/${repoName}/`}
                                        lazy={{ threshold: 0.01 }}
                                        media='auto'
                                        size='medium'
                                    />
                                </div>
                            )) 
                            : ( loading ? <div className='loading'>`<Loading/>`</div> : (<div>`Error: ${error}`</div>))
                        }           
                        </div>
                    </div>
        </div>

    );
}

export default ProjectPanel;