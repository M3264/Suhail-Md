const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013159244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_56_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmxDUWpSY2hBV2V6TE5hbUhudjlZdmJ2T0o5eWNBRmJKeWVSd0pRazBmYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDEzMTU5MjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QUVCNEQ5QjkyOEZCOEJDOTA5MDlCQkJDQjVFM0JDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NjY5NzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicWpINVBzTU1RM3FGVnFhUGZpeW4tUVwiLFxuICBcInBob25lSWRcIjogXCJhNzBiYTFjOC0xM2JiLTQyNDEtYTU5MC1jNjM0YmRkMzNiZWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMTg2LFxuICAgICAgMTEwLFxuICAgICAgNDEsXG4gICAgICAyNDEsXG4gICAgICAxMjEsXG4gICAgICAxNzMsXG4gICAgICA5NyxcbiAgICAgIDE5OSxcbiAgICAgIDY4LFxuICAgICAgMjQ5LFxuICAgICAgMjQ4LFxuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgMTQ3LFxuICAgICAgMTIsXG4gICAgICAxNzMsXG4gICAgICAyMzIsXG4gICAgICAxNTEsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAxMTEsXG4gICAgICAxMzcsXG4gICAgICA4OSxcbiAgICAgIDE2OSxcbiAgICAgIDE0NSxcbiAgICAgIDIxOCxcbiAgICAgIDI0MyxcbiAgICAgIDIwLFxuICAgICAgMTA1LFxuICAgICAgMTY4LFxuICAgICAgMTM1LFxuICAgICAgMTQ5LFxuICAgICAgNyxcbiAgICAgIDE4NCxcbiAgICAgIDEyMyxcbiAgICAgIDIyMyxcbiAgICAgIDE5NixcbiAgICAgIDUzLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFRINlI4Tk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTMxNTkyNDQ6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhlZnigaAo4oGgwqDigaDCoOKBoOKAouKBoMKg4oGg4oC/4oGgwqDigaDigKLigaDCoOKBoMKg4oGgKeKBoOGVl1wiLFxuICAgIFwibGlkXCI6IFwiMTg5NzY1MDYwMTkwNDQzOjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04rNW1KWUdFTERIeWJVR0dCWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlNmenlIUVdtcWZtZWdIZG91elhFeEFsMzYwZSt3aUpVdkZxOG82WnpHND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3ZGYvMWVjYm02cStaRDRvWjBBRmdYbHpqQllGN0dGOTM1SkFFWnI3SzVRTzdrWVFkZHhhbDZIVEhvNEY4TVYrRmo0bXh2N0tnWjN6V2ZNTnZTYURBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPTFp0Y1VIS0VJRFg2SHpkSHlmQU9VWGhFREVYTkozV0V6VElQQnV4bEFLaWk5bk8vZ2hhYWVvSVFuZzBtenFPc3F4YUJ1Vm9QZ1BmSkFtTExFc3BoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEzMTU5MjQ0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk2Njk2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4yVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjJWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNWlHQkpmMmxLekZmcnhSaU12YWJRYjBEL1RwRHFlSTdKdHZ6R2dyOGxLdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU3MTUwNjg3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjE4MjA5NjE5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Kên",
  packname: process.env.PACK_NAME || "✨",
  botname : process.env.BOT_NAME  || "ᴹᶦʳᵃᵍᵉ",
  ownername:process.env.OWNER_NAME|| "Kêñny",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
