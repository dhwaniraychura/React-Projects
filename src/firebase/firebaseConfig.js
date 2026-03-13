// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhuPMRB0XSGFbcA1iEVCPi8ZkqPlotAs",
  authDomain: "fir-storage-app-82812.firebaseapp.com",
  databaseURL: "https://fir-storage-app-82812-default-rtdb.firebaseio.com/",
  projectId: "fir-storage-app-82812",
  storageBucket: "fir-storage-app-82812.firebasestorage.app",
  messagingSenderId: "634058893552",
  appId: "1:634058893552:web:de68fd91184ea6436e7a35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);  
export default app;