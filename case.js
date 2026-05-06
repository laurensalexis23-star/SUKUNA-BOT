const settings = require("./settings");
module.exports = async (sock, m) => {
const msg = m.messages[0];
if (!msg.message) return;
const from = msg.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const sender = msg.key.participant || from;
const body = msg.message.conversation || msg.message.extendedTextMessage?.text || "";
if (!body.startsWith(".")) return;
const args = body.slice(1).trim().split(/ +/);
const command = args.shift().toLowerCase();
let metadata = isGroup ? await sock.groupMetadata(from) : {};
let participants = metadata.participants || [];
let isAdmin = participants.find(p => p.id === sender)?.admin !== null;

switch(command){
case "menu":
await sock.sendMessage(from,{image:{url:settings.menuImage},caption:`🤖 ${settings.botName}

.menu
.ping

👥 Groupe
.kick @user
.add number
.promote @user
.demote @user
.open
.close`});
break;
case "ping":
sock.sendMessage(from,{text:"🏓 Pong"});
break;
case "kick":
if(!isGroup || !isAdmin) return;
let user = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0];
if(!user) return;
await sock.groupParticipantsUpdate(from,[user],"remove");
break;
case "add":
if(!isGroup || !isAdmin) return;
let number = args[0].replace(/[^0-9]/g,"")+"@s.whatsapp.net";
await sock.groupParticipantsUpdate(from,[number],"add");
break;
case "promote":
if(!isGroup || !isAdmin) return;
let p = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0];
await sock.groupParticipantsUpdate(from,[p],"promote");
break;
case "demote":
if(!isGroup || !isAdmin) return;
let d = msg.message.extendedTextMessage?.contextInfo?.mentionedJid[0];
await sock.groupParticipantsUpdate(from,[d],"demote");
break;
case "open":
if(!isAdmin) return;
await sock.groupSettingUpdate(from,"not_announcement");
break;
case "close":
if(!isAdmin) return;
await sock.groupSettingUpdate(from,"announcement");
break;
}};