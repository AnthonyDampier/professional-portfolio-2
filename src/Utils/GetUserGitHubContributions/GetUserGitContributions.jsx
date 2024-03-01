import fetch from 'node-fetch';

const getUserContributions = async (username, token) => {
  const headers = {
    Authorization: `token ${token}`,
  };

  const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`, { headers });
  const events = await eventsResponse.json();
  const repoSet = new Set(events.map(event => event.repo.name));

  let dateCommitMap = {};

  for (const repo of repoSet) {
    const [owner, repoName] = repo.split('/');
    const commitsResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits`, { headers });
    const commits = await commitsResponse.json();

    for (const commit of commits) {
      const dt = new Date(commit.commit.author.date);
      const month = (dt.getMonth() + 1).toString().padStart(2, '0');
      const commitDT = `${dt.getFullYear()}-${month}-${dt.getDate()}`;
      if (dateCommitMap[commitDT] === undefined) {
        dateCommitMap[commitDT] = 1;
      } else {
        dateCommitMap[commitDT]++;
      }
    }
  }
  return dateCommitMap;
}

export default getUserContributions;
