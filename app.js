
const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database');

let dataRouter = require('./routes/data/data');

app.use('/', dataRouter);

let server = require('http').Server(app); 

server.listen(4000, function () {
    console.log('listening on *:4000');
});
