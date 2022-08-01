 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDP8Ou6tnOtyeEc5W4l8u44xmc1SLXYolg",
   authDomain: "molinatiendatcc.firebaseapp.com",
   projectId: "molinatiendatcc",
   storageBucket: "molinatiendatcc.appspot.com",
   messagingSenderId: "579709266318",
   appId: "1:579709266318:web:a8cf49cbe5eaa498611cdf",
   measurementId: "G-36P4ES3HNC"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);