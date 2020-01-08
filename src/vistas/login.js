import { inicioSesion } from '../firebase/firebase-inicio-sesion.js';


// Figure:
export const figureLoginRegistro = () => {
  const figureLogin = document.createElement('figure');
  figureLogin.id = 'figureLoginRegistro';

  const imageEncabezado = `
    <img src='https://image.freepik.com/vector-gratis/comida-sana-personas_24908-55204.jpg' id='imgPrincipal'>
  `;

  figureLogin.innerHTML = imageEncabezado;

  return figureLogin;
};


// Main Login
const mainLoginForm = () => {
  const mainLogin = document.createElement('main');
  mainLogin.id = 'mainLogin';

  const inicioLogin = `
           <figure id='figureLogo'>
              <img src='img/logo.jpeg' id='logoLoginRegistro'>
           </figure>
          <section id='seccionForm'>
              <p class='parrafo'>¡Bienvenido!</p>
              <form action="#" method="post">
                  <input type='email' id='emailLogin' class='inputRegistro' placeholder='Email' maxlength='30' name='usuarioLogin'>
                  <input type='password' id='passwordLogin' class='inputRegistro' placeholder='Password' name='passwordLogin' minlength='6'>
                  <button type='button' id='botonLogin'>Log in</button>
              </form>
              <p class='parrafo'>O bien ingresa con...</p>
            <div id='iconoRedesSociales'>
                <a href='#'><img src='https://image.flaticon.com/icons/png/512/2392/premium/2392485.png' class='iconRed'></a>
                <a href='#'><img src='https://icon-library.net/images/google-icon-search/google-icon-search-19.jpg' class='iconRed'></a>
            </div>
            <p class='parrafo'>¿No tienes una cuenta? <a href="#/creacuenta" id='enlaceRegistro'>Regístrate</a></p>   
          </section>
        `;

  mainLogin.innerHTML = inicioLogin;

  const eventoBotonLogin = mainLogin.querySelector('#botonLogin');
  eventoBotonLogin.addEventListener('click', () => {
    const emailLogin = document.querySelector('#emailLogin').value;
    const passwordLogin = document.querySelector('#passwordLogin').value;
    inicioSesion(emailLogin, passwordLogin)
      .then(() => {
        window.location.hash = '#/home';
      });
  });

  return mainLogin;
};


// Div contenedor de vista Login
export const divVistaLogin = () => {
  const divContenedorLogin = document.createElement('div');
  divContenedorLogin.id = 'divVistaLogin';

  divContenedorLogin.appendChild(figureLoginRegistro());
  divContenedorLogin.appendChild(mainLoginForm());


  return divContenedorLogin;
};
