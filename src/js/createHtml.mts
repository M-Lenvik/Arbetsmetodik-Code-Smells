import getPodcasts from './api.mts'

const podCastContainer = document.querySelector('#podlist-pods')

let i = 0

export async function createHtml() {
    const podCasts = await getPodcasts()
    podCasts.programs.forEach((podcast) => {
        i++
        const innerArticle = createInnerArticle()

        createImg()

        const textDiv = createTextDiv()

        createHeader()
        createP()
        createLink()

        function createInnerArticle() {
            const innerArticle = document.createElement('article')
            innerArticle.setAttribute('class', 'podlist__pod')
            innerArticle.setAttribute('tabindex', '1')
            podCastContainer.appendChild(innerArticle)
            return innerArticle
        }

        function createTextDiv() {  
            const textDiv = document.createElement('div')
            textDiv.setAttribute('class', 'podlist__pod-info')
            innerArticle.appendChild(textDiv)
            return textDiv
        }

        function createLink() {
            const linkPlacement = document.createElement('a')
            const linkText = document.createTextNode('Lyssna här')
            linkPlacement.setAttribute('href', podCasts.programs[i].programurl)
            linkPlacement.setAttribute('tabindex', '1')
            linkPlacement.appendChild(linkText)
            textDiv.appendChild(linkPlacement)
        }
        function createImg() {
            const imgPlacement = document.createElement('IMG')
            imgPlacement.setAttribute('src', podCasts.programs[i].socialimage)
            imgPlacement.setAttribute('width', '100')
            imgPlacement.setAttribute('height', '100')
            imgPlacement.setAttribute('alt', podCasts.programs[i].name || 'Podcast-bild');
            innerArticle.appendChild(imgPlacement)
        }

        function createP() {
            const descPlacement = document.createElement('p')
            const desc = document.createTextNode(
                podCasts.programs[i].description
            )
            descPlacement.appendChild(desc)
            textDiv.appendChild(descPlacement)
        }

        function createHeader() {
            const headerPlacement = document.createElement('h2')
            const programName = document.createTextNode(
                podCasts.programs[i].name
            )
            headerPlacement.appendChild(programName)
            textDiv.appendChild(headerPlacement)
        }
    })
}

//export {createHtml};
