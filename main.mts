//gör så här om du installerar vite: import './style.css'
import './style.scss'
import { createHtml } from './src/js/createHtml.mts'
import { toggleLightMode } from './src/js/toggleDarkmode.mts'
import getPodcasts from './src/js/api.mts'

function init() {
    toggleLightMode()
    createHtml()
}

init()
