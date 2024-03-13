
let handler = m => m
handler.all = async function (m) {
	let setting = global.db.data.settings[this.user.jid]
	
  let bot = global.db.data.settings[this.user.jid] || {};
  if (bot.autoBio) {
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
		let bio = `" ♥️●𝐌Əɽı 𝐅ıʈɽaʈ «⸙»ɱɚ 𝐍ɑɧıı┣┫ɑıı «𝐔ŋ »𝐏aɽıŋd❍ 𝐒ə 𝐃❍𝐒ʈı "𝐑aƙɧŋa 𝐉ı𝐒Ə┣┫ɑɽ «𝐊ısı »ƙə» 𝐒atH 𝐔dŋə «ƙa« 𝐒h❍k ┣┫❍ (💥💯) 𝑅𝛩𝛭𝛯𝛫-𝛸𝐷-𝐵𝛩𝑇 `
		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
  }
}
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' Day(s) ️', h, ' Hour(s) ', m, ' Minute(s)'].map(v => v.toString().padStart(2, 0)).join('')
}
