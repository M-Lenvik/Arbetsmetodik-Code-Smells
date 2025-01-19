import getPodcasts from './api.mts';

const podCastContainer = document.querySelector('#podlist-pods');

//Funktion för att skapa ett HTML-element med attribut
//Funktionens parametrar sätts till string
function createElement(
  tag: string,
  attributes: Record<string, string> = {},
  textContent: string = ''
) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

export async function createHtml() {
  const podCasts = await getPodcasts();

  if (!podCasts) {
    console.error('Kunde inte hämta podcasts');
    return;
  }

  //Kontrollera om containern hittas
  if (!podCastContainer) {
    console.error("Elementet med id 'podlist-pods' hittades inte.");
    throw new Error('Kritisk fel: Behållaren för podcasts saknas.');
  }

  podCasts.programs.forEach((podcast) => {
    //Skapa artikel-element för varje podcast
    const podcastArticle = createElement('article', {
      class: 'podlist__pod',
    });

    //Skapa bild för podcast
    const img = createElement('img', {
      src: podcast.socialimage,
      width: '100',
      height: '100',
      alt: podcast.name || 'Podcast-bild',
    });
    podcastArticle.appendChild(img);

    //Skapa text container för info
    const podcastInfoDiv = createElement('div', { class: 'podlist__pod-info' });
    podcastArticle.appendChild(podcastInfoDiv);

    //Lägg till rubrik
    const header = createElement('h2', {}, podcast.name);
    podcastInfoDiv.appendChild(header);

    //Lägg till beskrivning
    const podcastDescription = createElement('p', {}, podcast.description);
    podcastInfoDiv.appendChild(podcastDescription);

    //Lägg till länk
    const startPodcastLink = createElement(
      'a',
      {
        'aria-label': `Lyssna här till podden ${podcast.name}`, //Text som skärmuppläsaren läser upp
        href: podcast.programurl,
      },
      'Lyssna här'
    );
    podcastInfoDiv.appendChild(startPodcastLink);

    //Lägg till hela artikeln i containern
    podCastContainer.appendChild(podcastArticle);
  });
}
