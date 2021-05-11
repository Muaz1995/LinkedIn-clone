// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBS_yvZJRfsgRa5H81tIE1l_vgReksy41E",
    authDomain: "fir-a3f6d.firebaseapp.com",
    projectId: "fir-a3f6d",
    storageBucket: "fir-a3f6d.appspot.com",
    messagingSenderId: "325774755249",
    appId: "1:325774755249:web:72725aace8c7a0fecd2990",
    measurementId: "G-W4Q2MF12VH"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };