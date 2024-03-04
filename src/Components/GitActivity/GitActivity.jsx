import React, {useState, useEffect} from "react";
import Calendar from 'react-github-contribution-calendar';
import Loading from "../Loading/Loading";
import getUserContributions from '../../Utils/GetUserGitHubContributions/GetUserGitContributions.jsx';
import './GitActivity.css';
import DogWalking from "../DogWalking/DogWalking.jsx";


const GitActivity = ({username}) => {const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dateCommitMap, setDateCommitMap] = useState({});
    // const [githubToken, setGithubToken] = useState(env.REACT_APP_GITHUB_TOKEN);
    let githubToken = process.env.REACT_APP_GITHUB_TOKEN;
     // Load environment variables from .env file
    const fetchEventsContributions = async () => { 
      setLoading(true);
      let dateCommitMapResponse = {};
      try {
        dateCommitMapResponse = await getUserContributions(username, process.env.REACT_APP_GITHUB_TOKEN);
      } catch (error) {
        setError(error.message);
      } finally {
        console.log(dateCommitMapResponse);
        setDateCommitMap(dateCommitMapResponse);
        
      }
    }

    setTimeout(() => {
        if (loading){
            setLoading(false);
        }
    }, 2000); // 2000 milliseconds = 2 seconds

    useEffect(() => {
      if (githubToken && loading){
        fetchEventsContributions();
      }
    }, [githubToken, username, loading]);
  
    if (loading) return <div><Loading/></div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="github-activity">
        <div className="github-activity-calendar">
          <h1>GitHub Activity</h1>
          <p>* Public Repositories Only</p>
          {/* Reference: https://haripo.github.io/react-github-contribution-calendar/ */}
          { loading && <Loading/>}
          { error && <div>Error: {error}</div>}
          { (!loading && !error) &&
            <Calendar 
              style={{ width: '400px', height: 'auto' }}
              values={dateCommitMap} 
              until={Date.Today}
              panelColors={['#fff', '#c6e48b', '#7bc96f', '#239a3b', '#196127']}
              panelAttributes={{ 'rx': 1, 'ry': 1 }}
              weekLabelAttributes={{'rotate': 0}}
              monthLabelAttributes={{
                style: {
                  'text-decoration': 'none',
                  'font-size': '8px',
                  'alignmentBaseline': 'central',
                  'fill': '#fff'
                }
              }}
              />
          }
        </div>
        <div className="dog-component">
          <DogWalking/>
        </div>
      </div>
    );
  };

export default GitActivity;