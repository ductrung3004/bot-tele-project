const botStart = () => {
  const { Telegraf } = require('telegraf');
  const bot = new Telegraf(process.env.BOT_TOKEN);
  const startCommand = () =>{
    bot.command('start',(ctx) => {
        // console.log(ctx.from)
        // bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Supporting chat bot.\nPlease use /help to get the commands.', {
        ctx.reply('Hello there! Welcome to the Supporting chat bot.\nPlease use /help to get the commands.');
        })
    return;
  }
  const helpCommand = () =>{
    bot.command('help', (ctx) => {
      ctx.reply( 
  `Control the bot by using these commands:
  1. /start : Hello there! Use /help to get the commands.
  2. /help : show the commands
  3. /check : check if the bot is listening`);
    return;
    })
  }
  startCommand();
  helpCommand();
  bot.launch();
  return;

}
module.exports = { botStart };