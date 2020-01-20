/* eslint-disable no-console */
import { addNote } from '../model/publicar-post';

export const addNotes = () => {
  const textos = document.getElementById('createPost').value;
  const postCreate = { publicaciones: textos };
  addNote(postCreate).then(() => {
    console.log('agrego nota');
  }).catch(() => {
    console.log('error');
  });
};
