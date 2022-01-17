import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB273_aXpEtNuCl3ywwhE6V42WYqgGx0os",
  authDomain: "alta-vida-test1.firebaseapp.com",
  projectId: "alta-vida-test1",
  storageBucket: "alta-vida-test1.appspot.com",
  messagingSenderId: "71918851531",
  appId: "1:71918851531:web:b775647a9a856379a4924e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;