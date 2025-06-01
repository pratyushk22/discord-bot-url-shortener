import { Client, Events, GatewayIntentBits } from 'discord.js';

import express from 'express';
const app= express();
import urlmodel from './url.js';
import { nanoid } from 'nanoid';

import {connect_to_mongodb} from './connection.js';

connect_to_mongodb('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('mongodb server connected'));

const PORT= 8001;

app.listen(PORT, ()=>console.log(`server started at ${PORT}`));
import router from './shorturlroute.js';
app.use('/', router);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('messageCreate', async (message)=>{
    if(message.author.bot) return;

    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1].trim();
        const shortid= nanoid(8);

        await urlmodel.create({
            url: url,
            shorturl: shortid,
        })
        return message.reply({
            content: `http://localhost:8001/${shortid}`
        });

    }
    message.reply({
        content: "hi from bot"}
        );
});

client.on('interactionCreate', (interaction)=>{
    interaction.reply('pong!');
});



client.login('token');