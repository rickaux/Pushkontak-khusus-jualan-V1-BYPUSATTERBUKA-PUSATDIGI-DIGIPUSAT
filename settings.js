/* 

 # BUY SC KE MANZZY
 # SC INI TIDAK DI BAGIKAN SECARA GRATIS 
 # HARGA SC : 20K
 
 # CONTACT CREATOR 
 * NO WHATSAPP REAL : 082269162245
 * TELE REAL : https://t.me/ManzzyStoreReal
 
#JIKA BERMINAT BISA LANGSUNG HUBUNGI CONTACT DI ATAS TERIMAKASIH 

# Thanks To My Support
  * All Creator Bot WhatsApp
  * AI GPT Chat
  * MANZZY STORE 
  
*/
const fs = require('fs');
const chalk = require('chalk');

global.owner = ['081770888311']
global.ownerUtama = "081770888311"
global.namaOwner = "PusatTerbuka"
global.packname = 'Bot WhatsApp'
global.botname = 'PusatTerbuka V1.'
global.botname2 = 'PusatTerbuka V1'
global.tempatDB = 'database.json'
global.pairing_code = true

global.linkOwner = "https://wa.me/6285883812573"
global.linkGrup = "https://www.youtube.com/@MANZZYSTORE"
global.linkGrup2 = "https://chat.whatsapp.com/JTE6C5AyONwJdhLFjFI75B"
global.linkSaluran = "https://whatsapp.com/channel/0029VadrvEw0wak1NcjEER3f"
global.idChannel = "120363315322575871@newsletter"
global.nameChannel = "MANZZY STORE"

global.delayJpm = 4000
global.delayPushkontak = 5000
// 1000 = 1 detik


global.imageSlide = "https://pixhost.to/show/18/545262409_qris-copy.jpg"
global.imageMenu = "https://pixhost.to/show/18/545262409_qris-copy.jpg"

global.dana = "081770888311"
global.ovo = "081770888311"
global.gopay = "081770888311"
global.qris = "https://pixhost.to/show/18/545262409_qris-copy.jpg"


global.mess = {
	owner: "  \`</> [ Owner Only! ]\`\n- Fitur Ini Hanya Untuk Ownerbot!",
	admin: "  \`</> [ Admin Only! ]\`\n- Fitur Ini Hanya Untuk Admin!",
	botAdmin: "  \`</> [ Bot Admin! ]\`\n- Bot Bukan Admin!",
	group: "  \`</> [ Group Only! ]\`\n- Fitur Ini Hanya Untuk Dalam Grup!",
	private: "  \`</> [ Private Only! ]\`\n- Fitur Ini Hanya Untuk Private Chat!",
	prem: "  \`</> [ Premium Only! ]\`\n- Fitur Ini Hanya Untuk Pengguna Premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});