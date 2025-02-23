const { REST, Routes } = require ('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'url',
    description: 'URL Shortener',
  }
];

const rest = new REST({ version: '10' }).setToken("token"); //I have replaced this token for security purpose and we can get is from "https://discord.com/developers/applications/1343275774853120082/bot" this URL.

try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands("Client_ID"), { body: commands });//I have replaced this Client_ID for security purpose and we can get is from "https://discord.com/developers/applications/1343275774853120082/oauth2" this URL.
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }