import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDO3d35RjEn0A2ZtLiD2dUSNjZsaBTkwF8",
    authDomain: "whatsappclone-a915e.firebaseapp.com",
    databaseURL: "https://whatsappclone-a915e.firebaseio.com",
    projectId: "whatsappclone-a915e",
    storageBucket: "whatsappclone-a915e.appspot.com",
    messagingSenderId: "193156283159",
    appId: "1:193156283159:web:2f4643da432e2a5d03d552",
    measurementId: "G-GDP6NF8YV7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;
