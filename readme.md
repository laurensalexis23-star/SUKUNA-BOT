# 🩸 Bot WhatsApp IA — SUKUNA XD Edition

Bot WhatsApp intelligent avec mémoire de conversation, propulsé par Claude (Anthropic).

---

## 🚀 Installation rapide

### 1. Prérequis
- Node.js v18+ installé → https://nodejs.org
- Un compte Anthropic → https://console.anthropic.com

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer ta clé API
Ouvre `index.js` et remplace :
```js
API_KEY: 'sk-ant-REMPLACE_PAR_TA_CLÉ'
```
Ou utilise une variable d'environnement (recommandé) :
```bash
export ANTHROPIC_API_KEY=sk-ant-ta_cle_ici
```

### 4. Lancer le bot
```bash
npm start
```

### 5. Scanner le QR Code
Un QR code apparaît dans le terminal.  
Ouvre WhatsApp → Appareils connectés → Scanner le QR code.

✅ Le bot est actif !

---

## ⚙️ Configuration (dans index.js)

| Paramètre | Description |
|---|---|
| `BOT_NAME` | Sakuta IA |
| `CREATOR_NAME` | Sakuta/ sk7 |
| `MAX_HISTORY` | Nombre d'échanges gardés en mémoire |
| `WHITELIST` | Numéros autorisés (vide = tout le monde) |
| `PERSONALITY` | Personnalité / system prompt de l'IA |

---

## 💬 Commandes disponibles

| Commande | Action |
|---|---|
| `!reset` | Effacer la mémoire |
| `!aide` | Afficher l'aide |
| `!info` | Infos sur le bot |

---

## 🌐 Déploiement (hébergement 24/7)

### Option A — Railway (gratuit)
1. Crée un compte sur railway.app
2. New Project → Deploy from GitHub
3. Ajoute la variable : `ANTHROPIC_API_KEY=sk-ant-...`
4. Deploy !

### Option B — VPS (Ubuntu)
```bash
# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Cloner et démarrer avec PM2
npm install -g pm2
pm2 start index.js --name xelira-bot
pm2 save
pm2 startup
```

---

## 🩸 SUKUNA XD — Plus qu'un groupe, une évolution
