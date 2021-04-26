require('dotenv').config()


const Discord = require ('discord.js')
const client = new Discord.Client()
const Commando = require ('discord.js-commando')
const config = require ('./config.json')
const querystring = require('querystring')
const fetch = require('node-fetch')
const path = require('path')
const {prefix} = require ('./config.json')
const embed = new Discord.MessageEmbed()


console.log('The Client is ready!'),
client.on('message', async message =>
{
    
    const client = new Commando.CommandoClient(
    {
        owner:'501444096720764948',
        commandPrefix: config.prefix
    })

    client, 'ping', (message) => 
    {
        message.channel.send('Pong!')
    }
     



    if(!message.content.startsWith(prefix))return; 
    const args = message.content.substring(prefix.length).split(" ")
    {

        if (message.channel.id == '832322311037255700' && message.content.startsWith(prefix + 'urban')) 
        {		
            const searchString = querystring.stringify(
            { 
                term: args.slice(1).join(" ") 
            })
                    
            if (!args.slice(1).join(" ")) return message.channel.send(
            MessageEmbed()
            .setColor("BLUE")
            .setDescription('You need to specify something you want to search the urban dictionary'))
                    
            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

            try 
            {
                const [answer] = list

                const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

                MessageEmbed()
                .setColor("BLUE")
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields(
                { name: 'Definition', value: trim(answer.definition, 1024) },
                { name: 'Example', value: trim(answer.example, 1024) },
                { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` })
                message.channel.send(embed)
            } 
            catch (error) 
            {
                console.log(error)
                return message.channel.send(
                MessageEmbed()
                .setColor("BLUE")
                .setDescription(`No results were found for **${args.slice(1).join(" ")}**`))
                        
            }
                    
            message.channel.send({ embed: embed })

                
        }
    }		
            
    
    
    client.registry
    .registerGroups(
    [
    ['misc', 'misc commands'] ,
    ['moderation','moderation commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

    {      
        const replies = 
        [
            'Hi',
            'Wassup',
            'How may i help?',
        ]

                
        if(message.channel.id == '832322311037255700' && message.content === 'hi')
        {
            const r = Math.floor(Math.random() * replies.length);
            message.channel.send(replies [r]);  
        }

        else if (message.channel.id == '832322311037255700' && message.content === 'help')
        {
            message.channel.send ('Will do')
        }
    }

    module.exports = ( aliases, callback) =>
    {
        if (typeof aliases === 'string')
        {
            aliases = [aliases]
        }
    

        const { content } = message;
        
        aliases.forEach(alias => 
        {
            const command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command)
            {
                console.log(`Running the command ${command}`)
                callback(message)
            }
            
        })
    }
        
})
client.login(process.env.TOKEN)
