const { Client, GatewayIntentBits } = require ('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ]});

client.on("messageCreate", (message)=> {
    console.log(message.content);
});

client.login("MTM0MzI3NTc3NDg1MzEyMDA4Mg.GI0e1R.USAPwGOpzniI0X9aMDIO4MIASEoFNiVzqabcD8");