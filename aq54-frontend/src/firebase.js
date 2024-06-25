// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA9R-b5j5p2MUWpFuD1w3UBFHjDz2bh0rs",
    authDomain: "airqualityapp-e6493.firebaseapp.com",
    projectId: "airqualityapp-e6493",
    storageBucket: "airqualityapp-e6493.appspot.com",
    messagingSenderId: "381836474393",
    appId: "1:381836474393:web:4f6675341f7a9e855b9288"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;