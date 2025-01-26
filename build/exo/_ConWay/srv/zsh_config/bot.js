const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const name = "gtk"
const model = `"${name}"`;

const bot = new Telegraf('7387310603:AAEwIkFnKfleuFewRf0wpMzAoVLGVPIIHTM', {
  telegram: {
    webhookReply: true,
  },
});

// Use groqto process messages and generate responses
async function respondToMessage(message) {
  const completion = await groq.Completion.create(
    {
      prompt: message.text,
      max_tokens: 100,
      temperature: 0.5,
    },
    { response_filter_enabled: true }
  );

  return completion.choices[0].text;
}

// Handle incoming messages from Telegram
bot.on("text", async (message) => {
  const response = await respondToMessage(message);
  const responseMessage = await groq.json({
    chatId: message.chat.id,
    text: response,
  });

  await bot.telegram.sendMessage(responseMessage);
});

// Start the bot
bot.startPolling();
