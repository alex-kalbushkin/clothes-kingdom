import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useEffect, useState } from 'react';

import { Button } from '../button';
import styles from './payment-form.styles.module.scss';

const PaymentForm = () => {
  const [isPaymentInProgress, setIsPaymentInProgress] = useState(false);
  const [paymentStatusMessage, setPaymentStatusMessage] = useState('');
  const [isErrorExists, setIsErrorExists] = useState(false);

  useEffect(() => {
    if (paymentStatusMessage) {
      setTimeout(() => {
        setPaymentStatusMessage('');
        setIsErrorExists(false);
      }, 7000);
    }
  }, [paymentStatusMessage, isErrorExists]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsPaymentInProgress(true);

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

    setIsPaymentInProgress(false);

    if (error) {
      setPaymentStatusMessage(`${error.message}`);
      setIsErrorExists(true);
    } else {
      if (paymentIntent && paymentIntent.status === 'succeeded') {
        setPaymentStatusMessage('Payment successful!');
      }
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <div
        className={`
        ${styles.paymentStatusMessage} 
        ${paymentStatusMessage && !isErrorExists ? styles.successMessage : ''} 
        ${paymentStatusMessage && isErrorExists ? styles.errorMessage : ''}`}
      >
        {paymentStatusMessage}
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          disabled={!stripe || isPaymentInProgress}
          isLoading={isPaymentInProgress}
        >
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
