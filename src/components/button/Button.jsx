import styles from "./button.styles.module.scss";

const BUTTON_CLASSES = {
  google: styles.googleSignInButton,
  inverted: styles.invertedButton,
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${styles.button} ${BUTTON_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
