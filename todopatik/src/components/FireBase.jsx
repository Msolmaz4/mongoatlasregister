// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//2
import { getAuth } from "firebase/auth";

//3
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBHoiNL8gPxRrd9aGMuUdHb7-ACuLRzpQ",
  authDomain: "todoomer-3472b.firebaseapp.com",
  projectId: "todoomer-3472b",
  storageBucket: "todoomer-3472b.appspot.com",
  messagingSenderId: "229617190934",
  appId: "1:229617190934:web:49a0655e94b63d58594d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//2
//bunu doc goster bu biye firebase app icine kolazxa tamamiyaz yara yukarida sonradan import ediyoruy
//exportu kendimiy yazdik ilk once register gittik 
 export const auth = getAuth(app); 

 //burda biy baglandii saglizoruz ndb kendimiy veriyoruy
 export const db = getFirestore(app)