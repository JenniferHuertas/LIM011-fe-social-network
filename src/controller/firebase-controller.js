// Registro de usuarios con correo:
export const registro = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password));

// Registro e inicio de sesiòn con google:
export const googleRegister = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Inicio de Sesiòn
export const inicioSesion = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password));

// Cerrar sesiòn
// export const signOut = () => firebase.auth().signOut();

// Usuarios
export const usuariosGuardados = () => {
  const user = firebase.auth().currentUser;
  firebase.firestore().collection('users').doc(user.uid).set({
    user: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
    email: user.email,
  });
};

// Posts:
export const addNote = objectPost => firebase.firestore().collection('notes').add(objectPost);

/* function addNote2(objectPost) {
  return firebase.firestore().collection('notes').add(objectPost);
} */
export const getNotes = () => firebase.firestore().collection('notes').get();
// eslint-disable-next-line max-len
/* export const getNotes = callback => firebase.firestore().collection('notes').orderBy('datePost', 'desc')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        name: 'nombre',
        note: doc.data().note,
        date: doc.data().datePost,
      });
      console.log(doc.id);
    });
    console.log(data);
    callback(data);
  });
  */

/* const deleteNote = idNote => firebase.firestore().collection('notes').doc(idNote).delete(); */
