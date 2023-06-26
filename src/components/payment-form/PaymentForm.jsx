import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { Button } from '../button';
import styles from './payment-form.styles.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <div className={styles.paymentFormContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button disabled={!stripe}>Pay now</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
