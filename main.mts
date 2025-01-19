import './style.scss';
import { createHtml } from './src/js/createHtml.mts';
import { toggleLightMode } from './src/js/toggleDarkmode.mts';

function init() {
  toggleLightMode();
  createHtml();
}

init();
