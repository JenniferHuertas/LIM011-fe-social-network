/* eslint-disable no-console */
import { currentUser } from '../model/autenticar-usuario.js';
import { updateProfile } from '../model/usuarios-firestore.js';

export const eventUpdateProfile = (event) => {
  event.preventDefault();
  const iduser = currentUser().uid;
  const newname = document.querySelector('#u-name');
  const newcountry = document.querySelector('#u-country').value;
  if (currentUser().uid !== 'null');
  updateProfile(iduser, newname.value, newcountry)
    .then((doc) => {
      window.location.hash = '#/profile';
      console.log('perfil actualizado', doc);
    })
    .catch((error) => {
      console.log(error);
    });
};
