const discord = require('discord.js')
const colors = require('colors')
const config = require("../config.json");

exports.run = async (client, message, args) => {
  message.delete()
  
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return console.log(colors.red('Caralho, cadê as perms?'))

    for(qtd = 0; qtd < 30; qtd++) {
      await message.guild.createChannel(config.canais);
    }

    console.log(colors.green("  * Canais criados."))
  }