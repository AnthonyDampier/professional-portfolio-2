const fetch = require('node-fetch');

const getUserContributions = async (username, token) =>{
  const headers = {
    Authorization: `token ${token}`,
  };

  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`, { headers });
  const repos = await reposResponse.json();
  // sort by updated_at
  repos.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  console.log(repos)
  return repos
}

export default getUserContributions;
