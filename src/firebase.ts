import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
const db = firebase.firestore();

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
      const email = userCredential?.user?.email;
      db.collection("users").doc(email!).set({
        email,
        provider: "local",
      });
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
  db,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
