import React, {useState, useEffect} from "react";
import Calendar from 'react-github-contribution-calendar';
import getUserContributions from '../../Utils/GetUserGitHubContributions/GetUserGitContributions.jsx';
import './GitActivity.css';

const GitActivity = ({username}) => {const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dateCommitMap, setDateCommitMap] = useState({});
    // const [githubToken, setGithubToken] = useState(env.REACT_APP_GITHUB_TOKEN);
    let githubToken = process.env.REACT_APP_GITHUB_TOKEN;
     // Load environment variables from .env file
    const fetchEventsContributions = async () => { 
      setLoading(true);
      try {
        setDateCommitMap(await getUserContributions(username, process.env.REACT_APP_GITHUB_TOKEN));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

    }
    useEffect(() => {
      
      
      if (githubToken){
        fetchEventsContributions();
      }
    }, [username, githubToken]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="github-activity">
        <h2>GitHub Public Repository Activity</h2>
        <p>* Accounts for only accepted commits to public repositories</p>
        {/* Reference: https://haripo.github.io/react-github-contribution-calendar/ */}
        <Calendar 
          style={{ width: '400px', height: 'auto' }}
          values={dateCommitMap} 
          until={Date.Today}
          panelColors={['#fff', '#c6e48b', '#7bc96f', '#239a3b', '#196127']}
          panelAttributes={{ 'rx': 0, 'ry': 0 }}
          weekLabelAttributes={{'rotate': 0}}
          monthLabelAttributes={{
              'text-decoration': 'none',
              'font-size': '24px',
              'alignment-baseline': 'central',
              'fill': '#fff'
            }}
          />
      </div>
    );
  };

export default GitActivity;