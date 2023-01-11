import styles from "./form-input.styles.module.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className={styles.formInputContainer}>
      <input className={styles.formInput} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? styles.shrink : ""} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
