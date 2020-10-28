import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCficmqkLrn7LEkSiOgW4NGqSkecWnVT8A",
  authDomain: "challenge-a016d.firebaseapp.com",
  databaseURL: "https://challenge-a016d.firebaseio.com",
  projectId: "challenge-a016d",
  storageBucket: "challenge-a016d.appspot.com",
  messagingSenderId: "1004612661875",
  appId: "1:1004612661875:web:4ac6dd453c542c588f3006",
  measurementId: "G-P5SPM00NKS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };