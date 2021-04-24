const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require ('./command')

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.t3AGD4FJ1Z-sUV9VtmxlaySYaL4');

client.on('ready', () =>
{
    console.log('The client is ready!')

    command(client, 'ping', (message) => 
    {
        message.channel.send('Pong!')
    })
})
