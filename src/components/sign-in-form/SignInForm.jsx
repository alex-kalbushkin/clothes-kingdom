import { useCallback, useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";
import { Button } from "../button";
import FormInput from "../form-input";
import styles from "./sign-in-form.styles.module.scss";

const initialFormFieldsState = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(initialFormFieldsState);
  const { email, password } = formFields;

  const resetFormFields = useCallback(() => {
    setFormFields(initialFormFieldsState);
  }, []);

  const handleSignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles.signInFormContainer}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} autoComplete="new-password">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <div className={styles.signInButtonsContainer}>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={handleSignInWithGoogle}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
