//untility method
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    // input SDK in your firebase
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);  
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...addtionalData
      })
    }catch(error){
      console.log('error create user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;


