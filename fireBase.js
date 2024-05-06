//import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
 import firebase from "firebase/compat/app";
// import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBGyvweJhGJ1l59YstsBh3mF3mPyJY1MEQ",
  authDomain: "chatapp-ed119.firebaseapp.com",
  projectId: "chatapp-ed119",
  storageBucket: "chatapp-ed1r19.appspot.com",
  messagingSenderId: "92893246623",
  appId: "1:92893246623:web:038346e5f7e31844d15eaa"
};

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}


// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);


const db = app.firestore();
const auth = firebase.auth();


export {db,auth}