const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const response = await fetch(url);
  if (!response.ok) {
    const { url, status, statusText } = response;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
  const breeds = await response.json();

  return breeds;
};

export default getBreeds;
