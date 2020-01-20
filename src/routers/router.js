import { components } from '../utils/util-views.js';
import { getNotes } from '../model/publicar-post.js';

export const viewChange = (hash) => {
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
      getNotes((ObjPosts) => {
        sectionMain.innerHTML = '';
        sectionMain.appendChild(components.home(ObjPosts));
      });
      break;
    default:
      sectionMain.appendChild(components.different());
  }
  return viewChange;
};
