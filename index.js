const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require ('./command')

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.Dws4po6mHuSTqSp6C6XPpSrXiKI');

client.on('ready', () =>
{
    console.log('The client is ready!')

    command(client, 'ping', (message) => 
    {
        message.channel.send('Pong!')
    })
})
