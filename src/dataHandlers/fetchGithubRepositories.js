import qs from 'qs';
const searchRepositories = async (options) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?${qs.stringify(options)}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      },
    }
  );

  // Note: Add error handling

  if (response.ok) {
    return response.json();
  }
}

export default searchRepositories;
