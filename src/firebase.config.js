// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjwAOys_0Vn2Y8y1E8FUF2EeACS-u6RNc',
  authDomain: 'house-marketplace-app-4cb05.firebaseapp.com',
  projectId: 'house-marketplace-app-4cb05',
  storageBucket: 'house-marketplace-app-4cb05.appspot.com',
  messagingSenderId: '751431557543',
  appId: '1:751431557543:web:72f9cffb51f38101815682',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();
