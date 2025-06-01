import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Pong!',
    },
  ];


const rest = new REST({ version: '10' }).setToken('token'); 

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('clientid'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
