const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher:Zubair@sigma-male.ggwx4gc.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'wasitec@gmail.com'
global.github = 'https://github.com/itxxwasi/wasi-tech'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/chwaseem565_' // add your username
global.sudo = process.env.SUDO || '923135673658'
global.devs = '923192173398';
global.website = 'https://github.com/itxxwasi/wasi-tech' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0e3ceca721a6e277dbb61.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'WASI-TECH' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'WASITECH' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEpIeHFNandLYk1ZUTMzMEtWRWkwWlkxaDlDWklHbEEvOEJDZmNqb3NXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2FDbHUrYjNMQmhJMUorNzk4a3A5T3JVbzgxbGZOcFhpYkVGWTBTelRDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSDh1cXYrZUxsMm1nU0ZuemJDVjJxREJnOXg4M2hVYzIzY2p6Tks0dGtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVG9EQmxGZDBIaXdTb0hnOG9oQTY5dlVBYy9KUVlNUmJmaUE5TURNbzNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLTDV2b3FEUnhOSmNpanN1cDFWYmZnWTIvM0N2UVdNOExOdzcrWUUwMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJRm8zQW1rL0QxRlN4Kzd6RnVJcjhHcktld1RqTm5NdmY1bTF0QWR4SHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1Bbk1XYUtocnJ2TnZMbWd4L3c5aU1ScSs3aG45OXVTTTh0NkZMY1pWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibCtTNGxTcFZUYXdiRmxuSlE3aDBRMjZKalZrTzVjdm9QSjh4ajVTK2l4OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVlaUE3YzFHeFhUT1o5RThUYnpIdGRzc3Z4TGVoMDVBNFZQN1hZbUIrNm5hYTlHY0FZQkJ2anR2N0xGejNUNkZBcHFxNUhKQ0NZbXU5aUhCN2dlT2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJZemI3K05LeTVoV3pZWmlQRXJTYTRKWVhCWS83OHlvTXlUUWFMTU5sMXZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlemdidXplY1F0S0VZNWZYNmJGOHpBIiwicGhvbmVJZCI6ImU1NjNhNGVjLTY0N2ItNGI2My05Y2RkLTI4MDI2YTJhZDhkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2bkg5ZURoYUdPWjBXdzVDcHphUWNQSGNOdkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHdhYlMzN1NrS012QWltVmtHeFY2SU8wSEswPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJTU05KVktBIiwibWUiOnsiaWQiOiI5MjMwODc0Mzk2OTU6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm1zb0s4REVNbjNyN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUVJOTFySzMzVzcwSGNGU3FZWmFVeitKTUlXOHVJbGsyZkJ3M0pTd2hrST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGRrMUxwNm43S2lNVkVMellFSWRVRzhsekVMNnd6dTZWaTJuTWExcFJrM1ROaGxsOXU4NkFlUWRiaFdJdlZOd2xOUW1DQ0JXYjMzWlhQUkpSMVQ5RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IndRSW5xRFkwN1FjT21ma1k3YWM1cndjc3FNOW1xc21kTTNvODFmbmZRbkZLNnVqb0Q5Y3RmTmxSNmhmYU83eHZBUUx0Y1hwbHpkYmdsNy9IK0h6WGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDg3NDM5Njk1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWhDUGRheXQ5MXU5QjNCVXFtR1dsTS9pVENGdkxpSlpObndjTnlVc0laQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjc0MTQ2Mn0= 
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'wasi-tech' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'wasi-tech' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '1' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
