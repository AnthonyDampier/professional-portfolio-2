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

  // Step 2: For each repository, get contribution counts
  let totalCommits = 0;
  for (const repo of repoSet) {
    const [owner, repoName] = repo.split('/');
    console.log(`Getting commits for ${repo}`)
    const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits`, { headers });
    const commits = await commitsResponse.json();
    if (commits[0] !== undefined){
        console.log(commits[0].commit.author.date);
        console.log(commits.length);
        totalCommits += commits.length;
    }
    // const userCommit = commits.find(contrib => contrib.author.login === username);
    // console.log(...userCommit);
    // for (let each of userCommit){
    //     console.log(each);
    // }

  }

  // Step 3: Aggregate contributions
  console.log(`Total commits by ${username}: ${totalCommits}`);
}

export default getUserContributions;
