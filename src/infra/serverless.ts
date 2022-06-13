/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app)
