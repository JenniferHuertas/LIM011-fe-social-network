export const addUserData = (userId, userObj) => {
  const result = firebase.firestore().collection('users').doc(userId).set(userObj);
  return result;
};

export const getUserData = idUser => firebase.firestore().collection('users').doc(idUser).get();

export const updateProfile = (idProfile, newTextProfileName,
  newcountry) => {
  const result = firebase.firestore().collection('users').doc(idProfile).update({
    displayName: newTextProfileName,
    country: newcountry,
  });
  return result;
};
