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



// bot.command('ethereum', ctx => {
//   var rate;
//   console.log(ctx.from)
//   axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
//   .then(response => {
//     console.log(response.data)
//     rate = response.data.ethereum
//     const message = `Hello, today the ethereum price is ${rate.usd}USD`
//     bot.telegram.sendMessage(ctx.chat.id, message, {
//     })
//   })
// })
const serverStart = () => {
  botFile.botStart();

}
serverStart();