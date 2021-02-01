//untility method
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    // input SDK in your firebase
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;


