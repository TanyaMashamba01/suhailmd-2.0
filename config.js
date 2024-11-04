const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="joshuamambozindoga04@gmail.com@gmail.com"
global.location="Gweru,ZIMBABWE."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263716729222";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263716809340,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_59_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRyd2tDWTNVeFg0MXdFN0dHT2hadTROV04xdEVETFNrS0ZhS3VmM21xNmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkR1bTNqY1ZYUTNDN3cySUFnbDV2NmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmEyMTQzYjYtODhhYy00OGEwLWIwMmUtOGE5OTUwYjI2OTNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDg4LFxuICAgICAgMTcyLFxuICAgICAgODQsXG4gICAgICA0LFxuICAgICAgMjEzLFxuICAgICAgMTAsXG4gICAgICAyMzYsXG4gICAgICAxMTIsXG4gICAgICA2MCxcbiAgICAgIDE4MixcbiAgICAgIDcsXG4gICAgICAxOTksXG4gICAgICA5NixcbiAgICAgIDU2LFxuICAgICAgODEsXG4gICAgICAxNTksXG4gICAgICAyNTAsXG4gICAgICA3OCxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTM0LFxuICAgICAgMjM0LFxuICAgICAgNjksXG4gICAgICAxODUsXG4gICAgICA0OCxcbiAgICAgIDUzLFxuICAgICAgMjE2LFxuICAgICAgMjM0LFxuICAgICAgMTQ0LFxuICAgICAgMTE0LFxuICAgICAgNDQsXG4gICAgICAyMzUsXG4gICAgICA0NyxcbiAgICAgIDIyOCxcbiAgICAgIDIyOSxcbiAgICAgIDY5LFxuICAgICAgNDgsXG4gICAgICAxOTksXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNThQSEFXSkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNjcyOTIyMjo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4ODM0NjU1ODc1MTExOjczQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uMTV1QURFTHVjb0xrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmR2dUNUUnRydjBrejZWaXZQVWxZZHpaT1IvQkpXeEw3NXhuMVY5d3hVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3RmlJbC82UUd5dnk3aENFNkNtWjBvK2xCWFdYeUdJOEdmdzNWblY5eExnUzdTbHhoaitVYjdvdmFvNWs3M3RQZ1RIQ1ZhcUdVeXNvT2haZENLWU5DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmZzVCRit6YnhlNzd2NXFRTTZGbmJxdDNRZGJwSVk1WFhjZmppNFZUM0gvUmhyT3F4TDQ3ZkdHNWJGTlpNT2t3ZUNVYlEzdVZyRTl5WjVncXRRU3poUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY3MjkyMjI6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY3ODMzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Joshuamambo1",
  ownername:process.env.OWNER_NAME|| "MidKing01",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
