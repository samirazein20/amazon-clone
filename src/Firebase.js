import firebase from "firebase";
import reducer from "./reducer";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJo7LJFFbOq9EIB94Mm1IguOdR8y0KMVo",
    authDomain: "clone-dde0a.firebaseapp.com",
    projectId: "clone-dde0a",
    storageBucket: "clone-dde0a.appspot.com",
    messagingSenderId: "1091693183499",
    appId: "1:1091693183499:web:96128e4a6cc7fe5800bd0e",
    measurementId: "G-CNRQKSQ887"
};

//initailize app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);
//initailize the db
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
export default firebase;