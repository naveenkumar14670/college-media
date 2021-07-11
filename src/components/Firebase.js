import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBmb32AA2UAAtKcfO2VlJnNtBmCJOYwtY",
  authDomain: "college-media-cc999.firebaseapp.com",
  projectId: "college-media-cc999",
  storageBucket: "college-media-cc999.appspot.com",
  messagingSenderId: "358312171789",
  appId: "1:358312171789:web:6ffa4ab0565bc6f8c8b844",
  measurementId: "G-8JVC9W1VGZ",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth, firebase };
