//gör så här om du installerar vite: import './style.css'
import { createHtml } from './src/js/createHtml.mjs';
import { toggleLightMode } from './src/js/toggleDarkmode.mjs';
import getPodcasts from './src/js/api.mjs';



function init (){



toggleLightMode();
    createHtml ();

}

init ();




