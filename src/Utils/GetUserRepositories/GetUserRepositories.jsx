import fetch from 'node-fetch';

const getUserContributions = async (username, token) => {
  const headers = {
    Authorization: `token ${token}`,
  };

  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`, { headers });
  const events = await eventsResponse.json();
  const repoSet = Array.from(new Set(events.map(event => event.repo.name)))
    .map(repo => repo.split('/')[1]);
  
  return repoSet;
}

export default getUserContributions;
