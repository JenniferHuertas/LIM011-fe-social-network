/* eslint-disable no-console */
// Posts:
export const addNote = objectPost => firebase.firestore().collection('notes').add(objectPost);

/* function addNote2(objectPost) {
  return firebase.firestore().collection('notes').add(objectPost);
} */
export const getNotes = callback => firebase.firestore().collection('notes')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
      console.log(doc.id);
    });
    console.log(data);
    callback(data);
  });

/* const deleteNote = idNote => firebase.firestore().collection('notes').doc(idNote).delete(); */
