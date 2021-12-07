import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALKCR8wHm_nQ4lIpzE_LVifyhiQncTSvI",
  authDomain: "agenda-db043.firebaseapp.com",
  projectId: "agenda-db043",
  storageBucket: "agenda-db043.appspot.com",
  messagingSenderId: "1067993836259",
  appId: "1:1067993836259:web:abbb0c4e15fd654f4f73d6"
};

const app = initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;