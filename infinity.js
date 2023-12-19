
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const speed = require("performance-now");
const { exec, spawn, execSync } = require("child_process");
const axios = require('axios');
const { fromBuffer } = require('file-type');
const path = require('path');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone')
const chalk = require("chalk");
const OpenAI = require("openai");
//const ytdl = require('ytdl-secktor');
//const yts = require('secktor-pack');
const os = require('os');
const google =require('google-it');
const { mediafireDl } = require('./lib/mediafire.js');
const googleImage = require('g-i-s');
const Genius = require("genius-lyrics"); 
let { TelegraPh, UploadFileUgu, webp2mp4File } = require('./lib/uploader');
let setting = require("./key.json");
const yts = require("yt-search");
const modapk = require("tod-api");
const ytdl = require("ytdl-core");
const githubstalk = require('./lib/githubstalk');
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
//const openai = new OpenAI({ apiKey: setting.keyopenai });
const { Configuration, OpenAIApi } = require("openai");
const { getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')


module.exports = infinity = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    //var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const prefix = process.env.PREFIX || '';
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();

const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;

    const kress = (m.quoted || m); 
         const quoted = (kress.mtype == 'buttonsMessage') ? kress[Object.keys(kress)[1]] : (kress.mtype == 'templateMessage') ? kress.hydratedTemplate[Object.keys(kress.hydratedTemplate)[1]] : (kress.mtype == 'product') ? kress[Object.keys(kress)[0]] : m.quoted ? m.quoted : m; 
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    const author = process.env.STICKER_AUTHOR || 'Kresswell';
    const packname = process.env.STICKER_PACKNAME || 'Kresswell';

    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
const wapresence = process.env.WA_PRESENCE || 'recording';
    const autoread = process.env.AUTOREAD || 'TRUE';
const autobio = process.env.AUTOBIO || 'TRUE';
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';
const dev = process.env.OWNER || '254114018035'
const antilink = process.env.ANTILINK || 'TRUE';
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hours, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minutes, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Seconds") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 

 const timestamp = speed(); 
   const infinityspeed = speed() - timestamp 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
///const dev = process.env.DEV || '254798242085'
 const devkresswell = dev.split(",");
    const Owner = devkresswell.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
  
    const participants = m.isGroup ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
const admin = process.env.ADMIN_MSG || 'Admin Command Only';
    const group = process.env.GROUP_ONLY_MSG || 'Use this command only in groups!!';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'I need to be admin to perform that task'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Owner Command';
//Bot status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                        return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
                        last.speed += cpu.speed / length
                        last.times.user += cpu.times.user
                        last.times.nice += cpu.times.nice
                        last.times.sys += cpu.times.sys
                        last.times.idle += cpu.times.idle
                        last.times.irq += cpu.times.irq
                        return last
        }, {
            speed: 0,
                        total: 0,
                        times: {
                            user: 0,
                            nice: 0,
                            sys: 0,
                            idle: 0,
                            irq: 0
            }
        })

        
        
        //TicTacToe
            this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            m.reply({
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Invalid Position',
            0: 'Invalid Position',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Wins!!🥳` : isTie ? `Game Tie` : `Current Player: ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

if (wapresence === 'recording' && !m.isGroup) { 

  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 

  client.sendPresenceUpdate('composing', m.chat);
    }




    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }


if (autobio === 'TRUE'){ 
            setInterval(() => { 

                                 const date = new Date() 

                         client.updateProfileStatus( 

                                         `InfinityAI is active now\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 

}

    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 

 kid = m.sender; 

 client.sendMessage(m.chat, { 

                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`Removed:\n\n@${kid.split("@")[0]}, sending group links is not allowed here!`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   

if (antilink === 'TRUE' && antilinkall === 'TRUE' && body.includes('http') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 

 ki = m.sender; 

 client.sendMessage(m.chat, { 

                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`Removed:\n\n@${ki.split("@")[0]}, sending links is not allowed here!`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   




    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ INFINITY-AI ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }   

    

    if (isCmd2) {
      switch (command) {
        case "help": case "menu": case "start": case "info":
        let caption =`
*┏━──●▬▬▬▬๑۩ 𓄂ᴋʀᴇͥsͣsͫᴡᴇʟʟ ۩๑▬▬▬▬▬●*
*┃➥Hello ${m.pushName} ,*
*┃➥ Runtime: ${runtime(process.uptime())}*
*┃➥ Library : Baileys*
*┃➥ Host Name : ${os.hostname()}*
*┃➥ Platform : ${os.platform()}*
*┃➥ Bot Name : InfinityAI*
*┃➥ Bot Version : 1.0.0*
*┃➥ Creator : 𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟*
*┗━──────────────*

*⌜ Owner Commands ⌟*

*┏━───────────────╮*
*┃➥Block*
*┃➥Unblock*
*┃➥Join*
*┃➥Setvar*
*┃➥Getvar*
*┃➥Restart*
*┃➥BotPp*
*┃➥Broadcast*
*┃➥Listpc*
*┃➥Listgc*
*┗━───────────────╯*

*⌜ Admin Commands ⌟*

*┏━───────────────╮*
*┃➥Mute*
*┃➥Unmute*
*┃➥Promote*
*┃➥Demote*
*┃➥Open*
*┃➥Close*
*┃➥Hidetag*
*┃➥Tagall*
*┃➥Kick*
*┃➥Subject*
*┃➥Gdesc*
*┃➥delete*
*┃➥Listonline*
*┃➥Add*
*┗━──────────────╯*


*⌜ Utilities ⌟*

*┏━───────────────╮*
*┃➥Alive*
*┃➥Ping*
*┃➥Runtime*
*┃➥Speed*
*┃➥Link*
*┗━───────────────╯*

*⌜ Downloader & Media ⌟*

*┏━───────────────╮*
*┃➥play*
*┃➥Lyrics*
*┃➥Yts*
*┃➥Yta*
*┃➥ytmp4*
*┃➥Ytmp3*
*┃➥Sticker*
*┃➥Toimg*
*┃➥Smeme*
*┃➥Tourl*
*┃➥Gdrive*
*┃➥Google*
*┃➥Quotely*
*┃➥Movie*
*┃➥Github*
*┗━───────────────╯*

*⌜ Fun Menu⌟*

*┏━───────────────╮*
*┃➥ttt*
*┃➥Checkdeath*
*┃➥Rate*
*┃➥When*
*┃➥Couple*
*┃➥Soulmate*
*┃➥Truth*
*┃➥Dare*
*┃➥Checks*
*┃➥Anime*
*┃➥Manga* 
*┃➥Movie*
*┗━───────────────╯*
`;

client.sendMessage(m.chat, {
                        text: caption,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `INFINITY-AI`,
                                body: `Ni God Manzee!! ◇.`,
                                thumbnail: fs.readFileSync('./infinity.jpg'),
                                sourceUrl: `https://github.com/EscaliBud/Gpt-4`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
          break;

       /* case "ai": case "openai": case "chatgpt": case "ask":
          try {
            // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
            if (setting.keyopenai === "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") return reply("Apikey not set\n\nSet your api on key.json and restart bot\n\nGet your API key from this website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat with AI.\n\nExample:\n${prefix}${command} Write hello world in java.`);
            const chatCompletion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: q }],
              model: 'gpt-3.5-turbo'
            });
          
            await m.reply(chatCompletion.choices[0].message.content);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error);
            m.reply("Sorry,There seems to be an error error :"+ error.message);
          }
        }
          break;
        case "img": case "ai-img": case "image": case "images": case "dall-e": case "dalle":
          try {
            // tidak perlu diisi apikeynya disini, karena sudah diisi di file key.json
            if (setting.keyopenai === "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") return reply("Apikey not set.\n Please set up your key on key.json and restart bot.\n\nYou can get API keys from: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Create Images With AI.\n\nExample:\n${prefix}${command} Wooden house on snow mountain`);
            const image = await openai.images.generate({ 
              model: "dall-e-3",
              prompt: q, 
              n: 1,
              size: '1024x1024' 
              });
            //console.log(response.data.data[0].url) // see the response
            client.sendImage(from, image.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Sorry,There seems to be an error!! :"+ error.message);
          }
        }
          break; */

        case "gpt": case "openai": 


            if (!text) return reply("I need more text please. Make your query a bit longer.");

           const configuration = new Configuration({

              apiKey: setting,

            });

            const openai = new OpenAIApi(configuration);

            try {

const response = await openai.createChatCompletion({

          model: "gpt-3.5-turbo",

          messages: [{role: "user", content: text}],

          });

          m.reply(`${response.data.choices[0].message.content}`);

          } catch (error) {

          if (error.response) {

            console.log(error.response.status);

            console.log(error.response.data);

            console.log(`${error.response.status}\n\n${error.response.data}`);

          } else {

            console.log(error);

            m.reply("I\'m Facing An Error:"+ error.message);

          }

            }

break;
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting === "ADD OPENAI API KEY") return reply("I need an openAi API key in my .env file.");
            if (!text) return reply(`This will generate an AI-BASED image. Note that image generated might not be realistic.`);
            const configuration = new Configuration({
              apiKey: setting,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("An error has occurred:"+ error.message);
          }
        }
break;
case "take": {
try {

  if (!m.quoted) return reply('Quote a sticker!')
  let fortunx = await client.getName(sender);

  if (!/webp/.test(mime)) throw `Tag sticker with caption  ${prefix + command}`;
  if (m.quoted.isAnimated === true) {
  client.downloadAndSaveMediaMessage(quoted, "gifee");
  client.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m});
  } else if (/image/.test(mime)) {
  let mediax = await quoted.download();
  let encmediax = await client.sendImageAsSticker(m.chat, mediax, m, { packname: Kresswell, author: Muiruri });
  await fs.unlinkSync(encmediax);



} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Not long than 10 seconds!');
  let mediaxx = await quoted.download();
  let encmediaxx = await client.sendVideoAsSticker(m.chat, mediaxx, m, { packname: Kresswell, author: Muiruri });
  await fs.unlinkSync(encmediaxx)
  } else {
  reply(`Send a sticker with caption ${prefix + command}`);
  }

} catch (errr) { 
 await reply("Something went wrong! Looks like I am unable to convert animated stickers")}

  }
break;
            
//download commands
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Send an animated sticker with the  caption *${prefix + command}*`
                m.reply('Please wait ..')
                let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted By InfinityAI' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Tag/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply('Please wait...')
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply('Please Wait...')
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `InfinityConverts.mp3`}, { quoted : m })
            }
            break;
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply('please wait...')
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break;
            
            
            
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply('Please wait..')
                let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break;

            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Tag a sticker with the caption *${prefix + command}*`
                m.reply('Please wait......')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break;
            case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)

                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }

break;
case 'status': case 'post': {
  if (!Owner) return replay('Are you the owner bitch??')
  if (!quoted) return reply(`Send/Reply Image With Caption ${prefix}status`)
  if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 seconds video is allowed!')
  }
  const messageType = Object.keys (m.message)[0]
  if (messageType === 'imageMessage') {
      const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
      await writeFile('./image.jpeg', media)
      await client.sendMessage(botNumber, 'status@broadcast',  { url: './image.jpeg', media}).catch((err) => fs.unlinkSync(media))
     replay(`*✨ ${m.pushname}...!! Posted On My Status ✨*`);
  }
  else if (messageType === 'videoMessage') {
      const media = await downloadMediaMessage(m,'media',{ },{ logger,reuploadRequest: sock.updateMediaMessage})
      await writeFile('./video.mp4', media)
      await client.sendMessage(botNumber, 'status@broadcast',  { url: 'video.mp4', media}).catch((err) => fs.unlinkSync(media))
reply(`*✨ ${m.pushname}...!! Posted On My Status ✨*`);
  }
  else {
      reply(`an error occurred`)
  }

}
break;
case 'pornhub': case 'phub' :{
client.sendMessage(from, { react: { text: "🪄" , key: m.key }})
if(!text) return reply(`Example: ${prefix + command} Kress|Well`)
reply('Please wait')        

inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
client.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break;


case 'couple': {
                m.reply('Please Wait..')
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: random.male }, caption: `Male Couple` }, { quoted: m })
                client.sendMessage(m.chat, { image: { url: random.female }, caption: `Female Couple` }, { quoted: m })
            }
            break;
                    case "sticker": case "s": { 
            if (/image/.test(mime)) { 

                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else if (/video/.test(mime)) { 
             m.reply("wait a moment"); 
                 if (qmsg.seconds > 11) return m.reply('Video is too long for conversion!'); 
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else { 
                 m.reply(`Send an image or short video with the caption ${prefix + command}`); 
                 } 
          }
          break;

case 'play':
    case 'stream': {
        if (!text) {
            reply('Provide a search term!\nE.g: play NWA Appetite for destruction. ')
            return;
        }
        try {
            const {
                videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
                reply(`No Matching videos found for : *${args[0]}*!!`)
                return;
            }
            let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`File is too big for me to download`);
                return;
            }
            const getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);
             
reply(`_Downloading ${infoYt.videoDetails.title}?_`);
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 40) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await client.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size bigger.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }
break;
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case 'ytmp3':
case 'yta': {
      const getRandommmm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(`URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                reply(`Youtube link?`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandommmm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 40) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await client.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size bigger than 40mb.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }

break;
case '':
        if(isCmd2){
        client.sendMessage(from, { react: { text: "✨" , key: m.key }})

     reply(`Hello ${pushname} ,You used my prefix.Please  Type *${prefix}help* to get my full command list.`)
        }

    break;
case 'ghstalk': case 'githubstalk': case'github': {
  client.sendMessage(from, { react: { text: "🔍" , key: m.key }})

  if (!q) return replay(`Give me a user name like *${prefix}github EscaliBud*`)

  gitdata = await githubstalk.githubstalk(`${q}`)
  client.sendMessage(m.chat, { image: { url : gitdata.profile_pic }, caption: 
  `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}` }, { quoted: m } )
  }
  break;  
case 'happymod': case 'modapk':{
  client.sendMessage(from, { react: { text: "🔍" , key: m.key }});

  if (!args.join(" ")) return reply(`Example: ${prefix + command} Kinemaster`);

  const searchTerm = args.join(" ");
 modapk.happymod(searchTerm).then(async (res) => {
    let teks = '```「 HappyMod Search Engine 」```';
    for (let i of res) {
      teks += `\n\n${i.name}\n`;
      teks += `${i.link}`;
    }

    let messageToSend = teks;
    if (res[0].icon) {
      messageToSend = {
        text: teks,
        image: { url: res[0].icon },
        jpegThumbnail: Thumb,
      };
    }

    client.sendMessage(from, messageToSend, { quoted: m });
  });
}
break;
case 'ytmp4':
case 'ytvideo':
case 'ytv':
        const getRandommm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                reply(`Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandommm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
            case 'style': case 'styletext': {
                if (!text) return reply('You sent nothing') //wont response when limit runs out\\
             
                let { styletext } = require('./lib/scraper')
                if (!text) return reply(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🔮 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
            }
            break;

  case 'video':
        const getRandomm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];


            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandomm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
          case "lyrics": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break ;

          case "song": { 
 const getRandom = (ext) => { 
   return `${Math.floor(Math.random() * 10000)}${ext}`; 
 }; 

 const downloadSong = async (randomName, query) => { 
   try { 
     const INFO_URL = "https://slider.kz/vk_auth.php?q="; 
     const DOWNLOAD_URL = "https://slider.kz/download/"; 
     let { data } = await axios.get(INFO_URL + query); 

     if (data["audios"][""].length <= 1) { 
       console.log("==[ SONG NOT FOUND! ]=="); 
       return { info: "NF" }; 
     } 


     let i = 0; 
     let track = data["audios"][""][i]; 
     while (/remix|revisited|mix/i.test(track.tit_art)) { 
       i += 1; 
       track = data["audios"][""][i]; 
     } 
     //if reach the end then select the first song 
     if (!track) { 
       track = data["audios"][""][0]; 
     } 


     let link = track.url; 
     link = encodeURI(link); //to replace unescaped characters from link 

     let songName = track.tit_art; 
     songName = 
       songName = 
       songName = 
         songName.replace(/\?|<|>|\*|"|:|\||\/|\\/g, ""); //removing special characters which are not allowed in file name 
     // console.log(link); 
     // download(songName, link); 
     const res = await axios({ 
       method: "GET", 
       url: link, 
       responseType: "stream", 
     }); 
     data = res.data; 
     const path = `./${randomName}`; 
     const writer = fs.createWriteStream(path); 
     data.pipe(writer); 
     return new Promise((resolve, reject) => { 
       writer.on("finish", () => resolve(songName)); 
       writer.on("error", () => reject); 
     }); 
   } catch (err) { 
     console.log(err); 
     return { info: "ERR", err: err.stack }; 
   } 
 }; 

 //const handler = async (client, msg, msgInfoObj) => { 
   //let { prefix, reply, args, from } = msgInfoObj; 

   if (args.length === 0) { 
     await reply(`Give me a song name?`); 
     return; 
   } 
   let randomName = getRandom(".mp3"); 
   let query = args.join("%20"); 
   let response = await downloadSong(randomName, query); 
   if (response && response.info == "NF") { 
     await reply( 
       `Not found!` 
     ); 
     return; 
   } 
   if (response && response.info === "ERR") { 
     await reply(response.err); 
     return; 
   } 
   console.log(`song saved-> ./${randomName}`, response); 

   await client.sendMessage( 
     from, 
     { 
       document: fs.readFileSync(`./${randomName}`), 
       fileName: response + ".mp3", 
       mimetype: "audio/mpeg", 
       mediaUploadTimeoutMs: 1000 * 30, 
     }, 
     { quoted: m } 
   ); 
   fs.unlinkSync(`./${randomName}`); 
    } 
//other commands  
case 'imagetag':
                if (!m.isGroup) return await reply('this command only for group')
                if (!isAdmin && !Owner && !itsMe) return await reply('this command only for admin, baka!')
                if (!isQuotedImage && !isImage) return await reply(`Send image, and reply with caption ${prefix}imagetag`)
                media = isQuotedImage ? JSON.parse(JSON.stringify(lin).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lin
                buffer = await client.downloadMediaMessage(media)
                await wa.hideTagImage(from, buffer)
                break;  
            case 'stats':
                if (!Owner && !itsMe) return await reply('This command only for owner or mega')
                texxt = await msg.stats(totalChat)
                await wa.sendFakeStatus(from, texxt, "BOT STATS")
                break;
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 👍'); 
             } 
             break; 
           case "gdesc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 👍'); 
             } 
 break; 
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
    } 
    break;
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/EscaliBud/EscaliBud`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('An error occured'))
break;

          case 'broadcast': { 
         if (!Owner) { 
             throw NotOwner
             return; 
         } 
         if (!text) { 
             reply("*❌ No broadcast message provided!*") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `*➥INFINITYAI BROADCAST*:\n\n*MESSAGE*:  _${text}_\n\n*Author*: ${pushname}` 
             await client.sendMessage(i, { 
                 image: { 
                     url: "https://te.legra.ph/file/5b3c55eb8f214b2006c06.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;
          case "leave": { 
                 if (!isAdmin) throw admin; 
 await client.sendText(m.chat, 'GoodBye Everyone.\n\n *InfinityAI is leaving this chat. . .*'); 
                 await client.groupLeave(m.chat); 

             } 
 break; 
          case "gpp": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated'); 
    } 
    break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent  the new group link to your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }

  break;
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
break;
     

 case "ping": { 
                 m.reply (`Pong\n ${infinityspeed.toFixed(4)} _miliseconds_`) 
 } 
 break;

case "alive": { 

 client.sendMessage(m.chat, { image: { url: 'https://te.legra.ph/file/5b3c55eb8f214b2006c06.jpg' }, caption: `Hello ${m.pushName}, InfinityAI is active\n\nActive for:  ${runtime(process.uptime())}\n\nType ${prefix}help.`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
 }
break;

//group commands
           case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Muiruri.;;;'
                    + 'FN:Kresswell.\n' // full name
                    + 'ORG:𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=254798242085:+254 798-2420-85\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                client.sendMessage(m.chat, { contacts: { displayName: '𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break;
            case 'q': case 'quoted': {
                if (!m.quoted) return reply('Reply to Message!!')
                let wokwol = await client.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break;
case 'when':
                                if (!text) return reply(`Use Text, Example : ${prefix + command} will i get married `)
                                        const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
                                        const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
client.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
                                        break;
case 'checkdeath':
             if (!text) return reply(`Use Someone's Name, Example : ${prefix + command} Johny`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Death At Age :* ${predea.data.age} Years.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break;
case "remove": case "kick": { 
try {

                 if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 



                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
 if (!users) throw NotOwner; 
 if (users  == client.decodeJid(client.user.id)) throw 'Bot cannot remove itself 😡';
 if (users == Owner) { m.reply('Cannot remove my Lord!!')}; 
                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
await m.reply('Successfully removed!'); 
} catch (errr) { 
 await reply("Something is wrong! Did you give me a user to remove?")}


         } 

  break;

case 'add': {
                if (!m.isGroup) throw group
                if (!isBotAdmin) throw botAdmin
                if (!isAdmin) throw admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break;

          case "invite": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink For ${groupMetadata.subject} .Enjoy your Stay here!!`, m, { detectLink: true }); 
             } 
 break;

          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Promoted successfully🍷'); 
         } 
 break; 
 case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Demoted Successfully🗿'); 
         } 
 break;
 case "close": case "mute": { 

                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group Closed successfully🍷!'); 
 } 
 break; 
 case "open": case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group Opened successfully🍷!'); 

 }
        break;
 case "hidetag": { 
             if (!m.isGroup) throw group; 
             if (!isBotAdmin) throw botAdmin; 
             if (!isAdmin) throw admin; 
            client.sendMessage(m.chat, { text : q ? q : '☞︎︎︎ YOU ARE TAGGED ☜︎︎︎' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
 case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `You have been tagged here: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `🤡 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;

//owner commands
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST OF PERSONAL CHATS*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST OF GROUP CHATS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Created on :* ${moment(metadata.creation * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break;
case 'restart':  
  if (!Owner) throw `Owner Only` 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
          case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`Blocked!`); 
 } 
 break; 

 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`Unblocked!`); 
 } 
 break;
  case 'quotely': {
try {
if (!m.quoted.text) throw 'Tag a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/infinityquotely.js')

                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/75272825615a4dcb69526.png')

const rel = await quote(xf, pushname, pppuser)

                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `InfinityAI`
                })

} catch (errr) { 
 await reply("Tag some text for quotely")}

            }

break;
case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*InfinityAI Variables*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 

     break; 
 case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  



 break; 
case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 


          break; 
          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 

             } 
break;
            case 'system': case 'speed': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break;
//Games
case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game!!'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partne Joined!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Current Player: @${room.game.currentTurn.split('@')[0]}


Type *surrender* to give up and admit defeat`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting for a patner.' + (text ? ` Type the following command: ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break;
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Successfully deleted the TicTacToe Session`, m)
            } else if (!this.game) {
            m.reply(`No active TicTacToe  session.`)
            } else throw '?'
            } catch (e) {
            m.reply('Damaged💀')
            }
            }
            break;
//extra commands
case 'tourl': {
                m.reply('Please wait...')
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break;
case 'google': {
                if (!text) return reply(`Example : ${prefix + command} Who is Kresswell`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += `🔍*Title* : ${g.title}\n`
                teks += `📔 *Description* : ${g.snippet}\n`
                teks += `🔗 *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break;
case 'rate':
                                if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
                                        const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                                        const te = ra[Math.floor(Math.random() * ra.length)]
client.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

                                        break;

          case "sc": case "script": case "scbot":
           let scmess= `
╭─❒ SCRIPT
│◦➛Owner : Kresswell
│◦➺Co-Owner : Spider953
│∞ *INFINITY HACKERS KENYA*
└──────[ GITHUB ]──────❒
  │◦➛Script Link :
  │◦➛https://github.com/EscaliBud/InfinityAI
  │◦➛Telegram Channel: 
  │◦➛https://InfinityHackersKE.t.me 
  └──────────────────❒`;
client.sendMessage(m.chat, {
                        text: scmess,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `INFINITY-AI`,
                                body: `INFINITY HACKERS KENYA ◇.`,
                                thumbnail: fs.readFileSync('./infinity.jpg'),
                                sourceUrl: `https://InfinityHackersKE.t.me/`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
          break;
case "checks":
let mcheks= `*⌜ Checks Menu ⌟*

*┏━───────────────╮*
*┃➥Charactercheck*
*┃➥LesbianCheck*
*┃➥Gaycheck*
*┃➥Awesomecheck*
*┃➥Greatcheck*
*┃➥Hornycheck*
*┃➥Prettycheck*
*┃➥Cutecheck*
*┃➥Uglycheck*
*┃➥Lovelycheck*
*┃➥Beautifulcheck*
*┃➥Handsomecheck*
*┗━───────────────╯*

Bot By @𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟ `;
client.sendMessage(m.chat, {
                        text: mcheks,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `INFINITY-AI`,
                                body: `Ni God Manzee!! ◇.`,
                                thumbnail: fs.readFileSync('./infinity.jpg'),
                                sourceUrl: `https://github.com/EscaliBud/Gpt-4`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
          break;
      
     
case 'thunder': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {

if (!text) return reply(`Example : ${prefix + command} Kresswell`)
client.sendMessage(from, { react: { text: "🪄" , key: m.key }}) 
reply('Please wait..')        

       let link
       if (/thunder/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1147.html'
       if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
       if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
       if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
       if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
       if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
       if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
       if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
       if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
       if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
       if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
       if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
       if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
       if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
       if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
       if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
       if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
       if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
       if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
       if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
       if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
       if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
       if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
       if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
       if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
       if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
       if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
       if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
       if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
       if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
       if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
       if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
       if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
       if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
       if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
       if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
       if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
       if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
       if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
       if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
       if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
       if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
       if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
       if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
       if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
       if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
       if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
       if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
       if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
       if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
       if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
       if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
       if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
       if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
       if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
       if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
       if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
       let anu = await maker.textpro(link, text)
          client.sendMessage(m.chat, { image: { url: anu }, caption: `Made by InfinityAI` }, { quoted: m })
       }

break;
case 'translate': case 'trt': case 'trans': {
client.sendMessage(from, { react: { text: "⌛" , key: m.key }})

if(!text) return reply("Please enter any text to translate")
let tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
let Infoo = tes.info
let Detek = tes.translate
reply(`Input : ${Detek}\nTranslation : ${Infoo}`)
}
break;
case 'soulmate':  {

  
  if (!m.isGroup) return reply('Use this command in a group');
  client.sendMessage(from, { react: { text: "🌝", key: m.key } });

  let member = participants.map(u => u.id);
  let me = m.sender;
  let jodoh = member[Math.floor(Math.random() * member.length)];

  let message = `👫 Be my Soulmate...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
  client.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
}
break;


case 'handsomecheck':
  
client.sendMessage(from, { react: { text: "😺" , key: m.key }})
      if (!text) return reply(`Tag Someone, Example : ${prefix + command} @EscaliBud`)
        const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const teng = gan[Math.floor(Math.random() * gan.length)]
client.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
        break;


case 'beautifulcheck':
  
  client.sendMessage(from, { react: { text: "😺" , key: m.key }})

      if (!text) return reply(`Tag Someone, Example : ${prefix + command} @EscaliBud `)
        const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const tik = can[Math.floor(Math.random() * can.length)]
client.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
        break;



case 'awesomecheck':
case 'greatcheck':
  case 'gaycheck':
    case 'cutecheck':
        case 'lesbiancheck':
           case 'hornycheck':
               case 'prettycheck':
                  case 'lovelycheck':
                    case 'uglycheck':
                      
  client.sendMessage(from, { react: { text: "😺" , key: m.key }})

      if (!text) return reply(`Tag Someone, Example : ${prefix + command} EscaliBud `)
        const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
client.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
        break;


case 'charactercheck':
  
client.sendMessage(from, { react: { text: "🤧" , key: m.key }})

        if (!text) return reply(`Tag Someone, Example : ${prefix + command} @EscaliBud `)
        const A17tttt =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
        const taky = A17tttt[Math.floor(Math.random() * A17tttt.length)]
        client.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
           break;


//
case 'dare':
  
client.sendMessage(from, { react: { text: "🌝" , key: m.key }})

                 const dare =[
       "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
       "spill people who make you pause",
       "call crush/pickle now and send ss",
       "drop only emote every time you type on gc/pc for 1 day.",
       "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
       "call ex saying miss",
       "sing the chorus of the last song you played",
       "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
       "Bang on the table (which is at home) until you get scolded for being noisy",
       "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
       "mention ex's name",
       "make 1 rhyme for the members!",
       "send ur whatsapp chat list",
       "chat random people with gheto language then ss here",
       "tell your own version of embarrassing things",
       "tag the person you hate",
       "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
       "change name to *I AM DONKEY* for 24 hours",
       "shout *ma chuda ma chuda ma chuda* in front of your house",
       "snap/post boyfriend photo/crush",
       "tell me your boyfriend type!",
       "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
       "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
       "prank chat ex and say *i love u, please come back.* without saying dare!",
       "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
       "change the name to *I am a child of randi* for 5 hours",
       "type in bengali 24 hours",
       "Use selmon bhoi photo for 3 days",
       "drop a song quote then tag a suitable member for that quote",
       "send voice note saying can i call u baby?",
       "ss recent call whatsapp",
       "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
       "pop to a group member, and say fuck you",
       "Act like a chicken in front of ur parents",
       "Pick up a random book and read one page out loud in vn n send it here",
       "Open your front door and howl like a wolf for 10 seconds",
       "Take an embarrassing selfie and paste it on your profile picture",
       "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
       "Walk on your elbows and knees for as long as you can",
       "sing national anthem in voice note",
       "break;dance for 30 seconds in the sitting room😂",
       "Tell the saddest story you know",
       "make a twerk dance video and put it on status for 5mins",
       "Eat a raw piece of garlic",
       "Show the last five people you texted and what the messages said",
       "put your full name on status for 5hrs",
       "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
       "call ur bestie, bitch",
       "put your photo without filter on ur status for 10mins",
       "say i love oli london in voice note🤣🤣",
       "Send a message to your ex and say I still like you",
       "call Crush/girlfriend/bestie now and screenshot here",
       "pop to one of the group member personal chat and Say you ugly bustard",
       "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
       "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
       "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
       "use any bollywood actor photo as ur pfp for 3 days",
       "put your crush photo on status with caption, this is my crush",
       "change name to I AM GAY for 5 hours",
       "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
       "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
       "slap ur butt hardly send the sound of slap through voice note😂",
       "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
       "shout bravooooooooo and send here through voice note",
       "snap your face then send it here",
       "Send your photo with a caption, i am lesbian",
       "shout using harsh words and send it here through vn",
       "shout you bastard in front of your mom/papa",
       "change the name to i am idiot for 24 hours",
       "slap urself firmly and send the sound of slap through voice note😂",
       "say i love the bot owner Kai through voice note",
       "send your gf/bf pic here",
       "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
       "break;up with your best friend for 5hrs without telling him/her that its a dare",
        "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
        "say i love depak kalal through voice note",
        "write i am feeling horny and put it on status, u can delete it only after 5hrs",
        "write i am lesbian and put it on status, u can delete only after 5hrs",
        "kiss your mommy or papa and say i love you😌",
        "put your father name on status for 5hrs",
        "send abusive words in any grup, excepting this grup, and send screenshot proof here"
   ]
                 const A17dareww = dare[Math.floor(Math.random() * dare.length)]
                 buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
                 client.sendMessage(from, { image: buffer, caption: '*You have chosen Dare...*\n\n'+ A17dareww }, {quoted:m})
                 break;


case 'truth':
client.sendMessage(from, { react: { text: "🌝" , key: m.key }})

                         const truth =[
               "Have you ever liked anyone? How long?",
               "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
            
               "Have you ever liked someone and felt that person likes you too?",
               "What is the name of your friend's ex-girlfriend that you used to secretly like?",
               "Have you ever stolen money from your father or mom? The reason?",
               "What makes you happy when you're sad?",
               "Ever had a one sided love? if so who? how does it feel bro?", 
               "been someone's mistress?",
               "the most feared thing",
               "Who is the most influential person in your life?",
               "what proud thing did you get this year", 
               "Who is the person who can make you awesome", 
               "Who is the person who has ever made you very happy?", 
               "Who is closest to your ideal type of partner here", 
               "Who do you like to play with??", 
               "Have you ever rejected people? the reason why?",
               "Mention an incident that made you hurt that you still remember", 
               "What achievements have you got this year??",
               "What's your worst habit at school??",
               "What song do you sing most in the shower",
               "Have you ever had a near-death experience",
               "When was the last time you were really angry. Why?",
               "Who is the last person who called you",
               "Do you have any hidden talents, What are they",
               "What word do you hate the most?",
               "What is the last YouTube video you watched?",
               "What is the last thing you Googled",
               "Who in this group would you want to swap lives with for a week",
               "What is the scariest thing thats ever happened to you",
               "Have you ever farted and blamed it on someone else",
               "When is the last time you made someone else cry",
               "Have you ever ghosted a friend",
               "Have you ever seen a dead body",
               "Which of your family members annoys you the most and why",
               "If you had to delete one app from your phone, which one would it be",
               "What app do you waste the most time on",
               "Have you ever faked sick to get home from school",
               "What is the most embarrassing item in your room",
               "What five items would you bring if you got stuck on a desert island",
               "Have you ever laughed so hard you peed your pants",
               "Do you smell your own farts",
               "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
               "What is the biggest mistake you have ever made",
               "Have you ever cheated in an exam",
               "What is the worst thing you have ever done",
               "When was the last time you cried",
               "whom do you love the most among ur parents", 
               "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
               "who was ur crush during the school days",
               "tell honestly, do u like any boy in this grup",
               "have you ever liked anyone? how long?",
               "do you have gf/bf','what is your biggest fear?",
               "have you ever liked someone and felt that person likes you too?",
               "What is the name of your ex boyfriend of your friend that you once liked quietly?",
               "ever did you steal your mothers money or your fathers money",
               "what makes you happy when you are sad",
               "do you like someone who is in this grup? if you then who?",
               "have you ever been cheated on by people?",
               "who is the most important person in your life",
               "what proud things did you get this year",
               "who is the person who can make you happy when u r sad",
               "who is the person who ever made you feel uncomfortable",
               "have you ever lied to your parents",
               "do you still like ur ex",
               "who do you like to play together with?",
               "have you ever stolen big thing in ur life? the reason why?",
               "Mention the incident that makes you hurt that you still remember",
               "what achievements have you got this year?",
               "what was your worst habit at school?",
               "do you love the bot creator Kai?",
               "have you ever thought of taking revenge from ur teacher?",
               "do you like current prime minister of ur country",
               "you non veg or veg",
               "if you could be invisible, what is the first thing you would do",
               "what is a secret you kept from your parents",
               "Who is your secret crush",
               "whois the last person you creeped on social media",
               "If a genie granted you three wishes, what would you ask for",
               "What is your biggest regret",
               "What animal do you think you most look like",
               "How many selfies do you take a day",
               "What was your favorite childhood show",
               "if you could be a fictional character for a day, who would you choose",
               "whom do you text the most",
               "What is the biggest lie you ever told your parents",
               "Who is your celebrity crush",
               "Whats the strangest dream you have ever had",
               "do you play pubg, if you then send ur id number"
           ]
                         const A17truthww = truth[Math.floor(Math.random() * truth.length)]
                         buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
                         client.sendMessage(from, { image: buffer, caption: '*You have chosen Truth...*\n'+ A17truthww }, {quoted:m})
                         break;
case 'anime': {
  
  if (!m.isGroup) return reply('Use this command on a group')
  client.sendMessage(from, { react: { text: "🍁" , key: m.key }});
  if(!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

  const malScraper = require('mal-scraper')
  reply('Please wait...');
          const anime = await malScraper.getInfoFromName(text).catch(() => null)
          if (!anime) return reply(`${p}Could not find your scarch`)
  let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
                  await client.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                  }
                  break;


case 'manga':
  
  if (!m.isGroup) return reply('Group command') 
client.sendMessage(from, { react: { text: "🍁" , key: m.key }})

reply('Please wait..')                                                        
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!text) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
  let mang = `*Title:* ${srh.data[0].title}\n`;
  mang += `*Status:* ${srh.data[0].status}\n`;
  mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
  mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
  mang += `*Genres:*\n`;
  for (let i = 0; i < srh.data[0].genres.length; i++) {
    mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
  }
  mang += `*Published on:* ${srh.data[0].published.from}\n`;
  mang += `*Score:* ${srh.data[0].scored}\n`;
  mang += `*Popularity:* ${srh.data[0].popularity}\n`;
  mang += `*Favorites:* ${srh.data[0].favorites}\n`;
  mang += `*Authors:*\n`;
  for (let i = 0; i < srh.data[0].authors.length; i++) {
    mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
  }
  mang += `\n*URL:* ${srh.data[0].url}\n\n`;
  if (srh.data[0].background !== null)
    mang += `*Background:* ${srh.data[0].background}`;
  mang += `*Description:* ${srh.data[0].synopsis.replace(
    /\[By InfinityAI]/g,
    ""
  )}`;
client.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break;
case "tts":  case "texttospeech":  case "say": case "speak":{
 
  client.sendMessage(from, { react: { text: "⌛" , key: m.key }})

  if (!text) return reply("Please give me a text so that i can speak it!")

    let texttosay = text
      ? text
      : m.quoted && m.quoted.text
      ? m.quoted.text
      : m.text;
    const SpeakEngine = require("google-tts-api"); 
    const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
    client.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `infinitytrt.mp3`,},{quoted: m,});
  }
  break;
case 'gdrive': {
                if (!args[0]) return reply(`Enter the Google Drive link`)
        reply ('please wait..')
        const fg = require('api-dylux')
        try {
        let res = await fg.GDriveDl(args[0])
         await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
        client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
        reply('Error: Check link or try another link') 
  }
}
break;
case "xnxxdl": {
     
        if (!m.isGroup) return reply ('Group command')
        if (!text) return reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        reply('Please wait')
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
client.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}
`, video: {url: xn.url_dl} }, { quoted: m })
}
break;
case 'xnxxsearch': {
        
        if (!m.isGroup) return reply('Group command')
        if (!text) return reply(`Enter Query`)
        reply('Please wait')
        const fg = require('api-dylux')
        let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break;
case 'mediafire':
if (args.length < 1) return reply('Where is the link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('error occured')
if (Number(size) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply('Please wait...')
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
client.sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break;

/*case 'gimg':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply('Please wait..')
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
client.sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break;*/
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
              client.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break;
case 'songg': {
if (!text) return reply(`Example : ${prefix + command} believer`)
    const ytdl = require('ytdl-secktor')
    let urlYt = text;
    if(m.quoted){ text=m.quoted.text; }

    if (!urlYt.startsWith("http")) 
    {
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        urlYt = anu.url; 
    }
    let infoYt = await ytdl.getInfo(urlYt);
    if (infoYt.videoDetails.lengthSeconds >= 1200) return reply(`*Found Your Song, But it was too lengthy, Try Different Name*`);
    let titleYt = infoYt.videoDetails.title;   
reply(`_Downloading ${infoYt.videoDetails.title}?_`);
await client.sendMessage(m.chat, { 
    audio: { url: urlYt }, 
    mimetype: 'audio/mpeg', 
    fileName: `${infoYt.videoDetails.title}.mp3`,
    caption: 'InfinityAI'
  }, {quoted: m})
}
break;

        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("not available", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Not available", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
