import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYJYYuCWVZ33K2wMsgsfc6NgjZwljFlag",
  authDomain: "funny-movies-5fcac.firebaseapp.com",
  projectId: "funny-movies-5fcac",
  storageBucket: "funny-movies-5fcac.appspot.com",
  messagingSenderId: "949853854373",
  appId: "1:949853854373:web:ab048539cbba867b424b4c",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signInWithEmailAndPassword = async (email: string, password: string) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {})
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/user-not-found":
          registerWithEmailAndPassword(email, password);
          break;
        default:
          alert(error?.message || "An unexpected error has occurred!");
          return;
      }
    });
};

const registerWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Register account successfully!");
    })
    .catch((error) => {
      alert(error?.message || "An unexpected error has occurred!");
    });
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};

export default firebase.database();
