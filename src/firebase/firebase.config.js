// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdGDbdAX2yYHQQKgABq9qgLZF7Yrgp088",
    authDomain: "e-com-with-firebase-auth.firebaseapp.com",
    projectId: "e-com-with-firebase-auth",
    storageBucket: "e-com-with-firebase-auth.appspot.com",
    messagingSenderId: "262009399662",
    appId: "1:262009399662:web:415099b9082a9f3514797f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;