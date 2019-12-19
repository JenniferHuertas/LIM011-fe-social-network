import { components } from '../vistas/index.js';

export const changeTmp = (hash) => {
  // const id = hash.split('/')[1];
  console.log('changeTmp');
  const sectionMain = document.getElementById('root');
  sectionMain.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/iniciasesion':
      return sectionMain.appendChild(components.login());
    case '#/creacuenta':
      return sectionMain.appendChild(components.createAccount());
    default:
      return sectionMain.appendChild(components.different());
  }
};
