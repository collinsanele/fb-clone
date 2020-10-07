import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";






const firebaseConfig = {
    apiKey: "AIzaSyDNrv6Ft81Lf1MMJ33_rzxWlbZXM3CFaeM",
    authDomain: "fb-clone-981ee.firebaseapp.com",
    databaseURL: "https://fb-clone-981ee.firebaseio.com",
    projectId: "fb-clone-981ee",
    storageBucket: "fb-clone-981ee.appspot.com",
    messagingSenderId: "460663397861",
    appId: "1:460663397861:web:9ac1369a04e823a1bf630c",
    measurementId: "G-6RS4X0HKVT"
  };
  
  
  
firebase.initializeApp(firebaseConfig);  



const provider = new firebase.auth.GoogleAuthProvider();

var db = firebase.firestore();

export {provider, db}
  
  