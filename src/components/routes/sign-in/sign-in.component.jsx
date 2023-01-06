// import { useEffect } from "react";
// import { getRedirectResult, signInWithRedirect } from "firebase/auth";
// import {
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
//   auth,
// } from "../../../utils/firebase/firebase.utils";
// const SignIn = () => {
//   useEffect(() => {
//     const response = async () => {
//       const res = await getRedirectResult(auth);
//       if (res) {
//         const userDocRef = await createUserDocumentFromAuth(res.user);
//       }
//       return "Done";
//     };
//     console.log(response().then((value) => console.log(value)));
//   }, []);
//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };

//   return (
//     <div>
//       <h1>Sign in page</h1>
//       <button onClick={logGoogleUser}>Sign in with google</button>
//       <button onClick={signInWithGoogleRedirect}>
//         Sign in with google redirect
//       </button>
//     </div>
//   );
// };
// export default SignIn;
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // Add user to DB
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in please</h1>
      <button onClick={logGoogleUser}>Sign in bitte</button>
    </div>
  );
};
export default signIn;
