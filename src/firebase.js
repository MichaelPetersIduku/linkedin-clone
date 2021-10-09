import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXxYmR4vMs2tk_SMZ048o5O4A6GTfznT0",
    authDomain: "linkedin-clone-125e0.firebaseapp.com",
    projectId: "linkedin-clone-125e0",
    storageBucket: "linkedin-clone-125e0.appspot.com",
    messagingSenderId: "800762809687",
    appId: "1:800762809687:web:2b2ee9ce670c08e3cac212"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export {auth, provider, storage};
export default db;