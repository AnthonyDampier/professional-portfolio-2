import React, { useState, useEffect } from "react";
import Calendar from 'react-github-contribution-calendar';
import Loading from "../Loading/Loading";
import getUserContributions from '../../Utils/GetUserGitHubContributions/GetUserGitContributions.jsx';
import './GitActivity.css';
import DogWalking from "../DogWalking/DogWalking.jsx";

const GitActivity = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateCommitMap, setDateCommitMap] = useState({});

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
    if (process.env.REACT_APP_GITHUB_TOKEN && loading) {
      fetchEventsContributions();
    }
  }, [username, loading]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="github-activity">
      <h1>GitHub Activity</h1>
      <p>* Accounts for only public repositories</p>
      {/* Reference: https://haripo.github.io/react-github-contribution-calendar/ */}
      <Calendar
        style={{ width: '400px', height: 'auto' }}
        values={dateCommitMap}
        until={new Date()}
        panelColors={['#fff', '#7DCEA0', '#27AE60', '#1E8449', '#196127']}
        panelAttributes={{ 'rx': 0, 'ry': 0 }}
        weekLabelAttributes={{ 'rotate': 0 }}
        monthLabelAttributes={{
          style: {
            'text-decoration': 'none',
            'font-size': '8px',
            'alignmentBaseline': 'central',
            'fill': '#fff'
          }
        }}
      />
      <div className="dogComponent">
        <DogWalking />
      </div>
    </div>
  );
};

export default GitActivity;