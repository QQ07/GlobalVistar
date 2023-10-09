// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyA43T15fsKAdi0TA7bfzahBwikMp2aCWn0",

  authDomain: "global-vistar-4282b.firebaseapp.com",

  projectId: "global-vistar-4282b",

  storageBucket: "global-vistar-4282b.appspot.com",

  messagingSenderId: "206001117506",

  appId: "1:206001117506:web:de184ffaa194421caa90db",

  measurementId: "G-Q0X49FLSHJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 

export { app, auth, db, storage };


// const analytics = getAnalytics(app);
