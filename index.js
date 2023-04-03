const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);
const transactionParams = {
  amount: 500000, // amount in kobo (i.e. 5000 Naira)
  email: 'customer@example.com',
  reference: 'unique_transaction_reference', // unique reference for transaction
  callback_url: 'https://example.com/callback',
};

paystack.transaction.initialize(transactionParams, (error, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const authorizationUrl = body.data.authorization_url;
  const accessCode = body.data.access_code;

  // redirect the user to the Paystack authorization URL
  // so they can enter their card details and complete the transaction
  console.log(authorizationUrl);
});
