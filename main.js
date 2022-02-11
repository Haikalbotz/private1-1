const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./tempatdata/welcome.json'))
number = '6285157740529@s.whatsapp.net'

require('./simple.js')
nocache('./simple.js', module => console.log(`${module} telah di update!`))

const starts = async (simple = new WAConnection()) => {
    simple.logger.level = 'warn'
    simple.version = [2, 2142, 12]
    simple.browserDescription = [ 'simpleGans', 'Chrome', '3.0' ]
    simple.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync('./simple.json') && simple.loadAuthInfo('./simple.json')
    simple.on('connecting', () => {
        start('2', 'Loading ...')
    })
    simple.on('open', () => {
        success('2', 'Connected ✓')
    })
    await simple.connect({timeoutMs: 30*1000})
     fs.writeFileSync('./simple.json', JSON.stringify(simple.base64EncodedAuthInfo(), null, '\t'))

    simple.on('chat-update', async (message) => {
        require('./simple.js')(simple, message, _welkom)
    })
simple.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await simple.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await simple.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await simple.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      buffer = await getBuffer(pp_user)
      if (!isWelkom) return
      if (anu.action == 'add' && !mem.includes(simple.user.jid)) {
      const mdata = await simple.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await simple.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await simple.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = simple.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = `HAY KAK *@${num.split('@')[0]}*
𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙜𝙧𝙤𝙪𝙥 *${mdata.subject}*

_Patuhi Peraruran Group Ini_ ,Jika Melanggarr
Akan Di Tendang Oleh Admin

*JANGAN LUPA PATUHI 3 M*
• _MEMAKAI MASKER_
• _MENCUCI TANGAN_
• _MENJAGA JARAK_
• _MENJAUHI KERUMUNAN_
• _MEMBATASI MOBILITAS_`
      welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU'},type:1}, {buttonId:`/sewabot`,buttonText:{displayText:'SEWA BOT'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `©Haikal | ©Design By : DhaniGans Official | |Join In Group |@${num.split('@')[0]}| `, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      simple.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(simple.user.jid)) {
      const mdata = await simple.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await simple.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = simple.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = `Selamat Tinggal Kawan, Semoga Tenang Di Sana @${num.split('@')[0]}\n Hemm 😔`
      goodbyeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU'},type:1}, {buttonId:`#sewabot`,buttonText:{displayText:'SEWABOT'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `Out In Group | @${num.split('@')[0]} | ©Design By : DhaniGans Official |`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      simple.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
