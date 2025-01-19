const PODCASTS_API_URL =
  'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false';

export async function getPodcasts() {
  return await fetch(PODCASTS_API_URL)
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
      console.error('nått blev fel:', error);
      return null;
    });
}

export default getPodcasts;