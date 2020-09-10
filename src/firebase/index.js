import * as firebase from "firebase/app"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBDgeH8RsYg874jHxWaJX-eePvOUK-OMtQ",
    authDomain: "ecommerce-wasserman.firebaseapp.com",
    databaseURL: "https://ecommerce-wasserman.firebaseio.com",
    projectId: "ecommerce-wasserman",
    storageBucket: "ecommerce-wasserman.appspot.com",
    messagingSenderId: "570005213077",
    appId: "1:570005213077:web:b87c22367fddb58978f09c",
    measurementId: "G-GHL80WKV4G"
  });


  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }