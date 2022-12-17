
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // apiKey: "AIzaSyD1wrkU34t5OZ-G1MU0-hN6N2rh-6rpnd8",
    // authDomain: "a-59247.firebaseapp.com",
    // projectId: "a-59247",
    // storageBucket: "a-59247.appspot.com",
    // messagingSenderId: "175424162465",
    // appId: "1:175424162465:web:aca7c93cdcf9e821be3ee0",
    // measurementId: "G-BT1QRC58Q6"
   
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export {auth, db};