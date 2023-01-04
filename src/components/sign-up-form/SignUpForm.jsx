import { useCallback, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase";

const initialFormFieldsState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFieldsState);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const userCredentials = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredentials) {
        await createUserDocFromAuth(userCredentials.user, {
          displayName,
        });
      }

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      } else {
        console.log("user creation encountered an error: ", error);
      }
    }
  };

  const resetFormFields = useCallback(() => {
    setFormFields(initialFormFieldsState);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>Display Name</label>
      <input
        type="text"
        required
        name="displayName"
        value={displayName}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        required
        name="email"
        value={email}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        required
        name="password"
        value={password}
        onChange={handleChange}
      />

      <label>Confirm Password</label>
      <input
        type="password"
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
