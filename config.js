/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Recode By BiqqTzy
   * Contact Me on wa.me/6285790466509
   * Follow https://github.com/Assabiq31213
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6285790466509', '16695442629']
global.ownernomer = "6285790466509"
global.premium = ['6285790466509']
global.packname = 'Punya Sabiq <3'
global.author = 'Ig: sbqxyz'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Mohon tunggu sebentar...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.footer = '© Jessica-Bot Created by BiqqTzy'
global.thumb = fs.readFileSync('./media/image/sabiq.jpg')
global.faall = fs.readFileSync('./media/image/sabiq.jpg')

// Url
global.mygit = 'https://github.com/Assabiq31213'
global.myyt = 'https://youtube.com/c/@assabiqyt'
global.myytv = 'https://youtube.com/c/@assabiqyt'
global.mygc = "-"

// setting bot
global.autoread = false
global.simbol = '•'
global.keyopenai = "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"

// Engak Ngaruh, Belum Kepasang
global.botname = 'Jessica Bot'
global.akulaku = 'By BiqqTzy'
global.ytname = 'Assabiq YT' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
