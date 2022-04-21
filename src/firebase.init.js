// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcyBDhItvaIdetpBfe4GMqsylqyHaTzt0",
  authDomain: "independent-service-prov-47fa3.firebaseapp.com",
  projectId: "independent-service-prov-47fa3",
  storageBucket: "independent-service-prov-47fa3.appspot.com",
  messagingSenderId: "1030034862843",
  appId: "1:1030034862843:web:4d3907e1e05029e25ff65e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;