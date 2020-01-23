import registerUserEmailEvent, { passwordShow } from '../controller/register-controller.js';

export default () => {
  const registerView = `
    <section class='section-banner'>
    </section>
    <section class='section-main'>
      <div class='container-logo'>
        <img src='./img/logo.jpeg' alt='logo' class='icon-logo-main'>
      </div>
      <p> Crea una cuenta</p>
      <form>
        <input id='username' type='text' class='input-text' placeholder='Nombre de usuario'>      
        <input id='email-register' type='email' class='input-text'  placeholder='Correo Electronico'>
        <div class='pass-eye'> 
          <input type='password' id='password-login' class='input-password' placeholder='Password' required>
          <button class='eye-class btn-post'>
            <i id='btn-eye' class='fas fa-unlock-alt icon-general'></i>
          </button>
        </div>
        <span class='errors' id='error-message'></span>
        <span class='errors' id='error-password'></span>
        <span class='errors' id='error-email'></span>
        <button id='btn-register' class='btn btn-general' type='submit'>REGISTRAME</button>
        <p>¿Ya tienes una cuenta? <a href='#/login'>Inicia Sesión</a></p>
      </form>
    </section> `;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  const btnRegister = mainElem.querySelector('#btn-register');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  const showPass = mainElem.querySelector('#btn-eye');
  showPass.addEventListener('click', passwordShow);
  return mainElem;
};
