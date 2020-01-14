import { components } from './index.js';

const viewChange = (hash) => {
  const sectionMain = document.getElementById('root');
  sectionMain.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/iniciasesion':
      return sectionMain.appendChild(components.login());
    case '#/creacuenta':
      return sectionMain.appendChild(components.createAccount());
    case '#/home':
      return sectionMain.appendChild(components.home());
    default:
      return sectionMain.appendChild(components.different());
  }
};

export const initRouter = () => {
  window.addEventListener('load', viewChange(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => viewChange(window.location.hash);
};
