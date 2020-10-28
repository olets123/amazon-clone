const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HdBVpA6rg4sOpbbpM0jdsKFTBfDLtDgYobRTlkwQMZqxq8PWsCdaszgw13Gq105h3mC3BYFcTff2J2B1tZZC18e00A61OVeRY');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// API routes
app.get('/', (request, response) => response.status(200).send(
    'hello world'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('PAYMENT REQUEST RECIEVED BOOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})


// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint:
// http://localhost:5001/challenge-a016d/us-central1/api


