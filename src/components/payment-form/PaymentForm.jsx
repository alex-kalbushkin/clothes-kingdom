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

    const paymentIntentResponse = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 10000 }),
      }
    ).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = paymentIntentResponse;

    const cardDetails = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      client_secret,
      {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: 'Test User',
          },
        },
      }
    );

    if (error) {
      console.log('paymentConfirmError: ', error);
    } else {
      if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Payment successful!');
      }
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
