import SignInForm from "../../components/sign-in-form";
import SignUpForm from "../../components/sign-up-form";
import styles from "./authentication.styles.module.scss";

function Authentication() {
  return (
    <div className={styles.signInPageFormsMainContainer}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
