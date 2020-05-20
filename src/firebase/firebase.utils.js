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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
