// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0gpXx8Zh2xFI-iantv5GMlNTmsRyl9wc',
  authDomain: 'chat-app-66c3c.firebaseapp.com',
  projectId: 'chat-app-66c3c',
  storageBucket: 'chat-app-66c3c.appspot.com',
  messagingSenderId: '827157687980',
  appId: '1:827157687980:web:d320744b6c1de06547f909',
  measurementId: 'G-SSB05YW3KN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
