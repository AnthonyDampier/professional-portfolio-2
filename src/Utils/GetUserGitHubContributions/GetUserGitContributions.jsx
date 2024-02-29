const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`, { headers });
  const events = await eventsResponse.json();
  const repoSet = events.map(event => event.repo.name);

  let totalCommits = 0;

  let index = 0;
  let dateCommitMap = {};
  for (const repo of repoSet) {
    const [owner, repoName] = repo.split('/');
    const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits`, { headers });
    const commits = await commitsResponse.json();
    if (commits[0] !== undefined){
        const dt = new Date(commits[0].commit.author.date);
        const month = (dt.getMonth() + 1).toString().length === 1 ? "0" + (dt.getMonth() + 1) : (dt.getMonth() + 1);
        const commitDT = dt.getFullYear() + "-" + (month) + "-" + dt.getDate();
        dateCommitMap[commitDT] = commits.length + dateCommitMap[commitDT] || commits.length;
    }
  }

  return dateCommitMap;
}

export default getUserContributions;
