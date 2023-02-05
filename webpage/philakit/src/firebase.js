// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhcjaJ7LrtwIcI8DIZ9IqD94KjXfJWDM",
  authDomain: "philakit-d80a4.firebaseapp.com",
  projectId: "philakit-d80a4",
  storageBucket: "philakit-d80a4.appspot.com",
  messagingSenderId: "790573426076",
  appId: "1:790573426076:web:e017d828417507cba31459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;