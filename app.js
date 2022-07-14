
const express = require('express');
const payload = require('payload');

require('dotenv').config();
const app = express();
var port = process.env.PORT || 3000

// Initialize Payload
payload.init({
    license: '49fa7d22-3917-4013-bc25-071391ee19ff',
    secret: 'Crystalball007',
    mongoURL: 'mongodb+srv://starmarketing:Crystalball007@cluster0.u64nt.mongodb.net/payloadDev?authSource=admin&replicaSet=atlas-cnbwsk-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    express: app
  });  

app.listen(port, async () => {
    console.log('Express is now listening for incoming connections on port 3000.')
  });
  