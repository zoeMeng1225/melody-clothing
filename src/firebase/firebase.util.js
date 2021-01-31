//untility method
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAX_uU2-sg3L06md9OAxwoMoGcAw0k-pzg",
  authDomain: "memory-clothing.firebaseapp.com",
  projectId: "memory-clothing",
  storageBucket: "memory-clothing.appspot.com",
  messagingSenderId: "1024158026697",
  appId: "1:1024158026697:web:30b8c30da6130aa5587618",
  measurementId: "G-GHKLG1CJ1M"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;


