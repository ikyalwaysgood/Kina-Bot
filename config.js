import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285794908894', 'Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ', true]
]
global.mods = ['6285794908894']
global.prems = ['6285794908894']
// Info
global.nomorwa = '6285794908894'
global.packname = 'Kιɳα Bσƚ by'
global.author = '© Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.namebot = '​Kιɳα Bσƚ'
global.wm = '© anu By Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.stickpack = 'Kιɳα Bσƚ by'
global.stickauth = '© Iky𝖔𝖋𝖋𝖎𝖈𝖎𝖆𝖑ཽ'
global.fotonya = 'https://telegra.ph/file/83b522fd80b660705d1cd.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/xyroinee'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0896-1075-0607'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'apikeymu'
global.rose = 'apikeymu'
global.xyro = 'apikeymu'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

