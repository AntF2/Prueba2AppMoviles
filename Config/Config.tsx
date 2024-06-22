// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGsuOXtSTtv6IQYlCK7nYfse5IilSSH_c",
  authDomain: "prueba2-b1e01.firebaseapp.com",
  projectId: "prueba2-b1e01",
  storageBucket: "prueba2-b1e01.appspot.com",
  messagingSenderId: "908797854153",
  appId: "1:908797854153:web:0b29c20b56cab36c43e818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);


// Initialize Database and Storage
export const db = getDatabase(app);
export const storage = getStorage(app);
