// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDocs,
  orderBy,
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
export const auth = getAuth(app);

// Write user data to Realtime Database
export async function writeUserData(userID, name, email, tweetID) {
  await setDoc(doc(firestore, "users", userID), {
    username: name,
    email: email,
    tweets: [],
    followers: [],
    following: [],
  });
}

// Check if user logged in

export function isLoggedIn() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
      unsubscribe();
    });
  });
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
      writeUserData(user.uid, username, email, []);
      //logInUser(email, password);
      alert("Created new user and signed in");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
      alert("user not created");

      // ..
    });
}

// Log user in
export function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      //const user = userCredential.user;
      // ...
      alert("You are logged in!");
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("error code: " + errorCode);
      console.error("error message: " + errorMessage);
      alert("This account does not exist please use signup instead");
      return false;
    });
}

// log out current user
export function logOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Sign out successful!");
      window.location.reload(false);
    })
    .catch((error) => {
      // An error happened.
    });
}

// add tweet to user profile
async function addTweetToUser(docID, userID) {
  const user = doc(firestore, "users", userID);
  try {
    await updateDoc(user, {
      tweets: arrayUnion(docID),
    });
  } catch (error) {
    console.log(error);
  }
}

// Upload tweet to firestore database
export async function uploadTweet(tweet, uid) {
  const docRef = await addDoc(collection(firestore, "tweets"), {
    time: serverTimestamp(),
    tweet: tweet,
    userID: uid,
    username: await getUsername(uid),
  });
  console.log("Document written with ID: ", docRef.id);
  addTweetToUser(docRef.id, uid);
}

// gets all tweets from firestore
export async function getTweets() {
  try {
    const tweetsCollection = query(
      collection(firestore, "tweets"),
      orderBy("time", "desc")
    );
    const querySnapshot = await getDocs(tweetsCollection);
    var usersTweets = {};
    querySnapshot.forEach((doc) => {
      usersTweets[doc.id] = doc.data();
    });
    return Object.entries(usersTweets);
  } catch (error) {
    console.error(error);
  }
}

export async function getUsername(uid) {
  const docRef = doc(firestore, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().username;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export default isLoggedIn;
