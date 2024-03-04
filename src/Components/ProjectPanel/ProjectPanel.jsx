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
    const [displayedRepos, setDisplayedRepos] = useState([]);
    const [page, setPage] = useState(0);
    const [panelNumber, setPanelNumber] = useState(6);
    const [panelSize, setPanelSize] = useState('large');

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true);
            try {
                const repos = await getUserRepositories(username, process.env.REACT_APP_GITHUB_TOKEN);
                setRepoSet(repos);
                setDisplayedRepos(repos.slice(0, panelNumber)); // Initially display the first 4 repos
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (process.env.REACT_APP_GITHUB_TOKEN && loading && repoSet.length === 0) {
            fetchRepos();
        }
    }, [username, loading, repoSet.length]);

    const handleSeeMore = () => {
        const newPage = page + 1;
        const startIndex = newPage * panelNumber;
        const newDisplayedRepos = repoSet.slice(startIndex, startIndex + panelNumber);
        setDisplayedRepos(prev => [...prev, ...newDisplayedRepos]);
        setPage(newPage);
    };

    const handleResetView = () => {
        setDisplayedRepos(repoSet.slice(0, panelNumber));
        setPage(0);
    };

    if (loading) return <div><Loading /></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='project-panel'>
            
                <GitActivity username={username} />
                <div className='repo-section'>
                    <div className='grid-container'>
                        {displayedRepos.length !== 0 && !loading ?
                            displayedRepos.map((repo, index) => (
                                <div key={index} className="grid-item">
                                    <Microlink url={`https://github.com/${username}/${repo.name}/`}
                                        lazy={{ threshold: 0.001 }}
                                        media="auto"
                                        size={panelSize}
                                    />
                                </div>
                            )) : (loading ? <div className='loading'><Loading /></div> : (<div>Error: {error}</div>))
                        }
                    </div>
                    <div className='repo-buttons'>
                        {repoSet.length > panelNumber && displayedRepos.length < repoSet.length && (
                        <button onClick={handleSeeMore}>See More</button>
                        )}
                        {displayedRepos.length > panelNumber && (
                            <button onClick={handleResetView}>Reset</button>
                        )}
                    </div>
                </div>
        </div>
    );
}

export default ProjectPanel;
