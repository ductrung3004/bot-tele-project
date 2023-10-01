const express = require('express')
const expressApp = express()
const axios = require("axios");
const path = require("path");
const botFile = require('./bot/bot');
const port = process.env.PORT || 3000;

expressApp.use(express.static('static'))
expressApp.use(express.json());
require('dotenv').config();


expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


const serverStart = () => {
  botFile.botStart();

}
serverStart();