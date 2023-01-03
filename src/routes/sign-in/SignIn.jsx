import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    const userDocRef = await createUserDocFromAuth(response.user);
    console.log("userDocRef: ", userDocRef);
  };

  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}>Sing In with Google Popup</button>
    </div>
  );
}

export default SignIn;
