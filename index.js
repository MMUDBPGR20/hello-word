const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require ('./command')

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.xA4OfG6y-Oi4ZnA2d6FW97FnLAs');

client.on('ready', () =>
{
    console.log('The client is ready!')

    command(client, 'ping', (message) => 
    {
        message.channel.send('Pong!')
    })
})
