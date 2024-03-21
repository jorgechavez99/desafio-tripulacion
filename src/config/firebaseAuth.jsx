import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsEK11v54-g-uiW_MnXoaiFuT_eGmJVos",
  authDomain: "umbrellas-smart-auth.firebaseapp.com",
  projectId: "umbrellas-smart-auth",
  storageBucket: "umbrellas-smart-auth.appspot.com",
  messagingSenderId: "853050541221",
  appId: "1:853050541221:web:e62a9991c573e19420394c",
  measurementId: "G-RZRCL8BRPS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Configura la persistencia de la sesión de usuario
setPersistence(auth, browserSessionPersistence);

export { auth, firestore };