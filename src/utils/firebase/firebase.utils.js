import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// config from the firebase site
const firebaseConfig = {
  apiKey: "AIzaSyAYzRCGpILN4GaKSbJeFnfKcsDSALtzaao",
  authDomain: "crwn-clothing-db-d7b29.firebaseapp.com",
  projectId: "crwn-clothing-db-d7b29",
  storageBucket: "crwn-clothing-db-d7b29.appspot.com",
  messagingSenderId: "625333851590",
  appId: "1:625333851590:web:fd8ef390132e10bfe78ec7",
};
const firebaseApp = initializeApp(firebaseConfig);
// To use google auth we need to set a provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  // When a user interacts with our provider we always force them to select an account.
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
// Create DB
export const db = getFirestore();
// Take data from authentication and store it in DB
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // 1) Check if user exists
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
      console.log("done");
    } catch (err) {
      console.log("Error creating user", err);
    }
  }
  return userDocRef;
};
