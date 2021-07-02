import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC33NlXsS48oPR7VP8_f4thoXX11AGhZaE",
  authDomain: "tiktokclone-fbefa.firebaseapp.com",
  projectId: "tiktokclone-fbefa",
  storageBucket: "tiktokclone-fbefa.appspot.com",
  messagingSenderId: "282822798397",
  appId: "1:282822798397:web:405444bacd81943e958e54",
  measurementId: "G-3YDM57EC60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
//export default db;
