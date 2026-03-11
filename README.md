import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmjOYCPZ7e4BODsbRPgt5nH7htxMUn3zc",
  authDomain: "inventory-tracker-app-1103.firebaseapp.com",
  databaseURL: "https://inventory-tracker-app-1103-default-rtdb.firebaseio.com",
  projectId: "inventory-tracker-app-1103",
  storageBucket: "inventory-tracker-app-1103.firebasestorage.app",
  messagingSenderId: "182434735238",
  appId: "1:182434735238:web:0fff350fdbcbf828f99d07"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);