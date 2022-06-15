import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbwpir8F0zd1OtepB_0jxOioa6QMl3DA",
  authDomain: "blog-app-97efc.firebaseapp.com",
  databaseURL: "https://blog-app-97efc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-app-97efc",
  storageBucket: "blog-app-97efc.appspot.com",
  messagingSenderId: "359582917510",
  appId: "1:359582917510:web:a1d153dc1cb44477a4c207"
};

// Initialize Firebase
const firebaseUtil = initializeApp(firebaseConfig);

export default firebaseUtil;

export const auth = getAuth(firebaseUtil);
export const googleProvider = new GoogleAuthProvider();
export const firebaseDB = getDatabase(firebaseUtil);