import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYJYYuCWVZ33K2wMsgsfc6NgjZwljFlag",
  authDomain: "funny-movies-5fcac.firebaseapp.com",
  projectId: "funny-movies-5fcac",
  storageBucket: "funny-movies-5fcac.appspot.com",
  messagingSenderId: "949853854373",
  appId: "1:949853854373:web:ab048539cbba867b424b4c"
};



firebase.initializeApp(firebaseConfig);

export default firebase.database();