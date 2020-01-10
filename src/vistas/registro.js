import { figureLoginRegistro } from './login.js';
import { accountRegistration } from '../view-controller.js';


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
              <div class='inputName'>
                <input type='text' id='name' class='inputRegistro' name='nombreUsuario' placeholder='Nombre' maxlength='30' minlength='2'>
                <i class="fas fa-user"></i>
              </div>
              <span name='messageName'></span>
              <div class='inputLastName'>
                <input type='text' id='lastName' class='inputRegistro' name='appellidoUsuario' placeholder='Apellido' maxlength='30' minlength='2'>
                <i class="fas fa-user"></i>
              </div>
              <span name='messageLastName'></span>
              <div class='inputEmail'>
                <input type='email' class='inputRegistro' placeholder='Email' maxlength='30' name='emailUsuario'>
                <i class="fas fa-at"></i>  
              </div>
              <span name='messageEmailRegistro'></span>
              <div class='inputPassword'>
                <input type='password' class='inputRegistro' placeholder='Password' name='password' minlength='6'>
                <i class="fas fa-key"></i>
              </div>
              <span name='messagePasswordRegistro'></span>
              <div>
                <section>
                  <label for="fecha-nac">Fecha de nacimiento:</label><br>
                  <input type="date" name="fecha-nac" id="fecha-nac"><br>
                </section>
                <section>
                  <label for="sexo">Sexo:</label><br>
                  <select name="sexo" id="sexo">
                    <option value="option" selected disabled>Seleccione</option>
                    <option value="mujer">Mujer</option>
                    <option value="hombre">Hombre</option>
                    <option value="personalizado">Personalizado</option>
                  </select>
                </section>
              </div>
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

  botonRegistro.addEventListener('click', accountRegistration);

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
