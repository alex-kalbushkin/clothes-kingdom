import {
  BasicButton,
  InvertedButton,
  GoogleSignInButton,
} from "./button.styles.jsx";

export const BUTTON_CLASSES = {
  basic: "basic",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_CLASSES.basic) =>
  ({
    [BUTTON_CLASSES.basic]: BasicButton,
    [BUTTON_CLASSES.google]: GoogleSignInButton,
    [BUTTON_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export function Button({ children, buttonType, ...otherProps }) {
  const ButtonCustomComponent = getButton(buttonType);
  return (
    <ButtonCustomComponent {...otherProps}>{children}</ButtonCustomComponent>
  );
}
