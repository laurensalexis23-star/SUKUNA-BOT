// ================================================
//  🩸 BOT WHATSAPP IA - SUKUNA XD EDITION
//  Propulsé par Claude (Anthropic) + whatsapp-web.js
// ================================================

const { Client, LocalAuth } = require('whatsapp-web.js');
const Anthropic = require('@anthropic-ai/sdk');
const qrcode = require('qrcode-terminal');

// ── Configuration ────────────────────────────────
const CONFIG = {
  BOT_NAME: 'Sakuta',          // Sakuta IA
  CREATOR_NAME: 'Son Altesse', // sakuta / sk7
  LANGUAGE: 'français',        // Langue de réponse
  MAX_HISTORY: 10,             // Messages gardés en mémoire (par conversation)
  API_KEY: process.env.ANTHROPIC_API_KEY || 'sk-ant-REMPLACE_PAR_TA_CLÉ',

  // Numéros autorisés (laisser vide [] pour tout le monde)
  // Format : '509XXXXXXXX@c.us'  (préfixe pays sans le +)
  WHITELIST: [],

  // Personnalité de ton IA (system prompt)
  PERSONALITY: `Tu es Sakuta, une intelligence artificielle créée par Son Altesse.
Tu es sympa, intelligent(e), motivant(e) et tu réponds toujours en français.
Tu aides sur : technologie, bots, digital, maths, physique, code, et bien plus.
Garde tes réponses claires et utiles. Utilise des emojis avec modération.
Ne mentionne jamais que tu es Claude ou qu'Anthropic t'a créé(e).
Tu es UNIQUEMENT Sakuta, créé(e) par Son Altesse.`
};

// ── Clients ──────────────────────────────────────
const ai = new Anthropic({ apiKey: CONFIG.API_KEY });

const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'xelira-bot' }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

// ── Mémoire des conversations ─────────────────────
// Structure : { "numeroWhatsApp": [ {role, content}, ... ] }
const memory = new Map();

function getHistory(userId) {
  if (!memory.has(userId)) memory.set(userId, []);
  return memory.get(userId);
}

function addToHistory(userId, role, content) {
  const history = getHistory(userId);
  history.push({ role, content });
  // Limiter la mémoire pour éviter des tokens trop longs
  if (history.length > CONFIG.MAX_HISTORY * 2) {
    history.splice(0, 2); // Supprimer les 2 plus anciens messages
  }
}

function clearHistory(userId) {
  memory.set(userId, []);
}

// ── Vérification whitelist ────────────────────────
function isAllowed(userId) {
  if (CONFIG.WHITELIST.length === 0) return true;
  return CONFIG.WHITELIST.includes(userId);
}

// ── Appel à l'IA ─────────────────────────────────
async function askAI(userId, userMessage) {
  addToHistory(userId, 'user', userMessage);

  const response = await ai.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    system: CONFIG.PERSONALITY,
    messages: getHistory(userId)
  });

  const reply = response.content[0].text;
  addToHistory(userId, 'assistant', reply);
  return reply;
}

// ── Commandes spéciales ───────────────────────────
function handleCommand(msg, userId) {
  const text = msg.body.trim().toLowerCase();

  if (text === '!reset' || text === '!oublier') {
    clearHistory(userId);
    return '🔄 Mémoire effacée ! On repart à zéro.';
  }

  if (text === '!aide' || text === '!help') {
    return `🤖 *${CONFIG.BOT_NAME}* — Commandes disponibles :

!reset — Effacer la mémoire de conversation
!aide — Afficher cette aide
!info — Informations sur le bot

Sinon, écris simplement ton message et je te réponds ! 💬`;
  }

  if (text === '!info') {
    return `🩸 *${CONFIG.BOT_NAME}*
Créé(e) par : ${CONFIG.CREATOR_NAME}
Statut : En ligne ✅
Mémoire : ${getHistory(userId).length / 2} échange(s) en cours`;
  }

  return null; // Pas une commande
}

// ── Événements WhatsApp ───────────────────────────

// QR Code à scanner
client.on('qr', (qr) => {
  console.log('\n📱 Scanne ce QR code avec WhatsApp :\n');
  qrcode.generate(qr, { small: true });
});

// Connecté
client.on('ready', () => {
  console.log(`\n✅ ${CONFIG.BOT_NAME} est en ligne et prêt !\n`);
});

// Déconnecté
client.on('disconnected', (reason) => {
  console.log('❌ Déconnecté :', reason);
});

// Réception d'un message
client.on('message', async (msg) => {
  // Ignorer les messages de groupe (optionnel — retire ce if pour les autoriser)
  if (msg.from.endsWith('@g.us')) return;

  // Ignorer les messages du bot lui-même
  if (msg.fromMe) return;

  const userId = msg.from;
  const text = msg.body?.trim();

  if (!text) return; // Ignorer messages vides (audio, stickers, etc.)

  // Vérification whitelist
  if (!isAllowed(userId)) {
    await msg.reply("⛔ Tu n'es pas autorisé(e) à utiliser ce bot.");
    return;
  }

  // Commandes spéciales
  const commandReply = handleCommand(msg, userId);
  if (commandReply) {
    await msg.reply(commandReply);
    return;
  }

  // Indicateur de saisie
  const chat = await msg.getChat();
  await chat.sendStateTyping();

  try {
    const reply = await askAI(userId, text);
    await msg.reply(reply);
  } catch (err) {
    console.error('Erreur IA :', err.message);
    await msg.reply("⚠️ Une erreur s'est produite. Réessaie dans un moment.");
  }
});

// ── Démarrage ─────────────────────────────────────
console.log(`\n🩸 Démarrage de ${CONFIG.BOT_NAME}...`);
client.initialize();
