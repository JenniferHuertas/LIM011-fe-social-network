import { addNoteOnSubmit } from '../view-controller.js';
import { getNotes } from '../controller/firebase-controller.js';

const headerHome = () => {
  const header = document.createElement('header');
  header.id = 'headerVistaHome';

  header.innerHTML = `
  <section id='barraHorizontal'>
  <input type="checkbox" id="menu-toggle"/>
  <label id="trigger" for="menu-toggle"></label>
  <label id="burger" for="menu-toggle"></label>
  <ul id="menu">
    <li><a href="#">Mariana Costa</a></li>
    <li><a href="#">Cerrar Sesion</a></li>
  </ul>
  <figure id='figureLogo'>
    <img src='img/logo.jpeg' id='logoLoginRegistro'>
  </figure>
  
</section>    `;

  return header;
};


const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  console.log(objNote);
  liElement.innerHTML = `
        <div id="">
          <section>
            <span><a href="#">Mi nombre</a></span>
          </section>
          <span>
            <p>${objNote.datePost}</p>
          </span>
          <span>
            <p>${objNote.note}</p>
          </span>
        </div>
      `;

  return liElement;
};


const sectionNotes = (notes) => {
  const sectionContainer = document.createElement('section');
  sectionContainer.id = 'sectionNotes';

  const homeContent = `
    <!-- Formulario -->
    <div>
      <form>
        <div class='front'><h3>Mariana Costa</h3></div>
        <div class='userProfile'>
          <img src='https://image.flaticon.com/icons/png/512/145/145847.png' id='imgPerfil'>
        </div>
        <input type="text" id="input-new-note" placeholder="¿Qué quieres compartir?">
        <button><i class="far fa-image"></i></button>
        <button id="boton-add-note">Compartir</button>
      </form>
    </div>

    <!-- Sección notas -->
    <section>
      <ul id="notes-list"></ul>
    </section>
  `;

  sectionContainer.innerHTML = homeContent;

  const buttonAddNote = sectionContainer.querySelector('#boton-add-note');
  const ul = sectionContainer.querySelector('#notes-list');

  notes.forEach((note) => {
    ul.appendChild(itemNote(note));
  });

  buttonAddNote.addEventListener('click', addNoteOnSubmit);

  return sectionContainer;
};


export default () => {
  const divHome = document.createElement('div');
  divHome.id = 'divVistaHome';

  divHome.appendChild(headerHome());

  getNotes((notes) => {
    // Condición si el elemento ya existe:
    if (document.getElementById('sectionNotes')) {
      document.getElementById('sectionNotes').remove();
    }

    divHome.appendChild(sectionNotes(notes));
  });

  return divHome;
};
