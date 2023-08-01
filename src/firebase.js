// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA0M0oEWT1RWjMKF-j4iRz6J9rZ9FiE9tY",
  authDomain: "zasagt-khaann.firebaseapp.com",
  projectId: "zasagt-khaann",
  storageBucket: "zasagt-khaann.appspot.com",
  messagingSenderId: "465508234000",
  appId: "1:465508234000:web:0060957722fe4dff2d6b95",
  measurementId: "G-T4PR1X4HVT"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);