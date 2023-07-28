const hostname = '0.0.0.0'
const port = 3000
const TelegramBot = require('node-telegram-bot-api'); 
const token = '5883500954:AAFao11nsfgYlibL7rTzb1NLXJx8oQpJ3Ew';
const bot = new TelegramBot(token, {polling: true});

const { BardAPI } = require('bard-api-node');

const assistant = new BardAPI();

async function MakeAssistant() {
  try {
    await assistant.setSession('__Secure-1PSID', 'ZQjdh6okGT5xHT-7mO87LBG9ZNjizGN-tYJtuvIdepxqKyXJsHrTuG1IdzE87QtP7Ea24Q.');
  } catch (error) {
    console.error('Error:', error);
  }
}
MakeAssistant();
async function Response(text,msg) {
    try {
      const response = await assistant.getBardResponse(text);
      bot.sendMessage(msg.chat.id, response.content);
    } catch (error) {
      bot.sendMessage(msg.chat.id,"I'm unable to help you with that, as I'm only a language model and don't have the necessary information or abilities.");
    }
  }

bot.on('message', function(msg){
    Response(msg.text,msg);
})
