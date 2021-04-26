const Discord = require ('discord.js')
const client = new Discord.Client()
const querystring = require('querystring')
const fetch = require('node-fetch')

//define prefix
prefix = '!'

//connecting to discord
client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.mCZxP7SjvAx7vRy6aJ945ISkBac')



//checking if client is active
console.log('The Client is ready!')
{

    client.on('message', async message => 
    {


        if(!message.content.startsWith(prefix))return; 
        const args = message.content.substring(prefix.length).split(" ")
        {

            if (message.channel.id == '832322311037255700' && message.content.startsWith(prefix + 'define')) 
            {		
                const searchString = querystring.stringify(
                { 
                    term: args.slice(1).join(" ") 
                })
                        
                if (!args.slice(1).join(" ")) return message.channel.send(new MessageEmbed()
                .setColor("GOLD")
                .setDescription('You need to specify something you want to search the urban dictionary'))
                        
                const { list } = await fetch(
                    `https://api.urbandictionary.com/v0/define?${searchString}`)
                    .then(response => response.json())

                try 
                {
                    const [answer] = list

                    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

                    const embed = new Discord.MessageEmbed()
                    .setColor("PURPLE")
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
                    .setColor("RED")
                    .setDescription(`No results were found for **${args.slice(1).join(" ")}**`))
                            
                }  
            }
        }
    })
}