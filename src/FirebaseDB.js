// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

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
const firestore = getFirestore(app);
const tweets = collection(firestore, "Tweets");
export const auth = getAuth(app);
const db = getDatabase();

// Write user data to Realtime Database
export function writeUserData(userID, name, email) {
  const reference = ref(db, "users/" + userID);
  set(reference, {
    username: name,
    email: email,
  });
}

// Check if user logged in

export function isLoggedIn() {
  const currUser = auth.currentUser;
  if (currUser) {
    return true;
  } else {
    return false;
  }
}

// Get currently logged in user UID
export function getUid() {
  if (isLoggedIn()) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const currUser = auth.currentUser;
    const uid = currUser.uid;
    console.log(uid);
    return uid;
    // ...
  } else {
    alert("Please Log In!");
    console.log("not logged in");
  }
}

// Create new user
export function createNewUser(auth, email, password, username) {
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

// Log user in
export function logInUser(email, password) {
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

// Upload tweet to firestore database
export async function uploadTweet(tweet, uid) {
  try {
    const docRef = await addDoc(collection(firestore, uid), {
      time: serverTimestamp(),
      tweet: tweet,
    });

    console.log("Document written with ID: ", docRef.id);
    console.log("tweet uploaded");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
