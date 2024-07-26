//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVVM3o4NlVVSytKK09kKzJvdTFCYmFQT2VNVFQyRWJmM2xUT3NnMU8wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2lFUCt0OFF0NDRCdklvR204Y3RsaGEyR1pyV002N3pQVnVndGRSRklsWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTXJLc0ZHQXNSU3ZYdVozZzVLc29sakVCcENTTnRQbHJlRUNaanlYcWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TkxsdDVKelhWN21NN3VrR212ZUZ2VWVTQU9Nc2QvYzQxODJrWmFCcFJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFTnNLSlFxV1V4SUdlYUZrL3dQeVdmVmlJelJPdDd5UGdhMG5neEVEMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPQ3A5M2lybXY3MXRoNmpnUWNFcm1LUjZ4aVZ1dzlDK2NycEdxYXNrRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JreWVhVWN1bCtpZnVIZ1l0bDRwVDZOZzhLYlBPN1NQd3pQdm13L0xVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzc4eDc2b01ybWdJUVRGWWFFOEkvRFF6cnpNYlJvR1o2WlZLVDhUZFcxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhTOFZvcVlJYVdtTTYzLzlYN3EwcThsSEpFcktXYkg5L2lYRWFCTDEveENqRHZYSHNNMzhEMW10cWZUOXRKc1RZZk5HY3NGSFp4RjY2OHNQTEZsY0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InlDamptbFE4bEc0U2NzajZhdm90cmNKVitFQnR0d1JGMzFyLzV5bldvZEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDI2MTYwMDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTQxQzk3RDMyRThDNzdGNDQ3RERFODc3MTg4OTBGMTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTk2NTY5OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZndDSmR4ZFlUVUdRTHAyeHB3YkJHUSIsInBob25lSWQiOiJhOTg3NzM1NS03YTIwLTQ4NmItYmEwYS1kODBmYjM3ZmIzMDgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm1uYnVHcndYc1FoMVIyaVhSSnNFY0poQVJrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEyNU1sYW42dmRreHh4eXUybkZyYUNtckpYQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKODZLWFFTNiIsIm1lIjp7ImlkIjoiOTQ3NDI2MTYwMDQ6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCSXG7htJtcbuG0gFxu4bSbXG7htJxcbuqcsVxuX1xu8J2Qilxuyapcbsm0XG7JolxuX18gIFxu8J2Qj1xu4bSPXG7htIVcbsmqXG5fX1xuXG7wnZCYXG7htJxcbuG0i1xuyo9cbl9fXG7wnZCBXG7htIBcbsqZXG7KnCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3ZsZ3U4RkVQTzRqTFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL0pXVGtEd0paVHNYKy90THNUa2NtRTJ0WUFtVUt0bmxHYkN4amNBSDBudz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQVJVdDJjWCt1aEFBLzJFN29HU3hZbExLS2FhWmEvQnF2STVqZTR1M2pjdlRUbWhoSGFUTTU5bFk1OXlXRzZDb1RZdi9rczFmR3Z5U3hIRm05cWk5REE9PSIsImRldmljZVNpZ25hdHVyZSI6IkxQZ01RQkJodTRJRnVabXl0aThSK3ZoMkJYcjdYU01BcGpFcnNEenF4Wm1zNHVkay9VMXBLRURwQStvcDBrZk1GZ0VNcDFObHU2U1VFeDhnamxxRkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDI2MTYwMDQ6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmeVZrNUE4Q1dVN0YvdjdTN0U1SEpoTnJXQUpsQ3JaNVJtd3NZM0FCOUo4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTY1Njk2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVONiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "THARUVA MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "THARUVA MD",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
