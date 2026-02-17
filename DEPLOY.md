# PedPay Deployment Guide

## Netlify (Recommended for Chatbot)

To use the PedBot chatbot with the Gemini API:

1. Deploy this folder to [Netlify](https://netlify.com)
2. In Netlify dashboard: Site settings → Environment variables
3. Add `GEMINI_API_KEY` with your Google AI Studio API key
4. Redeploy

The chatbot will call `/.netlify/functions/gemini-proxy` which keeps your API key secure on the server.

## Razorpay Payment Integration

To accept real payments in the marketplace:

1. Create a [Razorpay](https://razorpay.com) account
2. Get your Test/Live Key ID from the dashboard
3. In `marketplace.html`, find `key: 'rzp_test_xxx'` in the checkout handler
4. Replace `rzp_test_xxx` with your Razorpay Key ID
5. For production: create orders via your backend and verify payments server-side
