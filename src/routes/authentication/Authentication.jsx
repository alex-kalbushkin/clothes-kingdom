import SignInForm from "../../components/sign-in-form";
import SignUpForm from "../../components/sign-up-form";
import { SignInPageFormsMainContainer } from "./authentication.styles";

function Authentication() {
  return (
    <SignInPageFormsMainContainer>
      <SignInForm />
      <SignUpForm />
    </SignInPageFormsMainContainer>
  );
}

export default Authentication;
