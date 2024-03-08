import React, { useEffect, useState } from "react";
import Microlink from "@microlink/react";
import GitActivity from "../../Components/GitActivity/GitActivity";
import Loading from "../../Components/Loading/Loading";
import getUserRepositories from "../../Utils/GetUserRepositories/GetUserRepositories.jsx";
import "./ProjectPanel.css";

const GITHUB_PNG = "../../Assets/PNG/github-mark.png";

const FEATURE_PROJECTS = [
    { 
        name: "Hangman",
        description: "A simple hangman game built with React and TypeScript.",
        image: "../../Assets/PNG/Projects/Screenshot 2024-03-08 at 1.07.34 PM.png",
        urlSite: "https://hangman-react-typescript-mu.vercel.app/",
        urlRepo: "https://github.com/AnthonyDampier/hangman-react-typescript",
    },{
        name: "Personal Finance App",
        description: "A personal finance app built with React",
        image: "../../Assets/PNG/Projects/Screenshot 2024-03-08 at 1.05.26 PM.png",
        urlSite: "https://personal-finance-app-omega.vercel.app/",
        urlRepo: "https://github.com/AnthonyDampier/personal-finance-app",
    },{
        name: "Evil Cactus Shooting Mayhem",
        description: "A game built with React",
        image: "../../Assets/PNG/Projects/Screenshot%202024-03-08%20at%2012.59.43%E2%80%AFPM.png",
        urlSite: "https://cactus-mayhem.herokuapp.com/",
        urlRepo: "https://github.com/AnthonyDampier/EVIL_CACTUS_SHOOT_MAYHEM",
    },{
        name: "Dungeon Crawler",
        description: "A open sourced game built with React. Recruiting for contributors.",
        image: "../../Assets/PNG/Projects/Screenshot 2024-03-08 at 1.11.06 PM.png",
        urlSite: "https://dungeon-crawler-smoky.vercel.app/",
        urlRepo: "https://github.com/AnthonyDampier/dungeon-crawler",
    },{
        name: "MN Women's Press CMS & CRM",
        description: "A content management system built with React and TypeScript.",
        image: "../../Assets/PNG/Projects/MNPressScreenShot.webp",
        urlSite: "https://mnwomenpress-prototype.herokuapp.com/#/login",
        urlRepo: "https://github.com/AnthonyDampier/Contact_and_Content_Management_System"
    }
]

const ProjectPanel = () => {
    const [username, setUsername] = useState("AnthonyDampier");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [repoSet, setRepoSet] = useState([]);
    const [displayedRepos, setDisplayedRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [panelNumber, setPanelNumber] = useState(3);
    const [panelSize, setPanelSize] = useState("large");

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
        <div className="project-panel">
            
                <GitActivity username={username} />
                <h2 className="repo-header">Featured Projects</h2>
                <div className="repo-section">
                    <div className="grid-container">
                        {FEATURE_PROJECTS.length !== 0 && !loading ?
                            FEATURE_PROJECTS.map((repo, index) => (
                                <div key={index} className="grid-item featured">
                                    <a href={repo.urlSite} target="_blank" rel="noreferrer">
                                        <img className="live-website-image" src={repo.image} alt={repo.name} />
                                    </a>
                                    <div className="repo-info">
                                        <div className="repo-text">
                                            <h3 className="repo-name">{repo.name}</h3>
                                            <p className="repo-description">{repo.description}</p>
                                        </div>
                                        <a href={repo.urlRepo} target="_blank" rel="noreferrer">
                                            <img className="github-img" style={{height: "20px"}} src={GITHUB_PNG} alt={repo.name} />
                                        </a>
                                    </div>
                                </div>
                            )) : (loading ? <div className="loading"><Loading /></div> : (<div>Error: {error}</div>))
                        }
                    </div>
                </div>
                <h2 className="repo-header">Recent Repo Activities</h2>
                <div className="repo-section">
                    <div className="grid-container">
                        {displayedRepos.length !== 0 && !loading ?
                            displayedRepos.map((repo, index) => (
                                <div key={index} className="grid-item">
                                    <Microlink url={`https://github.com/${username}/${repo.name}/`}
                                        
                                        media="auto"
                                        size={panelSize}
                                    />
                                </div>
                            )) : (loading ? <div className="loading"><Loading /></div> : (<div>Error: {error}</div>))
                        }
                    </div>
                    <div className="repo-buttons">
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
