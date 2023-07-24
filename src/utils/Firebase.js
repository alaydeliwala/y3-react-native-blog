import firebase from "firebase"

// TODO: Replace this with config from Firebase
const firebaseConfig = {};

function initFirebase(){
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}

const firebaseApp = initFirebase();

export const db = firebase.firestore();






