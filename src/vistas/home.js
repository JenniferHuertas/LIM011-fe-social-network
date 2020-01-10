import { addNoteOnSubmit } from '../view-controller.js';
import { getNotes } from '../controller/firebase-controller.js';

const headerHome = () => {
  const header = document.createElement('header');
  header.id = 'headerVistaHome';

  header.innerHTML = `
    <h3>Bienvenido a tu perfil</h3>`;

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
        <input type="text" id="input-new-note" placeholder="¿Qué quieres compartir?">
        <button><i class="far fa-image"></i></button>
        <button id="boton-add-note">Publicar</button>
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
