import { log } from './consolelog.mts';

const PODCASTS_API_URL =
  'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false';

//Typdefinition för ett enskilt podcast-objekt
export interface Podcast {
  name: string;
  description: string;
  programurl: string;
  socialimage: string;
}

//Typdefinition för API-svaret
export interface PodcastsResponse {
  programs: Podcast[];
}

//Funktion för att hämta podcasts
export async function getPodcasts(): Promise<PodcastsResponse | null> {
  try {
    const response = await fetch(PODCASTS_API_URL);

    if (!response.ok) {
      throw new Error(
        `Kunde inte hämta podcasts. HTTP-status: ${response.status}`
      );
    }

    const data: PodcastsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Något gick fel vid hämtning av podcasts:', error);
    return null;
  }
}
log('API OK');
export default getPodcasts;
