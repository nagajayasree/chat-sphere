import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCaGY8rTVNQcE3aRrBjXBcOL0YsHzzPYyY',
  authDomain: 'chatsphere-5b37f.firebaseapp.com',
  projectId: 'chatsphere-5b37f',
  storageBucket: 'chatsphere-5b37f.appspot.com',
  messagingSenderId: '263253089842',
  appId: '1:263253089842:web:f4d069cedb700572f0e62b',
  measurementId: 'G-2RW2CRD5LN',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const user = auth.currentUser;
