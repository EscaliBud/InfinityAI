
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const speed = require("performance-now");
const chalk = require("chalk");
const OpenAI = require("openai");
let setting = require("./key.json");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const openai = new OpenAI({ apiKey: setting.keyopenai });

module.exports = sansekai = async (client, m, chatUpdate) => {
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
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

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

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

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
          client.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/1dDfqWq/29cd4d80d509.jpg' }, caption: `


*┏━──●▬▬▬▬๑۩ 𓄂ᴋʀᴇͥsͣsͫᴡᴇʟʟ ۩๑▬▬▬▬▬●*
*┃*
*┃➥ Repo : https://github.com/EscaliBud/InfinityAI*
*┃➥ Library : Baileys*
*┃➥ Bot Name : InfinityAI*
*┃➥ Whatsapp Bot Ver : 2.12.0*
*┃➥ Creator : Kresswell*
*┗━──────────────*

*⌜ Utilities ⌟*

*┏━───────────────╮*
*┃➥Alive*
*┃➥Ping*
*┃➥Runtime*
*┃➥Speed*
*┗━───────────────╯*

*⌜ Downloader & Media ⌟*

*┏━───────────────╮*
*┃➥play*
*┃➥Yts*
*┃➥Yta*
*┃➥ytmp4*
*┃➥Ytmp3*
*┃➥YTV*
*┗━───────────────╯*
`, fileLength: "9999999999999999999999"}, { quoted: m }); 
           break;
          m.reply(`This Public bot is under development.`)
          // Group Commands
      
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
case "ping": case "speed": { 
         m.reply (`${infinityspeed.toFixed(4)} milliseconds`); 
         } 
 break; 

 case "runtime": { 
                 m.reply (`Bot active for ${runtime(process.uptime())}`) 
 } 
 break;

case "alive": { 

 client.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/1dDfqWq/29cd4d80d509.jpg' }, caption: `Hello ${m.pushName}, InfinityAI is active\n\nActive for:  ${runtime(process.uptime())}\n\nType ${prefix}help.`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
 }
break;

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
