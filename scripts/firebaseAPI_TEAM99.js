//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDn8FivQDs44tUPLH2YSlk3Fy1lkaKtzHo",
    authDomain: "myhike-b7cb6.firebaseapp.com",
    projectId: "myhike-b7cb6",
    storageBucket: "myhike-b7cb6.appspot.com",
    messagingSenderId: "398306346467",
    appId: "1:398306346467:web:63fdae9f39e1f571948cd6",
    measurementId: "G-E7306KNFMF"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
