import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQ4beRnE5ZuA9ssMG-5yYjgg3aDzdGYzw",
    authDomain: "insighttechbd-d4ca9.firebaseapp.com",
    databaseURL: "https://insighttechbd-d4ca9-default-rtdb.firebaseio.com",
    projectId: "insighttechbd-d4ca9",
    storageBucket: "insighttechbd-d4ca9.appspot.com",
    messagingSenderId: "1098584644302",
    appId: "1:1098584644302:web:0136fe69170e369e964e9f"
  };
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();