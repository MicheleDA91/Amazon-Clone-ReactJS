import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE3nZBcOY62iROyAjToAyM_-5fyp883Zg",
  authDomain: "challenge-966e9.firebaseapp.com",
  databaseURL: "https://challenge-966e9.firebaseio.com",
  projectId: "challenge-966e9",
  storageBucket: "challenge-966e9.appspot.com",
  messagingSenderId: "301048003256",
  appId: "1:301048003256:web:092caf77630f864204d24d",
  measurementId: "G-FDF7HL0KE1",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
