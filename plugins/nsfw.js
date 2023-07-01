const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.botcahx.live/api/nsfw/${command}?apikey=Akirabotz`;
    let response = await axios.get(url, { responseType: 'arraybuffer' });
    conn.sendFile(m.chat, response.data, "", "Random Nsfw", m);
}
handler.help = ['ahegao','ass','bdsm','blowjob','cuckold','cum','ero','femdom','foot','gangbang','glasses','hentai','jahy','manga','nekopoi','nekopoi2','orgy','pantizes','pussy','tentacles','yuri','thighs','zettai']
handler.command = /^(ahegao|ass|bdsm|blowjob|cuckold|cum|ero|femdom|foot|gangbang|glasses|hentai|jahy|manga|nekopoi|nekopoi2|orgy|panties|pussy|tentacles|yuri|thighs|zettai)$/i
handler.tags = ['premium']
handler.limit = true;
handler.premium = true;
module.exports = handler;