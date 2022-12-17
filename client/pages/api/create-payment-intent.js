// This is your test secret API key.
const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  let total = 0;
  items.forEach(item => {
    total += item.price * item.quantity
  })
  
  return Math.round(total);
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "pln",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};