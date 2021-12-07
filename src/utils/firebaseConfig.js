import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCa5amiJQxlUcDwMTwilDu90OTL_hk7cww",
  authDomain: "react-games-24595.firebaseapp.com",
  projectId: "react-games-24595",
  storageBucket: "react-games-24595.appspot.com",
  messagingSenderId: "851964920762",
  appId: "1:851964920762:web:2e68d5e2e35bf366b51383"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;