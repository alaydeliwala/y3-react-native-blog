import firebase from "firebase"

// TODO add firebase credentials
const firebaseConfig = {};

function initFirebase(){
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}

const firebaseApp = initFirebase();

export const db = firebase.firestore();






