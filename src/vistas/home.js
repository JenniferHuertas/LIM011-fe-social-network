/* import { addNoteOnSubmit } from '../view-controller.js';
import { getNotes } from '../controller/firebase-controller.js'; */

export default () => {
  const vistaMuro = `
  <header>
    <nav>
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
  <div class='front'>Mariana Costa</div>
  <span class='userProfile'>
    <img src='https://image.flaticon.com/icons/png/512/145/145847.png' id='imgPerfil'>
  </span>
  <section id='container-posts' class='container-posts'>
    <div class='card-new-post'>
      <textarea name='' id='' placeholder='¿Qué quieres compartir?'></textarea>
      <i class="fas fa-image"></i>
      <button id='addPost' class='share-post type='submit'>Compartir</button>
    </div>
  </section>

    
`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = vistaMuro;
  return divElement;
};
