import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firebaseDB = firebase.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;