const axios = require('axios');

const secretKey = 'sk_test_8d06c62c4e9be2494b4b1afe6195ed677369ad5e';
const headers = {
  Authorization: `Bearer ${secretKey}`,
};

axios.post('https://api.paystack.co/transaction/initialize', {
  amount: 500, // amount in kobo (i.e. 5000 Naira)
  email: 'customer@example.com',
//   reference: 'unique_transaction_reference', // unique reference for transaction
  callback_url: 'https://example.com/callback',
}, { headers })
  .then((response) => {
    const authorizationUrl = response.data.data.authorization_url;
    const accessCode = response.data.data.access_code;

    // redirect the user to the Paystack authorization URL
    // so they can enter their card details and complete the transaction
    console.log(authorizationUrl);
  })
  .catch((error) => {
    console.log(error);
  });
