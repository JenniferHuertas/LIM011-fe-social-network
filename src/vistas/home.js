import { addNotes } from '../view-controller.js';

const notas = () => {
  const items = document.createElement('div');
  items.innerHTML = `
  <textarea name='' id='showPost'></textarea>
  `;
  return items;
};


export default () => {
  const vistaMuro = document.createElement('main');
  const home = `
  <header>
    <nav id='barraHorizontal'>
      <figure id='figureLogo'>
        <img src='img/logo.jpeg' id='logoLoginRegistro'>
      </figure>
      <button id="menu" class="menu">
          <i class="icon-menu fas fa-bars"></i>
          <ul class="ul-menu-mobile hide">      
            <li class='home'>
              <a class="nav-container-link" href='#/home'> MURO</a>
            </li>
            <li class='profile-header'>
              <a  class="nav-container-link" href='#/profile'> PERFIL</a>
            </li>
            <li class='sign-out-mobile'>
              <a class="nav-container-link">SALIR
                <i id='sign-out' class="icon-log-out fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
      </button>
    </nav>  
  </header>
  <section class='profile'>
  <div class='front'>Usuario</div>
  <span class='userProfile'>
    <img src='https://image.flaticon.com/icons/png/512/145/145847.png' id='imgPerfil'>
  </span>
  <section id='publicar-posts' class='publicar-posts'>
    <div class='card-create-post'>
      <textarea name='' id='createPost' placeholder='¿Qué quieres compartir?'></textarea>
      <i class="fas fa-image"></i>
      <button id='addPost' class='share-post type='submit'>Compartir</button>
    </div>
  </section>  
`;

  vistaMuro.innerHTML = home;
  const btnAddpost = vistaMuro.querySelector('#addPost');
  btnAddpost.addEventListener('click', addNotes);

  return vistaMuro;
};
export const divVistaHome = () => {
  const divContenedorHome = document.createElement('div');
  divContenedorHome.id = 'divVistaHome';

  divContenedorHome.appendChild(notas());
  divContenedorHome.appendChild(divVistaHome());


  return divContenedorHome;
};
