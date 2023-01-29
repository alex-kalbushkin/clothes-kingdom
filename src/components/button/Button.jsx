import styles from "./button.styles.module.scss";

export const BUTTON_CLASSES = {
  google: styles.googleButton,
  inverted: styles.inverted,
};

export function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`${styles.button} ${BUTTON_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
