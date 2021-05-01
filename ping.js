const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ping",
    description: "To check ping of the shard.",
    usage: "",
    aliases: [],
  },

  run: async function(client, message, args) {
    let stats = new MessageEmbed()
      .setTitle(`Ping of the Shard`)
      .setDescription(`📈Bot Latency: ${Date.now() - message.createdTimestamp}ms. \n 📉API Latency: ${Math.round(client.ws.ping)}ms.`)
      .setColor("#fffdd0")
      .setFooter("24/7 Music bot", "https://i.ibb.co/qpV4tWk/images.png")
    return message.channel.send(stats);
  },
};