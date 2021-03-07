const discord = require('discord.js')

exports.run = async (client, message, args) => {
    message.delete();
    message.guild.channels.forEach(c => {
        if(c.type === 'text') {
        for(qtd = 0; qtd < 3; qtd++) {
            c.send('@everyone').catch(console.error)
        }
    }
});
    console.log("  * Flood de everyones efetuado.");

  }
