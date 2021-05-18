import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCOEcRhVQScaYa5LQBZNkWz2CVb7D1eew8",
    authDomain: "crwn-db-87ecb.firebaseapp.com",
    projectId: "crwn-db-87ecb",
    storageBucket: "crwn-db-87ecb.appspot.com",
    messagingSenderId: "173459242896",
    appId: "1:173459242896:web:7e940e7d6ac5b3a7f83d15",
    measurementId: "G-NBCT2THF28"
  };

  firebase.initializeApp(config)


export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;