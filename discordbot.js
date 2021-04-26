const Discord = require ('discord.js')
const client = new Discord.Client()
const config = require ('./config.json')
const command = require('./commands')

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.mCZxP7SjvAx7vRy6aJ945ISkBac')

client.on('ready', () =>
{
    console.log('The Client is ready!')

    command(client, 'ping', (message) => 
    {
        message.channel.send('Pong!')
    })

})


