
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const speed = require("performance-now");
const { exec, spawn, execSync } = require("child_process");
const axios = require('axios');
const { fromBuffer } = require('file-type');
const path = require('path');
const { performance } = require('perf_hooks');
const chalk = require("chalk");
const OpenAI = require("openai");
const os = require('os');
const google =require('google-it');
const Genius = require("genius-lyrics"); 
let setting = require("./key.json");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
//const openai = new OpenAI({ apiKey: setting.keyopenai });
const { Configuration, OpenAIApi } = require("openai");
const { getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')

module.exports = infinity = async (client, m, chatUpdate) => {
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
const dev = process.env.DEV || '254798242085'
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

        // Public & Self
        

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
 client.sendMessage(m.chat, {text:`Hello there \n\n@${ki.split("@")[0]}, sending links is not allowed here!!`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ IHK ]")),
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
*┃*
*┃➥ Repo : https://github.com/EscaliBud/InfinityAI*
*┃➥ Library : Baileys*
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

//download commands
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
            // reply("Downloading.. This may take upto 5 min!");
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

break  
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
                     url: "https://telegra.ph/file/c75efecf7f0aef851fc02.jpg" 
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
                    + 'N:;Kresswell.;;;'
                    + 'FN:Kresswell.\n' // full name
                    + 'ORG:Infinity Hackers;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=254798242085;+2547982042085\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                client.sendMessage(m.chat, { contacts: { displayName: 'Kresswell.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
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

          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 

             } 
break;
            case 'system': case 'speed': {
                let timestamp = speed()
                let kresswelli = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Speed ${kresswelli.toFixed(4)} _Seconds_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻Server Info
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
            break
          case "sc": case "script": case "scbot":
           m.reply("Find my source code from my github repository \n\n https://github.com/EscaliBud/InfinityAI");
          break
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
