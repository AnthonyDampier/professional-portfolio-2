import React, {useState, useEffect} from "react";
import './GitActivity.css';
import getUserContributions from '../../Utils/GetUserGitHubContributions/GetUserGitContributions.jsx';

const GitActivity = ({username}) => {const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const fetchEventsContributions = async () => { 
      setLoading(true);
      try {
        const response = await getUserContributions(username, token);
        console.log(response);
      } catch (error) {
        setError(error.message);
      }

    }
    useEffect(() => {
      const fetchEvents = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://api.github.com/users/${username}/events`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchEventsContributions();
      fetchEvents();
    }, [username]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <h2>GitHub Activity for {username}</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.type}</strong>: {event.repo.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default GitActivity;