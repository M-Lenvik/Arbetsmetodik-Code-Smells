import { log } from './consolelog.mts';
const PODCASTS_API_URL = import.meta.env.VITE_API_URL;

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
log('API OK');

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

    errorMessageToUser(
      'Laddning av podcasts misslyckades. Vänligen försök igen senare.'
    );

    return null;
  }
}

function errorMessageToUser(message: string) {
  const errorCatchingAPI = document.querySelector('#podlist-pods');

  if (errorCatchingAPI) {
    errorCatchingAPI.innerHTML = `<p style="color: red; font-weight: bold;">${message}</p>`;
  }
}

export default getPodcasts;
