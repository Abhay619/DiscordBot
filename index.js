const { Client, GatewayIntentBits } = require ('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ]});

client.on("messageCreate", (message)=> { //for normal messages
    if(message.author.bot) return;
    const user = message.author.username;
    message.reply({
        content: "Hi " + user,
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    if(interaction.commandName == 'ping')
        interaction.reply("Pong!!!");
    if(interaction.commandName == 'url')
        interaction.reply("This service is not available yet!!!");
    else
    return;    
});

client.login("MTM0MzI3NTc3NDg1MzEyMDA4Mg.GFp160.Nt8i62ZL0qASaHxmIJaTZYSJAWFLlmDPj-PIJo");