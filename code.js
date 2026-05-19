const { Client } = require('whatsapp-web.js');
const Anthropic = require('@anthropic-ai/sdk');

const client = new Client();
const ai = new Anthropic({ apiKey: 'TON_API_KEY' });

client.on('message', async (msg) => {
  const response = await ai.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    system: `Tu es Xelira, une IA assistante 
             créée par [Sakuta Sk7]. Tu es utile, 
             sympa et réponds en français.`,
    messages: [{ role: 'user', content: msg.body }]
  });
  
  await msg.reply(response.content[0].text);
});

client.initialize();