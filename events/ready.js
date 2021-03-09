module.exports = async (client) => {
  console.log(`[API] creater in as ${client.user.username}`);
  await client.user.setActivity("Bot created by |√|ANTOR#8129|🎧|", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
