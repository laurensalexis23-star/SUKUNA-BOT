const express = require("express");
const { startBot, getPairingCode } = require("./bot");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

startBot();

app.use(express.static("public"));

app.get("/pair",(req,res)=>{res.json({code:getPairingCode()});});
app.get("/",(req,res)=>{res.send("✅ BOT ONLINE");});

app.listen(PORT, HOST, () => {console.log(`Server running on ${PORT}`);});