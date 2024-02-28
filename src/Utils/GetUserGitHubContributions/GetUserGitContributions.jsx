const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  // Step 1: List repositories the user has contributed to
  // This example is simplified and may not capture all contributions.
  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public`, { headers });
  const events = await eventsResponse.json();
  const repoSet = new Set(events.map(event => event.repo.name));

  // Step 2: For each repository, get contribution counts
  let totalCommits = 0;

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
