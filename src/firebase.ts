import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase//messaging';


const firebaseConfig = {
    apiKey: "AIzaSyDhXQnlJcZ4yp9wP-sFhPypy8rIVq4a_uU",
    authDomain: "bank-app-fef82.firebaseapp.com",
    projectId: "bank-app-fef82",
    storageBucket: "bank-app-fef82.appspot.com",
    messagingSenderId: "280714146507",
    appId: "1:280714146507:web:496e66504803e5dde2614e"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();

const message = getMessaging(app);

export const storage = getStorage(app, firebaseConfig.storageBucket);