
export async function getPodcasts() {
    return await fetch('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false')
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
        console.error('nått blev fel:', error)
        return null;
    })
    //
    console.log('Hämtade podcasts:', podcasts);
}

export default getPodcasts;


//Nytt
    const podcastsDiv = document.getElementById('podcasts');
        podcastsDiv.innerHTML = podcasts.programs;