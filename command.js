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

const rest = new REST({ version: '10' }).setToken("MTM0MzI3NTc3NDg1MzEyMDA4Mg.GFp160.Nt8i62ZL0qASaHxmIJaTZYSJAWFLlmDPj-PIJo");

try {
    console.log('Started refreshing application (/) commands.');
  
    rest.put(Routes.applicationCommands("1343275774853120082"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }