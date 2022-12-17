import React, { useState, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutForm, Layout } from '../components';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const Checkout = () => {

  const { items } = useSelector(state => state)
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items })
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret))

  }, [])

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance
  };

  return (
      <div>
        {clientSecret && 
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>}
      </div>
  )
}

export default Checkout