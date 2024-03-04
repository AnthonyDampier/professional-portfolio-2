const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
  const repos = await repoResponse.json();
  const repoNameArray = repos.map(repo => repo.name);

  let dateCommitMap = {};
  for (const repoName of repoNameArray) {
    const commitsResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}/commits`, { headers });
    const commits = await commitsResponse.json();
    for (let i = 0; i < commits.length; i++){
      const dt = new Date(commits[i].commit.author.date);
      const day = dt.getDate().toString().length === 1 ? "0" + dt.getDate() : dt.getDate();
      const month = (dt.getMonth() + 1).toString().length === 1 ? "0" + (dt.getMonth() + 1) : (dt.getMonth() + 1);
      const commitDT = dt.getFullYear() + "-" + (month) + "-" + day;
      // dateCommitMap[commitDT] = commits.length + dateCommitMap[commitDT] || commits.length;
      dateCommitMap[commitDT] = dateCommitMap[commitDT] !== undefined ? commits.length + dateCommitMap[commitDT] : commits.length;
    }
  }
  return dateCommitMap;
}

export default getUserContributions;
