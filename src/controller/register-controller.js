/* eslint-disable no-console */
import { registro, googleRegister } from '../model/autenticar-usuario.js';
import { changeHash } from './login-controller.js';

export const accountRegistration = (event) => {
  event.preventDefault();

  const botonLogin = event.target;
  const name = botonLogin.closest('form').querySelectorAll('input[type=text]')[0];
  const lastName = botonLogin.closest('form').querySelectorAll('input[type=text]')[1];
  const email = botonLogin.closest('form').querySelector('input[type=email]');
  const password = botonLogin.closest('form').querySelector('input[type=password]');
  const textName = botonLogin.closest('form').querySelector('span[name=messageName]');
  const textLastName = botonLogin.closest('form').querySelector('span[name=messageLastName]');
  const textEmail = botonLogin.closest('form').querySelector('span[name=messageEmailRegistro]');
  const textPassword = botonLogin.closest('form').querySelector('span[name=messagePasswordRegistro]');

  if (name.value !== '' && lastName.value !== '' && email.value !== '' && password.value !== '') {
    registro(email.value, password.value)
      .then(() => changeHash('/home'))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          email.value = '';
          textEmail.innerHTML = `
            <p style="font-size: 10px; margin: 3px; color: blue">La dirección de correo electrónico ya existe.</p>`;
        }
        if (errorCode === 'auth/invalid-email') {
          email.value = '';
          textEmail.innerHTML = `
            <p style="font-size: 10px; margin: 3px; color: blue">La dirección de correo electrónico no es válida.</p>`;
        }
        if (errorCode === 'auth/operation-not-allowed') {
          email.value = '';
          password.value = '';
          textPassword.innerHTML = `
            <p style="font-size: 10px; margin: 3px; color: blue">La dirección de correo electrónico o contraseña no se encuentra habilitada.</p>`;
        }
        if (errorCode === 'auth/operation-not-allowed') {
          email.value = '';
          textEmail.innerHTML = `
            <p style="font-size: 10px; margin: 3px; color: blue">La dirección de correo electrónico no es válida.</p>`;
        }
        if (errorCode === 'auth/weak-password') {
          password.value = '';
          textPassword.innerHTML = `
            <p style="font-size: 10px; margin: 3px; color: blue">La contraseña es demasiado débil.</p>`;
        }

        return errorMessage;
      });
  } else {
    textName.innerHTML = `
      <p style="font-size: 10px; margin: 3px; color: blue">Por favor, ingrese un nombre.</p>`;
    textLastName.innerHTML = `
      <p style="font-size: 10px; margin: 3px; color: blue">Por favor, ingrese un apellido.</p>`;
  }
};

export const registerWithGoogle = () => {
  googleRegister().then(() => {
    changeHash('/home');
  })
    .catch((error) => {
      console.log(error);
    });
};
