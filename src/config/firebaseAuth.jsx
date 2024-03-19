
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAsEK11v54-g-uiW_MnXoaiFuT_eGmJVos",
  authDomain: "umbrellas-smart-auth.firebaseapp.com",
  projectId: "umbrellas-smart-auth",
  storageBucket: "umbrellas-smart-auth.appspot.com",
  messagingSenderId: "853050541221",
  appId: "1:853050541221:web:e62a9991c573e19420394c",
  measurementId: "G-RZRCL8BRPS"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
