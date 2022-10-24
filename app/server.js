const express = require('express');
const createGiftCard = require('./services/createGiftCard.js');
const hello = require('./services/hello.js');
// bring in express framework
const server = express();


// set up basic health check
server.get('/', hello.helloWorld);
server.get('/hello', hello.helloWorld);

// endpoint for creating gift cards
server.get('/giftCards', createGiftCard.create);



// listen on 8080
console.log('Listening on 8080');
server.listen(8080);
