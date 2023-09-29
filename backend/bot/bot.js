const botStart = () => {
  const { Telegraf } = require('telegraf');
  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.command('start', ctx => {
      console.log(ctx.from)
      bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Supporting chat bot.\nPlease use /help to get the commands.', {
      })
    })
  bot.launch();
  return;
}
module.exports = { botStart };