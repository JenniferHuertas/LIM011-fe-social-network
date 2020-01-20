/* eslint-disable no-console */
import { viewChange } from './router.js';

export const initRouter = () => {
  window.addEventListener('load', viewChange(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => viewChange(window.location.hash);
};
