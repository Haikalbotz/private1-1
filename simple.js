
//------------------------------------< hemm >------------------------------------

//TQ TO

//🐣 ALLAH SWT { MY GOOD }+{ MY PRIORITAS }
//🐣 RASULULLAH { MY IDOLA }
//🐣 ORANG TUA { MY FAMILY }
//♎ @ADIWAJSHING { MODULE }
//♎ BAILEYS { SERVER }
//🐣 Zero YT7 { Mastah }
//🐣 MY CRUSH <3 { ADA DEH }
//🐣 NATA { PEMOTIVASI }
//🐣 YENI { AUTHOR & PENYEMANGAT }
//🐣 KAHFZ BOT { MASTAH BAEK ,BAIK BANGAT }
//🐣 KALZX TEAM { MY TEAM }
//🐣 RIMURU BOTZ { PANUTAN }
//🐣 BOT DHANI? { MASTAH GG }
//🐣 ATAK BOT { MASTAH GG }
//🐣 ZEEONE OFC { MASTAH GEMGE }
//🐣 LOL HUMAN { REST API }
//🐣 XCHILDS { REST API }
//🐣 & ALL CREATOR BOT LAINNYA . . .
//🐣 & MAKASIH BANYAK BUAT SUBSCRIBER AKU <3

//👻 MHANKBARBAR { BASE ORI DIA } 
//👻 NURUTOMO { SEFUH } 
//👻 ARIFIRAZZAQ { SEFUH } 

//>>>>>>>>>>>>>>>>>{ 5 M NYA JANGAN LUPA YAK KAK :) }<<<<<<<<<<<<<\\

//JANGAN LUPA 5 M
//🐣. MEMAKAI MASKER
//🐣. MENCUCI TANGAN
//🐣. MENJAGA JARAK
//🐣. MENJAUHI KERUMUNAN
//🐣. MEMBATASI MOBILITAS

//==========[ BASE ORI MHANKBARBAR ]==========

//NEW BASE BY Mhankbarbar 
//# IZIN MHANKBARBAR MINJEM BASE NYA BWANG

//==========[ SC SUSUNAN HAIKALGANS ]==========

//JANGAN APUS CREATOR BAMG INI SC SY SUSUN BELUM LMA INI JADI JANGAN DI HUJAT KALO SC NYA JEMLEK
//BASE ORI MHANKBARBAR😇
//MAU RECODE SC? RECODE AJA TAPI JANGAN LUPA NAMA SAYA HAIKAL
//MAAF YA KALO MASIH BANYAK ERORR BARU BELAJAR NGAB 😭

//>>>>>>>>>>>>>>>>>{ AWALAN }<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\\

//Lib
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { forks, wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')

//node_modules #edisi males nysusun
const {WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,WA_DEFAULT_EPHEMERAL,ReconnectMode,ProxyAgent,GroupSettingChange,waChatKey,mentionedJid,processTime,} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { uploadimg, upload } = require('./lib/uploadimg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { menunya } = require('./lib/menu')
const brainly = require('brainly-scraper')

//------------------------------------------------< CONST SHOP >------------------------------------------
const { epep } = require('./shop/ff')
const { logo } = require('./shop/logo')
//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//
const _welcome = JSON.parse(fs.readFileSync('./tempatdata/welcome.json'))
const _antilink = JSON.parse(fs.readFileSync('./tempatdata/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./tempatdata/antivirtex.json'))
const _nsfww = JSON.parse(fs.readFileSync('./tempatdata/nsfww.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const _registered = JSON.parse(fs.readFileSync('./tempatdata/registered.json'))
const ApikeyNya = JSON.parse(fs.readFileSync('./ApikeyNya.json'))
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
menusimpel = false
const lah = '🐣ヅ', 
multi =false
offline = false
nopref = false
allpref = true
const total = "221"
thumbnail = setting.thumb
//━━━━━━━━━━━━━━━[ CONST SETTING ]━━━━━━━━━━━━━━━━━//

owner = setting.owner
botname = setting.botname
bian = setting.bian
bianname = setting.bianname
ownername = setting.ownername
yopki = setting.yopki
yopkiname = setting.yopkiname
dinda = setting.dinda
dindaname = setting.dindaname
nando = setting.nando
nandoname = setting.nandoname

//━━━━━━━━━━━━━━━[ CONST APIKEY ]━━━━━━━━━━━━━━━━━//

humankey = ApikeyNya.humankey
zerkey = ApikeyNya.zerkey
xchillds = ApikeyNya.xchillds

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = simple = async (simple, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		    const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const c = args.join(' ')
		const botNumber = simple.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6289609927539@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await simple.chats.all()
		const groupMetadata = isGroup ? await simple.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? simple.user.jid : simple.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? simple.user.name : conts.notify || conts.vname || conts.name || '-'
        const arg = budy.slice(command.length + 2, budy.length)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
//CONST ² IMAGE/THUMB>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\\\\\\\\\\

		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		 
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./poto/image/thub_1.jpg')
		const sekarang = new Date().getTime();
		
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: '*Proses Sabar Kak:-)* ... !',
			success: '*Asikkk Berhasil Ni!',
			error: {
				stick: 'Yahh Gagal Kak.. Pada Saat pembuatan  stickernya.! Coba Lagi deh Kak:)! ',
				Iv: 'Yahh Link Nya Erorr Kak :( !'
			},
			only: {
				admin: 'Fitur Khusus Admin !!',
				group: 'Fitur Khusus Grup !!'
			}
		}
		faketeks = '©〖Hིaིiིkིaིlིᴶᴿ.“ψ〗' //Ganti Aja Nama Luh
		ikal2 = '©Copy By | Haikal |Not Delete Creator Name |' // jan di ubah plis
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            simple.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            simple.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? simple.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : simple.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        
//SET THUMB>>>>>>>>>>>>>>>>>>>>>>>>>>>\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        const ikal = fs.readFileSync ('./poto/NATA.jpg')
        const costum = (pesan, tipe, target, target2) => {
			simple.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        
   
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = simple.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "List Haikal","footerText": `_HELLO KAK_ >.<
✋ 
_*Mohon Maklumi Kalo Masih Banyak,Yang Error, Kalo Ada Bug Atau Semacamnya Silakan Hubungi Owner Dengan Cara Ketik  .owner*_

© _*${week} ${weton} ${date}*_`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return simple.relayWAMessage(po, {waitForAck: true})
        }
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            simple.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: fgif
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await simple.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            simple.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: fgif,
                contexInfo: ikal
            })
        }
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await simple.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        simple.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
//>>>>>>>>>>>>>>>>>>>>>>>>[ RUNTIME BIO ]<<<<<<<<<<<<<<<<<<<<<<<<<<\\

     waktu = process.uptime() 
    simple.setStatus(`⏰Bot Active Selama | ${kyun(waktu)} | ${botname} `).catch((_)=>_);
    
      settingstatus = new Date() * 1;
      
//>>>>>>>>>>>>>>>>>>>>>[ BUTTON TAMBAHAN ]<<<<<<<<<<<<<<<<<<<<<<<\\
                       
                  async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }    
        
        const jelek = { "title": `Hallo ${pushname}`,"body": `hy`, "mediaType": "2", "mediaUrl": "https://youtube.com/shorts/b_L5jlwrFRs?feature=share", "thumbnail": fs.readFileSync('./poto/YENI.jpg')}

                       
// fakedoc
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: ikal
                          }
                        }
                      }          

//Butdoc
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await simple.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
simple.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount: 2022,
                            status: 1,
                            surface : 1, //Ganti Aja Nama Luh
                            message: `🐣 JAM : ${time}`,
                            thumbnail: ikal, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// fakevideo
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Haikal`,
                 "h": `OWNER KU JELEK😄`,
                 'duration': '99999', 
                 'caption': `OWNER KU JELEK😄`,
                 'jpegThumbnail': ikal
                        }
                       }
	                  }
//faketoko	                  
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": ikal //Gambarnye
					},
					"title": `HAI👋 ${pushname}`, //Kasih namalu 
					"description": `💀My Z Bot ofc`, 
					"currencyCode": "Rp",
					"priceAmount1000": "1.00",
					"retailerId": `HAI👋 ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

//fakegif
const fgif = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `💀`,
                 "h": `💀👋`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `💀`,
                 'jpegThumbnail': ikal
                        }
                       }
	                  }
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./tempatdata/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
simple.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `
㋡ NᎪᎷᎬ ᏴᎾᎢ : ${botname}
㋡ ᎾᏔNᎬᎡ : ${ownername}

🌷нaι ĸaĸ ${pushname} terimakasih telah mengunjungi bot ini \n\n ѕeвelυм мenggυnaĸan ғιтυr ${botname} ѕιlaнĸan verιғy dυlυ ya😉 ĸlιĸ вυттon ʀᴇɢɪsᴛʀᴀsɪ dι вawaн `
const daftar2 = '```ᎡᎬᏩᏆᏚᎢᎬᎡ ᎢᎬᎡᏞᎬᏴᏆᎻ ᎠᎪᎻᏌᏞᏌ ᏌNᎢᏌK ᎷᎬNᏆKᎷᎪᎢᏆ FᏆᎢᏌᎡ²```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `ᖇEGIᔕTᖇᗩᔕI🌷`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}	                  
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./poto/YENI.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        simple.chatRead(from, "read")
        const fakegroup = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./poto/YENI.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
  
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        simple.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    simple.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
simple.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
simple.groupRemove(from, [sender])
}     


    //CLOCKSTRING
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}


//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

	let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                         var jamss = ase.getHours();
                         switch(jamss){
  case 0: jamss = "Jangan gadang kak😁"; break;
  case 1: jamss = "Jangan gadang kak😁"; break;
  case 2: jamss = "Jangan gadang kak😁"; break;
  case 3: jamss = "Jangan gadang kak😁"; break;
  case 4: jamss = "Pagi 🌄 Jangan lupa sholat Subuh kak😇"; break;
   case 5: jamss = "Selamat pagi🌅"; break;
    case 6: jamss = "Selamat pagi 🌄"; break;
     case 7: jamss = "Selamat pagi🌄"; break;
      case 8: jamss = "Selamat pagi🌄"; break;
       case 9: jamss = "Selamat pagi🌄"; break;
         case 10: jamss = "Selamat pagi🌄"; break;
           case 11: jamss = "Selamat siang🌞"; break;
             case 12: jamss = "Siang 🌞 Jangan lupa sholat Zuhur kak😇"; break;
                 case 13: jamss = "Selamat siang🌞"; break;
                  case 14: jamss = "Selamat sore🌇"; break;
                    case 15: jamss = "Sore🌇Jangan lupa sholat Ashar kak😇"; break;
                      case 16: jamss = "Selamat sore🌇"; break;
                       case 17: jamss = "Selamat sore🌇"; break;
                        case 18: jamss = "Selamat malam🌙"; break;
                          case 19: jamss = "Malam 🌙 Jangan lupa sholat Isya kak😇"; break;
                             case 20: jamss = "Selamat malam🌙"; break;
                            case 21: jamss = "Selamat malam🌙"; break;
                          case 22: jamss = "Selamat malam 🌙"; break;
                        case 23: jamss = "Selamat malam🌙"; break;

            }
            var tampilUcapan = "" + jamss;
let locale = "id";
             let d = new Date();
             	let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
             const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
            let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
   const sotoy = [
     '🍊 : 🍒 : 🍐',
  '  🍒 : 🔔 : 🍊',
   '🍇 : 🍇 : 🍐',
 '🍊 : 🍋 : 🔔', //ANKER
  '🔔 : 🍒 : 🍐',
    '🔔 : 🍒 : 🍊',
      '🍊 : 🍋 : 🔔',        
      '🍐 : 🍒 : 🍋',
     '🍐 : 🍒 : 🍐',
    '🍊 : 🍒 : 🍒',
   '🔔 : 🔔 : 🍇',
 ' 🍌 : 🍌 : 🔔',
     '🍐 : 🔔 : 🔔',
     ' 🍊 : 🍋 : 🍒',
     '🍋 : 🍋 : 🍋 Win👑',
    '🔔 : 🔔 : 🍇',
  ' 🔔 : 🍇 : 🍇', 
  '🔔 : 🍐 : 🔔',
   '🍌 : 🍌 : 🍌 Win👑',
     '🌵 : 🍄 : 🌴',
       '🍆 : 🍔 : 🍄',
        '🍔 : 🍔 : 🍔 Win👑'
        ]    
        
        
simple.updatePresence(from, Presence.composing)
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

 switch (command) {
	case 'menu':
	case 'help':
	case 'm':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
Ppurl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer (Ppurl)
teks = `乂•  ${pushname} 👋${tampilUcapan}`
trans = `              ❬ BOT INFO ❭

╭─❒ 「 INFO SERVER 」 ❒
├ 🚬 Base : *Mhankbarbar*
├ 💀 Penyusun : *Haikal*
├ 🌅 Terbit : *15-01-2022*
├ 🌆 Tempat : *Kota Bekasi, Jawabarat*
└❏
┌────“ 💭 „────
│‣ _*Nama Bot : ${botname}*_
│‣ _*Nama Owner : ${ownername}*_
│‣ _*Active : ${runtime(process.uptime())}*_
│‣ _*Prefix : Multi*_
│‣ _*Lenguage : Javascript*_
│‣ _*Jam : ${time}*_
└➤ | © Haikal 。✑ ─────

"Ketahuilah bahwa kemenangan bersama kesabaran, kelapangan bersama kesempitan, dan kesulitan bersama kemudahan." (HR Tirmidzi)

_*JIKA BUTTON TIDAK TERLIHAT KETIK .allmenu*_
 © _${week} ${weton} ${date}_`
 
 but = [
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLE' }, type: 1 },
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALLMENU' }, type: 1 },
        ]
  
 
        sendButImage(from, teks, trans, img, but, {quoted: ftok})
        break
case 'ppcouple':
case 'ppcp': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			simple.sendMessage(from, cowo, image, {caption: 'Ini Untuk »  *𝗖𝗼𝘄𝗼𝗸𝗻𝘆𝗮'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *𝗖𝗲𝘄𝗲𝗸𝗻𝘆𝗮*`
   sendButImage(from, pll, `YENI BOTZ © 2021`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
break
                              
                    
   
             
  case 'bot':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break


// Baterai
	simple.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	simple.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                          
	simple.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });

//>>>>>>>>>>>>>>>>>>>>[ COMMAND ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

  case 'c':

  case 'command':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
            listmenu = [`shop`,`sewabot`,`groupmenu`,`stickermenu`,`downloadmenu`,`islammenu`,`animemenu`,`informationmenu`,`randomtextmenu`,`searchmenu`,`primbonmenu`,`stalkmenu`,`randomimagemenu`,`ownermenu`,`asupanmenu`,`gabut`,`game`,`meme`,`murid`,`djmenu`,`makermenu`,]
               listmenuu = [`shop`,`sewabot`,`grupmenu`,`stickermenu`,`downloadmenu`,`islammenu`,`animemenu`,`informationmenu`,`randomtextmenu`,`searchmenu`,`primbonmenu`,`stalkmenu`,`randomimagemenu`,`ownermenu`,`asupanmenu`,`gabut`,`game`,`meme`,`murid`,`djmenu`,`makermenu`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'YENI💙',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `SIMPLE-BOT`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`, `Hai kak ${pushname}, Pilih Menu Disini`, list)
               break
  
  case 'payment':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
               listmenu = [`gopay3`,`dana3`,`ovo3`,]
               listmenuu = 
                   [`gopay`,`dana`,`ovo`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Payment' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `paymentSimple`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\n©simplelist, _Ini Command Payment Nya_`, list)
               break
  
    case 'djmenu':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
  
               list = []
               listmenu = [`sound1`,`sound2`,`sound3`,`sound4`,`sound5`,`sound6`,`sound7`,`sound8`,`sound9`,`sound10`,`sound11`,`sound12`,`sound13`,`sound14`,`sound15`,`sound16`,`sound17`,`sound18`,`sound19`,`sound20`,`sound21`,`sound22`,`sound23`,`sound24`,`sound25`,]
               listmenuu = 
[`sound1`,`sound2`,`sound3`,`sound4`,`sound5`,`sound6`,`sound7`,`sound8`,`sound9`,`sound10`,`sound11`,`sound12`,`sound13`,`sound14`,`sound15`,`sound16`,`sound17`,`sound18`,`sound19`,`sound20`,`sound21`,`sound22`,`sound23`,`sound24`,`sound25`,]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'List vn' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\n©simplelist, _Ini Command Soundnya`, list)
               break

case 'shop':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
               list = []
               listmenu = [`deemepep`,`bayar`,`masukandata`,`listsewa`,`jaslog`,`owner`,`payment`]
               listmenuu = [`deemepep`,`bayar`,`masukandata`,`listsewa`,`jaslog`,`owner`,`payment`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'ShopMenu' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `©HaikalGans`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${tampilUcapan}`,   `Hai kak *${pushname}*\nJangan Lupa Di Order Kak`, list)
               break

//>>>>>>>>>>>>>>>>>>>>>>>[ CASE COMMAND ]<<<<<<<<<<<<<<<<<<<<<<<<\\

case 'grouphaikal':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`_*HAI*_`
oy =`
https://chat.whatsapp.com/GCf6umdUm2bL8sQihW31gh

_Ga Join Ga Kawan_
_*LANJUT? KLIK BUTTON DI BAWAH*_
`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'NEXT➡' }, type: 1 }, 
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLE➡' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'userinfo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`「 ${botname} 」
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
𝐃𝐨𝐧'𝐭 𝐒𝐩𝐚𝐦`
oy =`
𝐔𝐬𝐞𝐫 𝐢𝐧𝐟𝐨
🐣 _Status : ${isOwner ? 'Owner' : 'User'}_
🐣 _Nama User : ${pushname}_
🐣 _Nomor User : ${sender.split('@')[0]}_
_*Youtube Owner*_

https://youtube.com/channel/UCYDZpsK1w7hWYInmyZowrUA
_SubsCribe_

_*LANJUT? KLIK BUTTON DI BAWAH*_
`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'NEXT➡' }, type: 1 }, 
          { buttonId: `${prefix}command`, buttonText: { displayText: 'SIMPLE➡' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'isidataakun':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`「 ${botname} 」
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
𝐃𝐨𝐧'𝐭 𝐒𝐩𝐚𝐦`
oy =`
*「BOT MELAYANI」
MASUKKANA DATA BERIKUT

*• NAMA GAME:*
*• ID GAME:*
*• USER NAME:*
*NOTE:*
*1. Jangan Lupa Bukti Tf*
*2. Jika Mau Tf Harap Hubungi*
*Owner Terlebih Dahulu !!*
*3. Otomatis Pesanan Anda*
*Langsung Di Proses*`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '👑OWNER👑' }, type: 1 }
        ]
         sendButton(from, emm, oy, but)
break

case 'listsewa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
emm =
`「 ${botname} 」
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
𝐃𝐨𝐧'𝐭 𝐒𝐩𝐚𝐦`
oy =`
*_Jasa Sewa Bot By : ©HaikalGans_
*>>>>>>>> *LIST HARGA* >>>>>>>>*
[🔥] . _Fitur Bot Banyak And Ada Catalog Menu_

🐣. _*2Minggu : Rp. 3.000 [ Promo ]*_
🐣. _*1Bulan : Rp. 5.000 [ Promo ]*_
🐣. _*Manent : Rp. 10.000 [ Promo ]*_

 _Jika Anda Minat Bisa Chat Nomer Ini_
_*🪀 Wa.me/6289609927539*_
_Note Jangan Spam_
_*Maaf Jika Slow Respon Karena Sesuai Antrian*_`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '👑OWNER👑' }, type: 1 }
        ]
          sendButImage(from, emm, oy, img, but)
break

case 'deemepep':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
emm =
`「 ${botname} 」
Hai, ${pushname}
${tampilUcapan}
Jam : ${time}
HARI : ${week}, ${date}
𝐃𝐨𝐧'𝐭 𝐒𝐩𝐚𝐦`
oy =`${epep}`
but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
           { buttonId: `${prefix}payment`, buttonText: { displayText: 'BAYAR' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
        break

case 'groupmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
${lah} ${prefix}𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬
${lah} ${prefix}𝘸𝘦𝘭𝘤𝘰𝘮𝘦
${lah} ${prefix}𝘢𝘯𝘵𝘪𝘷𝘪𝘳𝘵𝘦𝘹
${lah} ${prefix}𝘨𝘳𝘰𝘶𝘱
${lah} ${prefix}𝘭𝘪𝘯𝘬𝘨𝘳𝘶𝘱
${lah} ${prefix}𝘱𝘳𝘰𝘮𝘰𝘵𝘦
${lah} ${prefix}𝘥𝘦𝘮𝘰𝘵𝘦
${lah} ${prefix}𝘢𝘥𝘥
${lah} ${prefix}𝘬𝘪𝘤𝘬
${lah} ${prefix}𝘴𝘦𝘵𝘱𝘱
${lah} ${prefix}𝘴𝘦𝘵𝘥𝘦𝘴𝘤
${lah} ${prefix}𝘴𝘦𝘵𝘯𝘢𝘮𝘦
${lah} ${prefix}𝘩𝘪𝘥𝘦𝘵𝘢𝘨
${lah} ${prefix}𝘵𝘢𝘨𝘢𝘭𝘭
${lah} ${prefix}𝘭𝘪𝘴𝘵𝘢𝘥𝘮𝘪𝘯`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '♌RULES BOT♌' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
case 'stickermenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
 ⸙Sticker Menu⸙
${prefix}attp
${prefix}sticker
${prefix}tomp3
${prefix}tovideo`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🐼RULES BOT🐼' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'downloadmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
 ⸙Downloader Menu⸙
${prefix}play
${prefix}ytsearch
${prefix}ytmp3
${prefix}ytmp4
${prefix}tiktoknowm
${prefix}tiktokmusic
${prefix}pinterest`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🐥RULES BOT🐥' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
case 'islammenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
  ⸙Islam Menu⸙
${prefix}alquran
${prefix}asmaulhusna
${prefix}alquranaudio
${prefix}jadwalsholat
${prefix}kisahnabi
${prefix}listsurah`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '♓RULES BOT♓' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
case 'animemenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
  ⸙Anime Menu⸙
${prefix}character
${prefix}manga
${prefix}anime
${prefix}kusonimesearch
${prefix}otakudesusearch
${prefix}nhentaisearch
${prefix}nekopoisearch`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '💆RULES BOT💆' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
case 'informationmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Information Menu⸙
${prefix}kbbi
${prefix}infogempa
${prefix}covidindo
${prefix}covidglobal
${prefix}jadwaltv
${prefix}translate
${prefix}cuaca
${prefix}wikipedia
${prefix}jarak`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '😬RULES BOT😬' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
 
case 'randomtextmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Random Text Menu⸙
${prefix}quotes
${prefix}quotesanime
${prefix}quotesdilan
${prefix}quotesimage
${prefix}katabijak
${prefix}randomnama`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☯️RULES BOT☯️' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'djmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙sound menu⸙
${prefix}sound1
${prefix}sound2
${prefix}sound3
${prefix}sound4
${prefix}sound5
${prefix}sound6
${prefix}sound7
${prefix}sound8
${prefix}sound9
${prefix}sound10
${prefix}sound11
${prefix}sound12
${prefix}sound13
${prefix}sound14
${prefix}sound15`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🔱RULES BOT🔱' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
case 'searchmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Search Menu⸙
${prefix}gimage
${prefix}wallpapersearch
${prefix}playstore
${prefix}shopee
${prefix}google`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☕RULES BOT☕' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
case 'primbonmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Primbon Menu⸙
${prefix}tebakumur
${prefix}artinama
${prefix}jodoh
${prefix}jadian`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '⛅RULES BOT⛅' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
case 'stalkmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Stalk Menu⸙
${prefix}stalkig
${prefix}stalkgithub
${prefix}stalktiktok`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '✋RULES BOT✋' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
case 'randomimagemenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Random Image Menu⸙
${prefix}art
${prefix}bts
${prefix}exo
${prefix}elf
${prefix}loli
${prefix}neko
${prefix}waifu
${prefix}shota
${prefix}husbu
${prefix}sagiri
${prefix}shinobu
${prefix}wallnime
${prefix}megumin
${prefix}chiisaihentai
${prefix}trap
${prefix}blowjob
${prefix}yaoi
${prefix}ecchi
${prefix}hentai
${prefix}ahegao
${prefix}hololewd
${prefix}sideoppai
${prefix}animefeets
${prefix}animebooty
${prefix}animethighss
${prefix}animearmpits
${prefix}hentaifemdom
${prefix}lewdanimegirls
${prefix}biganimetiddies
${prefix}hentai4everyone`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '😭RULES BOT😭' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
 
case 'asupanmenu':

if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Asupan Menu⸙
${prefix}asupan
${prefix}asupancecan
${prefix}asupanhillllljaber
${prefix}asupansantuy
${prefix}asupanukhti
${prefix}asupanbocil
${prefix}asupanghea
${prefix}asupanrika`  
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '😎RULES BOT😎' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'meme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Random Meme Menu⸙
${prefix}randommeme
${prefix}randomdarkjoke
${prefix}randommemeindo`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🐣RULES BOT🐣' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'gabut':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Gabut Menu⸙
${prefix}apakah
${prefix}cekganteng
${prefix}cekcantik
${prefix}hobby
${prefix}bisakah
${prefix}kapankah
${prefix}citacita`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🌟RULES BOT🌟' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'makermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Maker Menu⸙
${prefix}neon
${prefix}glitch
${prefix}thunder
${prefix}tahta
${prefix}glow`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '🐸RULES BOT🐸' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'game':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Game Menu⸙
${prefix}slot
${prefix}truth
${prefix}dare
${prefix}tembak
${prefix}tebakjenaka
${prefix}tebaklirik
${prefix}tebaktebakan
${prefix}caklontong`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '♋RULES BOT♋' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break

case 'ownermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
emm =
`Hai, ${pushname}
${tampilUcapan}
Name Bot : ${botname} 
Jam : ${time}
HARI : ${week}, ${weton}, ${date}`
oy =`
⸙Owner Menu⸙
${prefix}owner
${prefix}sewabot
${prefix}bc
${prefix}report`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '👻RULES BOT👻' }, type: 1 }
        ]
          sendButton(from, emm, oy, but)
break
    
//━━━━━━━━━━━━━━━[ ALLMENU ]━━━━━━━━━━━━━━━━━//

	
case 'allmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ppUrl = 'https://telegra.ph/file/ecac94e418534db656dd0.jpg'
img = await getBuffer(ppUrl)
teks = `Hai ${pushname} 👋${tampilUcapan}
I'M Z-BOT8 ^_^`
trans = `BOT INFO
🗿  _*Nama Bot : ${botname}*_
😨  _️Nama Owner : ${ownername}_
️⏰  _*Active : ${runtime(process.uptime())}*_
🐣  _️Prefix : Multi_
👑  _lenguage : JavaScript_
🕟  _Jam : ${time}_

☠︎︎ *GROUP Menu*
• _${prefix}antilink_
• _${prefix}welcome_
• _${prefix}antivirtex_
• _${prefix}group_
• _${prefix}linkgroup_
• _${prefix}promote_
• _${prefix}demote_
• _${prefix}add_
• _${prefix}kick_
• _${prefix}setpp_
• _${prefix}setdesc_
• _${prefix}setname_
• _${prefix}hidetag_

☠︎︎ *PHOTOOXY Menu*
• _${prefix}shadow_
• _${prefix}cup_
• _${prefix}cup1_
• _${prefix}romance_
• _${prefix}smoke_
• _${prefix}burnpaper_
• _${prefix}lovemessage_
• _${prefix}undergrass_
• _${prefix}love_
• _${prefix}coffe_
• _${prefix}woodheart_
• _${prefix}woodenboard_
• _${prefix}summer3d_
• _${prefix}wolfmetal_
• _${prefix}nature3d_
• _${prefix}underwater_
• _${prefix}golderrose_
• _${prefix}summernature_
• _${prefix}letterleaves_
• _${prefix}glowingneon_
• _${prefix}fallleaves_
• _${prefix}flamming_
• _${prefix}harrypotter_
• _${prefix}carvedwood_

☠︎︎ *SRICKER Menu*
• _${prefix}attp_
• _${prefix}sticker_
• _${prefix}tomp3_
• _${prefix}tovideo_

☠︎︎ *DOWNLOADER Menu*
• _${prefix}yt_
• _${prefix}tt_
• _${prefix}play_
• _${prefix}ytsearch_
• _${prefix}ytmp3_
• _${prefix}ytmp4_
• _${prefix}tiktoknowm_
• _${prefix}tiktokmusic_
• _${prefix}pinterest_

☠︎︎ *ISLAM Menu*
• _${prefix}alquran_
• _${prefix}asmaulhusna_
• _${prefix}alquranaudio_
• _${prefix}jadwalsholat_
• _${prefix}kisahnabi_
• _${prefix}listsurah_

☠︎︎ *ANIME Menu*
• _${prefix}character_
• _${prefix}manga_
• _${prefix}anime_
• _${prefix}kusonimesearch_
• _${prefix}otakudesusearch_
• _${prefix}nhentaisearch_
•  _${prefix}nekopoisearch_

☠︎︎ *INFORMASI Menu*
• _${prefix}kbbi_
• _${prefix}infogempa_
• _${prefix}covidindo_
• _${prefix}covidglobal_
• _${prefix}jadwaltv_
• _${prefix}translate_
• _${prefix}cuaca_
• _${prefix}wikipedia_
• _${prefix}jarak_

☠︎︎ *SEARCH Menu*
• _${prefix}gimage_
• _${prefix}wallpapersearch_
• _${prefix}playstore_
• _${prefix}shopee_
• _${prefix}google_

☠︎︎ *PRIMBON Menu*
• _${prefix}tebakumur_
• _${prefix}artinama_
• _ ${prefix}jodoh_
• _${prefix}jadian_

☠︎︎ *ASUPAN Menu*
• _${prefix}asupan_
• _${prefix}cecan_
• _${prefix}hijaber_
• _${prefix}santuy_
• _${prefix}ukhti_
• _${prefix}bocil_
• _${prefix}ghea_
• _${prefix}rika_

☠︎︎ *GAME Menu*
• _${prefix}slot_
• _${prefix}truth_
• _${prefix}dare_
• _${prefix}tembak_
• _${prefix}tebakjenaka_
• _${prefix}tebaklirik_
• _${prefix}tebaktebakan_
• _${prefix}caklontong_

☠︎︎ *SOUND Menu*
• _${prefix}sound1_
• _${prefix}sound2_
• _${prefix}sound3_
• _${prefix}sound4_
• _${prefix}sound5_
• _${prefix}sound6_
• _${prefix}sound7_
• _${prefix}sound8_
• _${prefix}sound9_
• _${prefix}sound10_
• _${prefix}sound11_
• _${prefix}sound12_
• _${prefix}sound13_
• _${prefix}sound14_
• _${prefix}sound15_

☠︎︎ *TEXTPROME Menu*
• _${prefix}pornhub_
• _${prefix}neon_
• _${prefix}glitch_
• _${prefix}thunder_
• _${prefix}tahta_
• _${prefix}glow_
• _${prefix}wetglass_
• _${prefix}multicolor3d_
• _${prefix}watercolor_
• _${prefix}luxurygold_
• _${prefix}galaxywallpaper_
• _${prefix}lighttext_
• _${prefix}beautifulflower_
• _${prefix}puppycute_
• _${prefix}royaltext_
• _${prefix}heartshaped_
• _${prefix}birthdaycake_
• _${prefix}galaxystyle_
• _${prefix}hologram3d_

☠︎︎ *EPHOTO Menu*
• _${prefix}greenneon_
• _${prefix}glossychrome_
• _${prefix}greenbush_
• ,${prefix}metallogo_
• _${prefix}noeltext _
• _${prefix}glittergold_
• _${prefix}textcake_
• _${prefix}starsnight_
• _${prefix}wooden3d_
• _${prefix}textbyname_
• _${prefix}writegalacy_
• _${prefix}galaxybat_
• _${prefix}snow3d_
• _${prefix}birthdayday_
• _${prefix}goldplaybutton_
• _${prefix}silver play button_
• _${prefix}freefire_

☠︎︎ *OWNER Menu*
• _${prefix}owner_
• _${prefix}sewabot_
• _${prefix}bc_
• _${prefix}report_`
 
 but = [
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🐣PEMILIKBOT🐣' }, type: 1 },
] 
  
 
        sendButImage(from, teks, trans, img, but)
        break

//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//

case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./tempatdata/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./tempatdata/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./tempatdata/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await simple.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
simple.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
}
break
	case 'kontak':
	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
              if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
case 'demote' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
simple.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
simple.groupRemove(from, mentioned)
}
break
case 'tagall':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateSubject(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateDescription(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
po = await simple.downloadAndSaveMediaMessage(mek, './tempatdata/media_user')
await simple.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await simple.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
simple.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
simple.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'ttp':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURI(q)}`)
simple.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Z-BOT8`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
simple.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedSticker) return reply(' reply stickernya kak :)')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `©_YENI BOTZ_ *V : 2.889H*`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await simple.downloadAndSaveMediaMessage(encmedia, './tempatdata/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
simple.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await simple.downloadAndSaveMediaMessage(anumedia, './tempatdata/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
simple.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Z-BOT8' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${humankey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${humankey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${humankey}`)
await simple.sendMessage(from, ini_buffer, audio, { quoted: fgif, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//


case 'tt':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
teks =
`_Please choose a file or media you want to download_`
but = [
{ buttonId: `${prefix}tiktokmusic ${q}`, buttonText: { displayText: ' MP3🎵'}, type: 1 },
{ buttonId: `${prefix}tiktok ${q}`, buttonText: { displayText: ' MP4📹'}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break

case 'yt':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
teks =
`Audio Atau Video Tod`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: 'LAGU🎼'}, type: 1 },
{ buttonId: `${prefix}ytmp4 ${q}`, buttonText: { displayText: 'VIDEO🎥'}, type: 1 },
]
sendButton(from, teks, faketeks,  but) 
break

case 'play':
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ikal1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\n\n[ ❗ ] _JANGAN TERLALU BANYAK MENGGUNAKAN FITUR PLAY  KARENA MENYEBABKAN MEMORY PENUH_`
ikal2 =`Silahkan Klik Download Dibawah Ini`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '️DOWNLOAD 🎵' }, type: 1 },]
sendButImage(from, ikal1, ikal2, thmb, but)
break
case 'playmp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${humankey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${humankey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `P L A Y\n\n`
caption += `🔴 Title     : *${result.title}*\n\n`
caption += `🔴 Size     : *${result.size}*\n\n`
caption += `🔴 Link     : *${result.link}*\n\n`
caption += `_*TUNGGU MUNGKIN FILE SEDANG DI KIRIM HARAP TUNGGU BEBERAPA MENIT*_`
ini_buffer = await getBuffer(result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playmp4":
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytsearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${humankey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytmp4':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${humankey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Kak'})
break
case 'tiktok':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${humankey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Done...!!!'})
break
case 'tiktoknowm':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${humankey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol })
break
case 'tiktokmusic':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${humankey}&url=${ini_link}`)
await simple.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'pinterest':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${humankey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//

case 'character':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${humankey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${humankey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${humankey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${humankey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} RCTI`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'infogempa':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await simple.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await simple.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${humankey}`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${humankey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${humankey}`)
reply(quotedilan.result)
break
case 'quotesimage':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${humankey}`)
await simple.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${humankey}`)
reply(get_result.result)
break
case 'randomnama':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${humankey}`)
reply(anu.result)
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${humankey}&query=${query}`)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${humankey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${humankey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Z-BOT8`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${humankey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${humankey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Z-BOT8`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${humankey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${humankey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
simple.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} tjukruw`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey={humankey}`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
simple.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Ikalbot`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${humankey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
simple.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${humankey}`).then((gambar) => {
simple.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${humankey}`).then((gambar) => {
simple.sendMessage(from, gambar, image, { quoted: ftrol })
})
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'done':
case 'owner':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
let inilist = []
for (let i of ownerNumber) {
let vname = simple.contacts[i] != undefined ? simple.contacts[i].vname || simple.contacts[i].notify : undefined
inilist.push({
"displayName": 'HaikalGanz',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await simple.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: '.rulesbot', buttonText: {displayText: 'RULES'}, type: 1}
]
 buttons = {
    contentText: 'Nih Owner Ku Mau Tanya? Jangan Malu-Malu, Save Aja Kalo Boleh :)',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await simple.sendMessage(from, buttons, MessageType.buttonsMessage,)
break
case 'bc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
anu = await simple.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
contentText: `${q}`,
footerText: '*「 BOT BROADCAST 」*',
buttons: buttonss,
headerType: 1
}
await simple.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: fgif})
}
reply(`Sukses mengirim Broadcast:\n${q}`)
break
case 'report':
const pesan = body.slice(8)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant 
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
simple.sendMessage(`62815143205943@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break

case 'infobot':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
img =  fs.readFileSync('./poto/promo.jpg')
tod = `
╭━🔥─BOT INFO─━─🔥━╮
 |Hai ${pushname} 👋 selamat ${tampilUcapan}
│🔖Nama Bot : ${botname}
│🔖Nama Owner : ${ownername}
│🔖Nomor Owner : ${owner}
│🔖Prefix :「 Multi Prefix 」
│🔖Runtime : _*${process.uptime()}*_
╰━━🔥─━─◈─━🔥─━╯`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNERᏪ' }, type: 1 }
]
 sendButLocation(from, tod, faketeks, img, but) 
break
case 'setprofile':
				case 'setppbot':
				simple.updatePresence(from, Presence.composing)
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await simple.downloadAndSaveMediaMessage(enmediau)
					await simple.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                simple.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'jaslog':
simple.updatePresence(from, Presence.recording)
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
tod = `${logo}`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }, 
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWABOT' }, type: 1 }, 
]
 sendButImage(from, tod, faketeks, img, but) 
break

//(START) //

//━━━━━━━━━━━━━━━[ FITUR SEWA BOT ]━━━━━━━━━━━━━━━━━//

case 'sewabot':

simple.updatePresence(from, Presence.recording)
told =  fs.readFileSync('./poto/bot.mp4')
img =  await getBuffer(told)
tod = `
*JASA SEWA BOT BY : HAIKAL*

乂. _List Harga_ :

あ.*1-MINGGU = 3.000*
あ.*2-MINGGU = 5.000*
あ.*1-BULAN = 10.000*
あ.*PER-MANENT = 15.000*

_*MINAT? INGIN SEWA BOT? KLIK LINK DI BAWAH*_

︎☂︎Link : *http://wa.me/6289609927539?text=BG+MAU+SEWA+BOT*
   `
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 }, 
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }, 
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }, 
]
 sendButVideo(from, tod, faketeks, told, but) 
break

case 'gopay':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "GOPAY : 089609927539", faketeks, but, mek)
break
case 'dana':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "DANA : 089609927539", faketeks, but, mek)
break
case 'ovo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "OVO : 089609927539", faketeks, but, mek)
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'asupan1':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
lahh = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${humankey}`)
			lah = await getBuffer(lahh.result)
			await sendButVideo(from, `@${sender.split("@")[0]}\nClick Button Next For More`,lah, but = [{buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT`}, type: 1}], hia = { quoted: mek, contextInfo: { mentionedJid: [sender]}})
			break
case 'gdanta':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'hijaber':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'santuy':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'ukhti':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'bocil':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'ghea':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break
case 'rika':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Z-BOT8'})
break

//━━━━━━━━━━━━━━━[ FITUR GABUT ]━━━━━━━━━━━━━━━━━//

case 'apakah':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
simple.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftrol })
break
case 'cekganteng':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
simple.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftrol })
break
case 'cekcantik':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
simple.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftrol })
break
case 'hobby':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
const hooo = kan[Math.floor(Math.random() * kan.length)]
simple.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: ftrol })
break
case 'bisakah':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
simple.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
break
case 'citacita':  
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
var cita3 = cita[Math.floor(Math.random() * cita.length)]
cita2 = await getBuffer(cita3)
simple.sendMessage(from, cita2, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
break
case 'kapankah':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
simple.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
break


//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'truth':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButton(from, `_*Truth*_\n\n${ttrth}`, `${tampilUcapan}`, fs.readFileSync("./poto/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "➡️ NEXT" }, type: 1 } ], { contextInfo: { mentionedJid: [sender] }})                 
break
case 'dare':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButton(from, `_*Dare*_\n\n${der}`, `${tampilUcapan}`, fs.readFileSync("./poto/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
break
case 'tebakkalimat':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaklirik':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebakkimia':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, tebakjenaka, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakgambar':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
simple.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
case 'suit':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break

case 'slot':
            case 'slots':
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            simple.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'randommeme':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${humankey}`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break
case 'randomdarkjoke':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${humankey}`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break
case 'randommemeindo':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${humankey}`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Kak'})
})
break

case 'dinda':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${dindaname}\n`
+ `ORG: Creator ${dindaname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${dinda}:${dinda}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${dindaname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER DINDA')
break
case 'okh tq bot':
reply('sama-sama kak 😇') 
break

case 'bian':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${bianname}\n`
+ `ORG: Creator ${bianname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${bian}:${bian}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${bianname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER BRIAN SUNG TARIK KE GRUP BER²')
break


case 'yopki':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${yopkiname}\n`
+ `ORG: Creator ${yopkiname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${yopki}:${yopki}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${yopkiname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER YOPKI SUNG TARIK KE GRUP BER²')
break

case 'nando':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${nandoname}\n`
+ `ORG: Creator ${nandoname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${nando}:${nando}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${nandoname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER NANDO SUNG TARIK KE GRUP BER²')
break

case 'start':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
reply('_*Starting*_. . .')	
reply('_*Opened Conected√*_. . .')	
trans = `Note : kalau kamu wa lama atau mod, dan button ga keliatan, langsung aja ketik allmenu`
buttonss = [{buttonId: `${prefix}m`, buttonText: {displayText: 'START▶'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'MENU🔥'}, type: 1}]
const buMess = {
    contentText: "_*BOT SUDAH BERHASIL START*_",
    footerText: '🔖 _1.868 >User Aktif_',
    buttons: buttonss,
    headerType: 1
}
reply('_*Done Connected*_. . .')	
await simple.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
case 'sound9':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('modevn/start.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break



//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//


case 'sound1':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj1.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj2.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj3.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj4.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj5.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj6.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj7.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj8.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj9.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj10.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj11.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj12.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj13.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj14.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj16.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj17.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj18.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj19.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj20.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj21.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj22.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj23.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj24.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj25.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj26.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj27.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj28.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj29.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
sound = fs.readFileSync('Audio/dj30.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break

 case 'pornhub': case 'glitch':  case 'avenger': case 'space': case 'ninjalogo': case 'marvelstudio': case 'lionlogo':case 'wolflogo':case 'steel3d':case 'wallgravity': 
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
 if (args.length == 0) return reply(`Contoh: ${prefix + command} awok awok`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${humankey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `©LOLHUMAN|IKAL _IMAGE_`, quoted : fgif})
                    })
                    break
                    
                  // Photo Oxy //
          case 'shadow':
           case 'cup':
             case 'cup1':
               case 'romance':
                case 'smoke':
               case 'burnpaper':
              case 'lovemessage':
             case 'undergrass':
              case 'love':
                case 'coffe':
               case 'woodheart':
              case 'woodenboard':
             case 'summer3d':
            case 'wolfmetal':
                case 'nature3d':
               case 'underwater':
              case 'golderrose':
             case 'summernature':
              case 'letterleaves':
               case 'glowingneon':
               case 'fallleaves':
              case 'flamming':
             case 'harrypotter':
            case 'carvedwood':
            simple.updatePresence(from, Presence.recording)
            if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} kamu mah`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${humankey}&text=${ini_txt}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `©IKAL IMAGE`, quoted : fgif})
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                simple.updatePresence(from, Presence.recording)
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} kok gitu`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${humankey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `😂`, quoted : fgif})
                    })
                    break

//>>>>>>>>>>>>>>>>>>{ MAKER EPHOTO }<<<<<<<<<<<<<<<<<<<<<<\\

            case 'wetglass':
             case 'multicolor3d':
              case 'watercolor':
               case 'luxurygold':
                case 'galaxywallpaper':
                 case 'lighttext':
                 case 'beautifulflower':
                case 'puppycute':
               case 'royaltext':
              case 'heartshaped':
             case 'birthdaycake':
              case 'galaxystyle':
               case 'hologram3d':
                case 'greenneon':
                 case 'glossychrome':
                case 'greenbush':
               case 'metallogo':
              case 'noeltext':
             case 'glittergold':
              case 'textcake':
               case 'starsnight':
                case 'wooden3d':
                 case 'textbyname':
                case 'writegalacy':
               case 'galaxybat':
              case 'snow3d':
             case 'birthdayday':
            case 'goldplaybutton':
             case 'silverplaybutton':
               case 'freefire':
               simple.updatePresence(from, Presence.recording)
               if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
                    if (args.length == 0) return reply(`Example: ${prefix + command} ikal image`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${humankey}&text=${ini_txt}`).then((gambar) => {
                        simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `©IKAL IMAGE`, quoted : fgif}) 
                    })
                    break
                    

case 'rulesbot':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
PpUrl = 'https://i.ibb.co/LRjVs97/20211228-175837.jpg'
img = await getBuffer(PpUrl)
tod = `
_*❕RULES BOT ${botname}*_

🐼.DILARANG TLPN/VC BOT

🐼.DILARANG SPAM BOT
( *DELAY KON*)
🐼.DILARANG NGEBANDINGIN BOT ( *KENA MENTAL BOT NYA BAPERAN* )
🐣.DAH ITU AJA BANG


_*JANGAN LUPA 5 M*_
🐣. *MEMAKAI MASKER*
🐣. *MENCUCI TANGAN*
🐣. *MENJAGA JARAK*
🐣. *MENJAUHI KERUMUNAN*
🐣. *MEMBATASI MOBILITAS*

_*PATUHI YA AGAR PANDEMI INI CEPAT BERLALU DAN KITA BISA BERAKTIVITAS SEPERTI BIASA LAGI :)*_

#prayforsemeru
#prayforlumajang
─`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐣OWNER🐣' }, type: 1 }, 
{ buttonId: `${prefix}original`, buttonText: { displayText: '😂ALLMENU😂' }, type: 1 }, 
]
sendButImage(from, tod, faketeks, img, but)
break


//━━━━━ THANKS 
//━━━━━ THAKS

     case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./tempatdata/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
ppUrl = 'https://i.ibb.co/zn4FMbw/20211228-180731.jpg'
img = await getBuffer(ppUrl)
const kimak = 
` Terima Kasih Telah Mendaftarkan
Ke Database ${botname} 
Silahkan Gunakan Bot Dengan Bijak

💀「 _VERIFY_ 」 💀͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
🌷 *Nama :* ${pushname} 
🌷 *Nomor :* @${sender.split('@')[0]} 
😊 *Seri:* ${serialUser} 
😊 *Pengguna:* ${_registered.length}
`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '😨MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER💀' }, type: 1 }
        ]
        sendButImage(from, kimak, "© Hིaིiིkིaིlིᴶᴿ.“ψ | ᴮᴼᵀ", img, but)
break

case 'brainly':
  if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '====================[ *BRAINLY* ]======================\n'
					for (let Y of res.data) {
					teks += `\n*「 _Brainly_ 」*\n\n*乂. Pertanyaan:* ${Y.pertanyaan}\n\n*乂. Jawaban:* ${Y.jawaban[0].text}\n====================[ *BRAINLY* ]======================\n`
					}
					simple.sendMessage(from, teks, text,{quoted:ftrol,detectLinks: false})                        
		            })              
					break

case 'donasi':

simple.updatePresence(from, Presence.recording)
Gtau = 'https://i.ibb.co/10SyhTM/20211229-133803.jpg'
img =  await getBuffer(Gtau)
tod = `
┌ ㋡ *『🇩 🇴 🇳 🇦 🇸 🇮』*
│㋡ Gopay : _Klik Button_

│㋡ Ovo : _Klik Button_

│㋡ Dana : _Klik Button_

│_*Kalo Udah Donasi Bisa Request Fitur*_

│
_*Ketik. !request [ _*Requestsan nya*_ ]

└──────㋡   `
but = [
{ buttonId: `${prefix}gopay2`, buttonText: { displayText: '㋡GOPAY' }, type: 1 }, 
{ buttonId: `${prefix}dana2`, buttonText: { displayText: '㋡DANA' }, type: 1 }, 
{ buttonId: `${prefix}ovo2`, buttonText: { displayText: '㋡OVO' }, type: 1 }, 
]
 sendButImage(from, tod, faketeks, img, but) 
break


case 'gopay2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/tcjXzFC/20211230-102540.jpg'
img = await getBuffer(anu)
we = `
_*MAU DONASI LEWAT GOPAY BISA SCAN ATAU VIA NOPE DI BAWAH! Boleh banget*_ :)
_DANA : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but)
break
case 'dana2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/Ss1kFHh/9e7c91875eae22c9e12acbc95ec155b4.jpg'
img = await getBuffer(anu)
we = `
_*MAU DONASI LEWAT DANA YA KAK? Boleh banget*_ :)
_DANA : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
case 'ovo2':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/pLysPHK/11949c7dc7042ff874b635411b5fd1a4.jpg'
img = await getBuffer(anu)
we = `
_*Mau Donasi Lewat Ovo Ya kak*_ Boleh Banget :)
OVO : 089609927539`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break


case 'runtime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
        ptod = "6281337541779@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await simple.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `❏  _*Runtime : ${runtime(process.uptime())}*_

  「 BAILEYS SELF-BOT」 `
Sendbutdocument(from, tescok, "© Z-BOT8*", fs.readFileSync('./poto/menu.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./poto/image/thumbnaildokumen.jpg'), filename:`Z-BOT8.pdf`, pageCount: 9999999 },[{ buttonId: `${prefix}menu`, buttonText: { displayText: 'SIP,KAK😁' }, type: 1 }], {quoted:fvid, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${tampilUcapan} - ${pushname}\nDownload Script`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/WP66OsAf1W0`}}})
break

case 'sc':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
url =  'https://i.ibb.co/jJ0hd8t/20220102-153400.jpg'
foto = await getBuffer(url)
teks = `
💾Sc : *https://github.com/Haikalbotz/v7*
_Spek Sc_ :
1. *Antilink*
2. *Welcome Button*
3. *Antivirtex*
4. *Sejarah Islam*
_*Dll...*_`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 },
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: 'RULES' }, type: 1 }
        ]
        sendButImage(from, teks, '©Created : Yeni Bot', foto, but,)
break
case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await simple.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            

//-------------------------------< BY : BOT DHANI? / DHANI GANS >----------------------------------------------------------------
case 'sadboy':      
if (args.length < 1) return reply(`*Contoh : ${prefix + command} Nisaa&Bot*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
sadboy = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=NisaaCantik&text=${F1}&text2=${F2}`)
simple.sendMessage(from, sadboy, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break

//---------------------------------< HAIKAL >----------------------------------------------------\\


case 'onlineshop':
simple.updatePresence(from, Presence.recording)
url = 'https://telegra.ph/file/2fd99428214122167653d.jpg'
img = await getBuffer(url)
tod = `_Kenapa Ada Online Shop Di Bot Whatsapp?_

1• *Agar Jual Beli Menjadi Mudah*
2• *Mempermudah Pelayanan*
3• *Tidak Perlu Copy Paste List Anda*

Note : *Gunakan Bot Ini Dengan Bijak*

_Klik "Next" Untuk Melanjutkan_`
but = [
{ buttonId: `${prefix}shop`, buttonText: { displayText: 'CLICK TO CONTINUE 🔜' }, type: 1 }, 
]
 sendButImage(from, tod, ikal2, img, but) 
break


case 'gopay3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/tcjXzFC/20211230-102540.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE GOPAY KAK?  Boleh banget*_ :)
_GOPAY NUMBER : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but)
break
case 'dana3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/Ss1kFHh/9e7c91875eae22c9e12acbc95ec155b4.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE DANA KAK? Boleh banget*_ :)
_DANA NUMBER : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
case 'ovo3':
simple.updatePresence(from, Presence.recording)
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgif})
anu = 'https://i.ibb.co/pLysPHK/11949c7dc7042ff874b635411b5fd1a4.jpg'
img = await getBuffer(anu)
we = `
_*MAU BAYAR PAKE OVO KAK?*_ Boleh Banget :)
_OVO NUMBER : 089609927539_`
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButImage(from, we, faketeks, img, but,)
break
//>>>>>>>>>>>>>>>>>>>>[ Akhir Dari Fitur² ]<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
default:
if (isOwner) {
 if (budy.startsWith('>')) {
  console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	try {
	 let evaled = await eval(budy.slice(2))
	  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	   reply(`${evaled}`)
		} catch (err) {
		 reply(`${err}`)
		  }
		   } else if (budy.startsWith('x')) {
		  console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		 try {
	    return simple.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
	   } catch (err) {
	  e = String(err)
	 reply(e)
	}
   }
  }
 }
} catch (e) {
 e = String(e)
  if (!e.includes("this.isZero") && !e.includes("jid")) {
   console.log('Error : %s', color(e, 'red'))
    }
	// console.log(e)
	}
}
