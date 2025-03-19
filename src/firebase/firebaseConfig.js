// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzm1oUms_mPh5xIkvF_kHXBtGMlV6NTuI",
  authDomain: "ai-with-brendy.firebaseapp.com",
  projectId: "ai-with-brendy",
  storageBucket: "ai-with-brendy.firebasestorage.app",
  messagingSenderId: "629039808718",
  appId: "1:629039808718:web:297f9735a2f3818ab1109f",
  measurementId: "G-VZKHXK4P7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
