import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from "firebase/firestore";
import { handleError } from "./error-handle/handle-error";

// firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "wear-well-db.firebaseapp.com",
  projectId: "wear-well-db",
  storageBucket: "wear-well-db.appspot.com",
  messagingSenderId: "929980133346",
  appId: "1:929980133346:web:b40ec6e3e411be754053bb",
};

// Initialize Firebase
const fbApplication = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if (userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user document", error);
      handleError(error, "error occurred while creating the user document");
    }
  }
};
