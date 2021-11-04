import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
