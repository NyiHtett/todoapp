// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5msFtqgGBMgszRzcc4IR8CdKLpAyIrK8",
  authDomain: "todoapp-567f7.firebaseapp.com",
  databaseURL: "https://todoapp-567f7-default-rtdb.firebaseio.com",
  projectId: "todoapp-567f7",
  storageBucket: "todoapp-567f7.appspot.com",
  messagingSenderId: "531470857227",
  appId: "1:531470857227:web:3a7809da37b4d7bd98830e",
  measurementId: "G-JS00ZE15X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export {auth, database};