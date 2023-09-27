import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHUXb61pREFSZq_ZNKQdRRTHkjzMQbl4g",
    authDomain: "challenge-74e56.firebaseapp.com",
    projectId: "challenge-74e56",
    storageBucket: "challenge-74e56.appspot.com",
    messagingSenderId: "164229233031",
    appId: "1:164229233031:web:04a07c0d702336ca757b22",
    measurementId: "G-HTTS2HNYBV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };