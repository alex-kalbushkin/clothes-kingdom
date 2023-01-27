import { Input, FormInputContainer, FormInputLabel } from "./form-input.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <FormInputContainer>
      <Input
        // className={styles.formInput}
        autoComplete="new-password"
        {...otherProps}
      />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          // className={`${otherProps.value.length ? styles.shrink : ""} ${
          //   styles.formInputLabel
          // }`}
        >
          {label}
        </FormInputLabel>
      )}
    </FormInputContainer>
  );
}

export default FormInput;
