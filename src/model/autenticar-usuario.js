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
