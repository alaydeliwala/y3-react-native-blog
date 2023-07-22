import firebase from "firebase"

// TODO: Replace this with config from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDjmrCL6RGw_-Ms2odVALg45gRJr0bQaEs",
  authDomain: "react-app-playground-fa619.firebaseapp.com",
  projectId: "react-app-playground-fa619",
  storageBucket: "react-app-playground-fa619.appspot.com",
  messagingSenderId: "989038417452",
  appId: "1:989038417452:web:eda919e90057295d11e389",
  measurementId: "G-WTB091DFB4"
};

function initFirebase(){
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}

const firebaseApp = initFirebase();

export const db = firebase.firestore();






