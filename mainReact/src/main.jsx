import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlPfaepcPI02JHboSlMW9rom_4Es_OuE",
  authDomain: "coderhouse-reactjs-a6fc5.firebaseapp.com",
  projectId: "coderhouse-reactjs-a6fc5",
  storageBucket: "coderhouse-reactjs-a6fc5.appspot.com",
  messagingSenderId: "455782482121",
  appId: "1:455782482121:web:a8f12a5a989acb6d76cd18"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)