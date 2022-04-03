import { initializeApp } from 'firebase/app';
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
initializeApp(firebaseConfig);
export const db = getFirestore();
