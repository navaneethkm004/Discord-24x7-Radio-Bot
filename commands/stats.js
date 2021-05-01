const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "stats",
    description: "To check stats of the bot",
    usage: "",
    aliases: [],
  },

  run: async function(client, message, args) {
    var os = require('os');


    var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

    var getpercentage = 
      ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

    function countguild(arrguilds) {
        guilds = 0;
        i = 0;
        while(i<arrguilds.length){
            guilds = guilds + arrguilds[i];
            i = i + 1;
        }
        let stats = new MessageEmbed()
          .setTitle(`Stats of ${client.user.username}`)
          .setDescription(`🎮Total Guilds: ${guilds} \n \n 🗃Used RAM: ${getpercentage}`)
          .setColor("#fffdd0")
          .setFooter("24/7 Music bot", "https://i.ibb.co/qpV4tWk/images.png")
        return message.channel.send(stats);
    }
    client.shard.fetchClientValues('guilds.cache.size').then(countguild)
  },
};
