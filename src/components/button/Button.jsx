import { ButtonSpinner } from '../buttonSpinner';
import styles from './button.styles.module.scss';

const BUTTON_CLASSES = {
  google: styles.googleButton,
  inverted: styles.inverted,
};

export function Button({
  children,
  buttonType,
  isLoading,
  disabled,
  ...otherProps
}) {
  return (
    <button
      className={`
      ${styles.button} 
      ${BUTTON_CLASSES[buttonType]} 
      ${disabled && styles.buttonDisabled}
      `}
      {...otherProps}
    >
      {isLoading ? <ButtonSpinner /> : children}
    </button>
  );
}
