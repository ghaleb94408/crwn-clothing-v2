import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYzRCGpILN4GaKSbJeFnfKcsDSALtzaao",
  authDomain: "crwn-clothing-db-d7b29.firebaseapp.com",
  projectId: "crwn-clothing-db-d7b29",
  storageBucket: "crwn-clothing-db-d7b29.appspot.com",
  messagingSenderId: "625333851590",
  appId: "1:625333851590:web:fd8ef390132e10bfe78ec7",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // 1) Check if user exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
      console.log("done");
    } catch (err) {
      console.log("Error creating user", err);
    }
  } else {
    console.log("not done");
  }
  return userDocRef;
};
