import getPodcasts from './api.mts';

const podCastContainer = document.querySelector('#podlist-pods');

// Funktion för att skapa ett HTML-element med attribut
function createElement(tag, attributes = {}, textContent = '') {
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

  podCasts.programs.forEach((podcast) => {
    // Skapa artikel-element för varje podcast
    const innerArticle = createElement('article', {
      class: 'podlist__pod',
      tabindex: '1',
    });

    // Skapa bild för podcast
    const img = createElement('img', {
      src: podcast.socialimage,
      width: '100',
      height: '100',
      alt: podcast.name || 'Podcast-bild',
    });
    innerArticle.appendChild(img);

    // Skapa text-container för info
    const textDiv = createElement('div', { class: 'podlist__pod-info' });
    innerArticle.appendChild(textDiv);

    // Lägg till rubrik
    const header = createElement('h2', {}, podcast.name);
    textDiv.appendChild(header);

    // Lägg till beskrivning
    const description = createElement('p', {}, podcast.description);
    textDiv.appendChild(description);

    // Lägg till länk
    const link = createElement(
      'a',
      {
        href: podcast.programurl,
        tabindex: '1',
      },
      'Lyssna här'
    );
    textDiv.appendChild(link);

    // Kontrollera om behållaren hittades
    if (!podCastContainer) {
      console.error("Elementet med id 'podlist-pods' hittades inte.");
      throw new Error('Kritisk fel: Behållaren för podcasts saknas.');
    }

    // Lägg till hela artikeln i containern
    podCastContainer.appendChild(innerArticle);
  });
}
