const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  // Step 1: List repositories the user has contributed to
  // This example is simplified and may not capture all contributions.
  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`, { headers });
  const events = await eventsResponse.json();
  const repoSet = new Set(events.map(event => event.repo.name));

  // Step 2: For each repository, get date and contribution
  let totalCommits = 0;

  let index = 0;
  let dateCommitMap = {};
  console.log(repoSet);
  for (const repo of repoSet) {
    const [owner, repoName] = repo.split('/');
    console.log(`Getting commits for ${repo}`)
    const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits`, { headers });
    const commits = await commitsResponse.json();
    console.log(`Commits for ${repo}:`);
    console.log(commits);
    if (commits[0] !== undefined){
        console.log(commits[0].commit.author.date);
        const dt = new Date(commits[0].commit.author.date);
        const month = (dt.getMonth() + 1).toString().length === 1 ? "0" + (dt.getMonth() + 1) : (dt.getMonth() + 1);
        const commitDT = dt.getFullYear() + "-" + (month) + "-" + dt.getDate();
        console.log(commitDT);
        dateCommitMap[commitDT] = commits.length + dateCommitMap[commitDT] || commits.length;
    }
  }
  for (const key in dateCommitMap){
    totalCommits += dateCommitMap[key];
  }
  console.log(dateCommitMap);

  // Step 3: Aggregate contributions
  console.log(`Total commits by ${username}: ${totalCommits}`);
  return dateCommitMap;
}

export default getUserContributions;
