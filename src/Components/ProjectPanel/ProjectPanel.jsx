import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const fetchEventsContributions = async () => {
            setLoading(true);
            try {
                setRepoSet(await getUserRepositories(username, process.env.REACT_APP_GITHUB_TOKEN));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventsContributions();
    }, [username]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='project-panel'>
            <div className='feature-section'>
                <GitActivity username={username} />
                <div className='grid-container'>
                    {repoSet.length !== 0 ? (
                        repoSet.map((repoName, index) => (
                            <div key={index} className="grid-item">
                                <Microlink
                                    url={`https://github.com/${username}/${repoName}/`}
                                    lazy={{ threshold: 0.01 }}
                                    media='auto'
                                    size='medium'
                                />
                            </div>
                        ))
                    ) : (
                        <div>No repositories found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPanel;