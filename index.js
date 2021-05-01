// Include discord.js ShardingManger
const { ShardingManager } = require('discord.js');

// Create your ShardingManger instance
const manager = new ShardingManager('./bot.js', {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/v11/class/ShardingManager

    // 'auto' handles shard count automatically
    totalShards: 4, 

    // your bot token
    token: 'TOKEN'
});

// Spawn your shards
manager.spawn();

// The shardCreate event is emitted when a shard is created.
// You can use it for something like logging shard launches.
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
