//import { initializeApp } from "firebase/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
 import firebase from "firebase/compat/app";
// import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCzs0F5DaWGUM6jiN4BK_TOItybHAHwpwU",
    authDomain: "chatapp-d12fa.firebaseapp.com",
    projectId: "chatapp-d12fa",
    storageBucket: "chatapp-d12fa.appspot.com",
    messagingSenderId: "958054327196",
    appId: "1:958054327196:web:a08ded94e79d12515a1e59"
  
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