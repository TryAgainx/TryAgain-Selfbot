const Discord = require('discord.js');
const config = require("../config.json")

module.exports.run = (client, message) => {
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('TryAgain - Selfbot 卐', message.author.displayAvatarURL)
    .addField('nuke', ' ``Realiza a destruição em massa do servidor.``', true)
    .addField('canais', ' ``Cria os canais de raid.``', true)
    .addField('everyones', ' ``Realiza um flood de everyones.``', true)
    .addField('purge', ' ``Remove os membros ausentes a um dia.``', true)
    .setFooter('Dont trust, die, its your destiny!')
    .setColor("#0498FF")
    .setImage('https://cdn.discordapp.com/attachments/804499071229886504/816810615615782912/try.png?size=2048')

    message.channel.send(embed);
}


