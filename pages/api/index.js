// index.js
const express = require('express');
const serverless = require('serverless-http');  // <-- Import wrapper
const app = express();

// Your routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Export the app as a serverless function
module.exports.handler = serverless(app);
