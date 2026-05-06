const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");
const handleCase = require("./case");

let pairingCode = null;

async function startBot() {
const { state, saveCreds } = await useMultiFileAuthState("./session");
const sock = makeWASocket({auth: state,logger: P({ level: "silent" })});

if (!sock.authState.creds.registered) {
pairingCode = await sock.requestPairingCode("1234567890");
console.log("PAIR CODE:", pairingCode);
}

sock.ev.on("creds.update", saveCreds);
sock.ev.on("messages.upsert", async (m) => {await handleCase(sock, m);});
}

function getPairingCode() {return pairingCode;}
module.exports = { startBot, getPairingCode };