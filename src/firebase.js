import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwQjjqFYSbY0faY44jX6afyxFNmvi9XA",
  authDomain: "netflix-clone-5285f.firebaseapp.com",
  projectId: "netflix-clone-5285f",
  storageBucket: "netflix-clone-5285f.appspot.com",
  messagingSenderId: "1043074907145",
  appId: "1:1043074907145:web:8cb579242701c65a3cccd8",
  measurementId: "G-K7D2EGZBN4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;