export const inicioSesion = (email, password) => (
    firebase.auth().signInWithEmailAndPassword(email, password));
  
  
  export const registro = (email, password) => (
    firebase.auth().createUserWithEmailAndPassword(email, password));
  
  
  // Usuario:
  export const user = () => firebase.auth().currentUser;
  
  export const addUser = objectUser => firebase.firestore().collection('user').add(objectUser);
  
  
  // Añadir posts:
  export const addNote = objectPost => firebase.firestore().collection('notes').add(objectPost);
  
  
  export const getNotes = callback => firebase.firestore().collection('notes').orderBy('datePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
  
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data() });
      });
  
      console.log(data);
      callback(data);
    });
  
  
  export const deleteNote = idNote => firebase.firestore().collection('notes').doc(idNote).delete();
  