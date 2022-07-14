const express = require('express');
const payload = require('payload');

require('dotenv').config();
const app = express();

// Initialize Payload
payload.init({  
  license: process.env.PAYLOAD_LICENSE_KEY,
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app
});

// Add your own express routes here
app.listen(3000, async () => {
  console.log('Express is now listening for incoming connections on port 3000.')
});
