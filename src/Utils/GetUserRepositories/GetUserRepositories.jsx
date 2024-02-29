const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`, { headers });
  const events = await eventsResponse.json();
  const repoSet = Array.from(new Set(events.map(event => event.repo.name)));
  for (let i = 0; i < repoSet.length; i++){
    const [owner, repoName] = repoSet[i].split('/');
    repoSet[i] = repoName;
  }
  return repoSet;
}

export default getUserContributions;
