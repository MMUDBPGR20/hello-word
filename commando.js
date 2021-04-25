const path = require('path')
const Commando = require ('discord.js-commando')
const config = require ('config.json')

const client = new Commando.CommandoClient(
    {
        owner:'501444096720764948',
        commandPrefix: config.prefix
    })

    client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.xA4OfG6y-Oi4ZnA2d6FW97FnLAs');

    client.on ('ready', async () => 
    {
        console.log('The Client is ready!')

        client.registry
        .registerGroups(
            [
               ['misc', 'misc commands'] ,
               ['moderation','moderation commands'],
            ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'cmds'))
    })