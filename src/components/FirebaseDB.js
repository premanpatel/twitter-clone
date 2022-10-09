// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNeq6JzHqtWUZbU8o9iqql4RaIc1dlHuc",
  authDomain: "twitter-clone-8869e.firebaseapp.com",
  databaseURL: "https://twitter-clone-8869e-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-8869e",
  storageBucket: "twitter-clone-8869e.appspot.com",
  messagingSenderId: "654546115962",
  appId: "1:654546115962:web:7b6ab733068000c2e80ac3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export function writeUserData(userID, name, email){
    const db = getDatabase();
    const reference = ref(db, 'users/' + userID);
    set(reference, {
        username: name,
        email: email,
    });
}

export function createNewUser(auth, email, password, username){
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        writeUserData(user.uid, username, email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.warn(errorCode);
        console.warn(errorMessage);

        // ..
      });
}

export function logInUser(auth, email, password){
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}


