const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "shard",
    description: "To check stats of the shard",
    usage: "",
    aliases: ["sh", "uptime"],
  },

  run: async function(client, message, args) {
    var os = require('os');

    var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

    var getpercentage = 
      ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

    let totalSeconds = (client.uptime / 1000);
    let udays = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let uhours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let uminutes = Math.floor(totalSeconds / 60);
    let useconds = Math.floor(totalSeconds % 60);

    let stats = new MessageEmbed()
      .setTitle(`Shard Info`)
      .setDescription(`👦Shard Users: ${client.users.cache.size} 🕹Shard Guilds: ${client.guilds.cache.size} \n \n 🔢Shard ID: ${message.guild.shardID} 🗃Used RAM: ${getpercentage} \n \n ⏱Shard Uptime: ${udays}d ${uhours}h ${uminutes}m ${useconds}s`)
      .setColor("#fffdd0")
      .setFooter("24/7 Music bot", "https://i.ibb.co/qpV4tWk/images.png")
    return message.channel.send(stats);
  },
};