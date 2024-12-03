const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get bot's command list.",
    category: "main",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, reply, isGroup
}) => {

    try {
        const madeMenu = `
*╭┈───────────────•*
  👋 HELLO!     
*╰┈───────────────•*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢
   *${config.BOT_NAME}*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢
*╭┈───────────────•* 
*│  ◦*  *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*│  ◦*  *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*│  ◦*  *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*│  ◦*  *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*│  ◦*  *ɴᴀᴍᴇ ʙᴏᴛ* : *❖ᴍᴀʟᴀᴋᴀ-ᴍᴅ❖*
*│  ◦*  *ᴄʀᴇᴀᴛᴏʀ* : *➺ᴅᴀʀᴋ-ᴀʟꜰʜᴀ-ʙᴏᴛ࿐*
*│  ◦*  *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*╰┈───────────────•*
*♡︎•━━━━━━☻︎━━━━━━•♡︎*
╭──────────●●►
│⛵ *LIST MENU*
│   ───────
│ _1_   *OWNER*
│ _2_   *CONVERT*
│ _3_   *AI*
│ _4_   *SEARCH*
│ _5_   *DOWNLOAD*
│ _6_   *MATHTOOL*
│ _7_   *MAIN*
│ _8_   *GROUP*
│ _9_   *STICKER*
│ _10_   *GAME*
╰───────────●●►

*🌟 Reply the Number you want to select*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴀᴋᴀ-ᴍᴅ
*•────────────•⟢*
`;

        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu
        }, { quoted: mek });

        const messageId = mek.key.id;

        bot.ev.on("messages.upsert", async (messageUpdate) => {
            const message = messageUpdate.messages[0];
            if (!message || !message.message) return;

            const text = message.message.conversation || message.message.extendedTextMessage?.text;
            const senderId = message.key.remoteJid;
            const isReplyToBot = message.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

            if (!isReplyToBot) return;

            try {
                switch (text) {
                    case '1':
                        await conn.sendMessage(senderId, {
                            image: { url: "https://i.ibb.co/QNwLWTN/20241201-230018.jpg" },
                            caption: "Owner Menu."
                        }, { quoted: message });
                        break;
                    case '2':
                        await conn.sendMessage(senderId, {
                            image: { url: "https://i.ibb.co/QNwLWTN/20241201-230018.jpg" },
                            caption: "Convert Menu"
                        }, { quoted: message });
                        break;
                    default:
                        await conn.sendMessage(senderId, { text: "Invalid option. Please try again!" }, { quoted: message });
                }
            }catch(e){
console.log(e)
reply(`${e}`)
            }
        });
