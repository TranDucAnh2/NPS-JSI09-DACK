 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM--ut-1dE8AZk0I5K9WA9ZsA8zE5QRmM",
    authDomain: "login-a3404.firebaseapp.com",
    databaseURL: "https://login-a3404-default-rtdb.firebaseio.com",
    projectId: "login-a3404",
    storageBucket: "login-a3404.appspot.com",
    messagingSenderId: "141263310595",
    appId: "1:141263310595:web:ddf6308077f6ea7aa4e336"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth();

signupbtn.addEventListener('click', (e) => {

    var email = document.getElementById ('email').value;
    var passwrod = document.getElementById ('password').value;
    

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        alert('user created')
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    // ..
    });
})