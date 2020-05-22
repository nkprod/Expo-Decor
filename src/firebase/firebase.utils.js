import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDixmc9RI9EAHTENjAKBeY2vpN1mrXrc0M',
  authDomain: 'expodecor-27c1f.firebaseapp.com',
  databaseURL: 'https://expodecor-27c1f.firebaseio.com',
  projectId: 'expodecor-27c1f',
  storageBucket: 'expodecor-27c1f.appspot.com',
  messagingSenderId: '757128251528',
  appId: '1:757128251528:web:36d13918bc2488418fb73d',
  measurementId: 'G-BS1VT6BR8K',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
