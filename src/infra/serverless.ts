// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrU0ZuBwIuZAf4hDSRonUhCLNqP2qvR9s',
  authDomain: 'pagabner7.firebaseapp.com',
  projectId: 'pagabner7',
  storageBucket: 'pagabner7.appspot.com',
  messagingSenderId: '164999511814',
  appId: '1:164999511814:web:dbcfc3441d289cd6d06887',
  measurementId: 'G-KEC60Z1KR1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
