import SignUpForm from "../../components/sign-up-form";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1> Sign In Page</h1>
      <button onClick={logGoogleUser}>Sing In with Google Popup</button>

      <SignUpForm />
    </div>
  );
}

export default SignIn;
