require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = JSON.parse(req.body);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).json({ message: 'Payment successful', paymentIntent });
  } catch (error) {
    console.log('paymentIntentError: ', error);

    res.status(500).json({ error });
  }
});

module.exports.handler = async (event, context) => {
  return app(event, context);
};

// exports.handler = async (event) => {
//   try {
//     const { amount } = JSON.parse(event.body);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method_types: ['card'],
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ paymentIntent }),
//     };
//   } catch (error) {
//     console.log('paymentIntentError: ', error);

//     return {
//       statusCode: 400,
//       body: JSON.stringify({ error }),
//     };
//   }
// };
