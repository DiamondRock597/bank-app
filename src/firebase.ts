import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYS-Wg6yaRFTuAxhJmukFhuYom6UQbrNA",
    authDomain: "tinkoff-8d153.firebaseapp.com",
    projectId: "tinkoff-8d153",
    storageBucket: "tinkoff-8d153.appspot.com",
    messagingSenderId: "46821099816",
    appId: "1:46821099816:web:1b42cce06c97f4ff9f281d"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
