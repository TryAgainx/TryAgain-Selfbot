const discord = require('discord.js')
const colors = require('colors')

exports.run = async (client, message, args) => {
    message.delete();
    console.log(colors.green("  * Iniciando o ban-all."));

    message.guild.members.filter(m => m.bannable).forEach(mb => {
        if (mb == client.user.id || mb.user.bot) return true; 
        else {
          mb.ban()
          .then(console.log(colors.green(`  * Membro banido: ${mb.displayName}`)))
        }
    });

    // message.guild.members.filter(m => m.bannable).forEach(m => m.ban()
      //.then(console.log(colors.green(`  * Membro banido: ${m.displayName}`))))

   // try {
    //  message.guild.members.filter(member => member.bannable).forEach(m => {
    //    m.ban()
    //    .then(console.log(colors.green(`  [*] Membro banido: ${m.displayName}`)))
    //  });
    //} catch(e) {
    //  console.log(colors.red(`  [*] Erro ao banir o usuário ${m.displayName}: ${e}`))
   // }
    //message.guild.members.filter(member => member.bannable()).forEach(m => {
     // m.ban()
     // .then(console.log(colors.green(`  [*] Membro banido: ${m.displayName}`)))
     // .catch(e => {
     //   console.log(colors.red(`  [*] Erro ao banir o usuário ${m.displayName}: ${e}`))
     // })
   // });
}
