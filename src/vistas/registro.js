import { registro } from '../firebase/firebase-registro.js';
import { figureLoginRegistro } from './login.js';


// Main Registro
const mainRegistroForm = () => {
  const mainRegistro = document.createElement('main');
  mainRegistro.id = 'mainRegistro';

  const inicioRegistro = `
        <figure id='figureLogo'>
          <img src='img/logo.jpeg' id='logoLoginRegistro'>
        </figure>
        <section id='seccionForm'>
            <p class='parrafo'>Crea una cuenta.</p>
            <form action='#' method='post'>
              <input type='text' id='name' class='inputRegistro' name='nombreUsuario' placeholder='Nombre' maxlength='30' >
              <input type='text' id='lastName' class='inputRegistro' name='appellidoUsuario' placeholder='Apellido' maxlength='30'>
              <input type='email' id='registroEmail' class='inputRegistro' placeholder='Email' maxlength='30' name='emailUsuario'>
              <input type='password' id='registroPassword' class='inputRegistro' placeholder='Password' name='password' minlength='6'>
              <button type='button' id='botonRegistro'>Regístrate</button>
            </form>
            <p class='parrafo'>O bien regístrate con...</p>
            <div id='iconoRedesSociales'>
                <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png' class='iconRed'></a>
                <a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg' class='iconRed'></a>
            </div>
            <p class='parrafo'>¿Tienes una cuenta? <a href="#/iniciasesion" id='enlaceRegistro'>Inicia Sesión</a></p>
        </section>     
      `;

  mainRegistro.innerHTML = inicioRegistro;
  const botonRegistro = mainRegistro.querySelector('#botonRegistro');

  botonRegistro.addEventListener('click', () => {
    const emailRegistro = document.querySelector('#registroEmail').value;
    const passwordRegistro = document.querySelector('#registroPassword').value;

    registro(emailRegistro, passwordRegistro);
    console.log('hola mundo');
  });

  return mainRegistro;
};


// Div contenedor vista Registro
export const divVistaRegistro = () => {
  const divContenedorRegistro = document.createElement('div');
  divContenedorRegistro.id = 'divVistaRegistro';

  divContenedorRegistro.appendChild(figureLoginRegistro());
  divContenedorRegistro.appendChild(mainRegistroForm());

  return divContenedorRegistro;
};

// Evento del boton registro
