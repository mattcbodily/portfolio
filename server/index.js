require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const {SERVER_PORT} = process.env;
const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(json());

const serverPort = SERVER_PORT || 5100;
app.listen(serverPort, () => console.log(`Coding is happening on port ${serverPort}`))