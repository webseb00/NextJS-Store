import React, { useState, useEffect } from 'react'
import { 
  PaymentElement,
  useStripe, 
  useElements,
  AddressElement
} from '@stripe/react-stripe-js';
import { Container, Row, Col } from 'react-grid-system'
import styles from '../styles/CheckoutForm.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';

const CheckoutForm = () => {

  const { items } = useSelector(state => state)

  const stripe = useStripe();
  const elements = useElements();
  const [object, setObject] = useState(null)
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postOrderDetails = async (data) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` 
      },
      body: JSON.stringify({
        data: {
          stripeId: data.id,
          email: 'test@email.com',
          details: {
            customer: {
              address: data.shipping.address,
              full_name: data.shipping.name,
              phone: data.shipping.phone
            },
            amount: data.amount,
            currency: data.currency,
            products: items
          }
        }
      })
        
    })  
  }

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          setObject({ ...paymentIntent });
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      }
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    await postOrderDetails(object);

    setIsLoading(false);
  }

  const paymentElementOptions = {
    layout: "tabs",
    mode: "billing"
  };

  const addressElementOptions = {
    mode: "shipping"
  }

  return (
    <div className={styles.checkout}>
      <Container>
        <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Col md={6}>
            <form id="payment-form" className={styles.checkout__form} onSubmit={handleSubmit}>
              <PaymentElement id="payment-element" options={paymentElementOptions} />
              <AddressElement options={addressElementOptions} />
              <button className={styles.checkout__payment_btn} disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                  {isLoading ? <BiLoaderAlt className={styles.checkout__spinner} /> : "Pay now"}
                </span>
              </button>
              {/* Show any error or success messages */}
              {message && <div id="payment-message">{message}</div>}
            </form>
            <div>
              <Link
                href="/"
                className={styles.checkout__link}
              >
                Back to Shop
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutForm;