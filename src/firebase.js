import firebase from 'firebase/compat/app'; // Update import statement
import 'firebase/compat/firestore'; // Update import statement
import 'firebase/compat/auth'; // Add import for authentication
import 'firebase/compat/auth'; // Add import for storage

const firebaseConfig = {
  apiKey: "AIzaSyBNOEpUY1iTAZOkksNZkftHMTeqsxH7zI8",
  authDomain: "linkedin-clone-pr-104d8.firebaseapp.com",
  projectId: "linkedin-clone-pr-104d8",
  storageBucket: "linkedin-clone-pr-104d8.appspot.com",
  messagingSenderId: "431417618751",
  appId: "1:431417618751:web:9f89a5523a5ed1277d638a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); // Initialize Firebase authentication

export { db, auth }; // Export authentication module along with firestore
