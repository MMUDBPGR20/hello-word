const Discord = require('discord.js')
const client = new Discord.Client()
const fetch = require('node-fetch')
const querystring = require('querystring')
const config = require ('./config.json')
const command = require ('./command')

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.xA4OfG6y-Oi4ZnA2d6FW97FnLAs');

client.on('ready', () =>

{
    console.log('Success');

    client.on('message', async message => {

        if (message.channel.id == '832322311037255700' && message.content.startsWith(`${prefix}urban`)) {		
            const searchString = querystring.stringify({ term: args.slice(1).join(" ") })

            if (!args.slice(1).join(" ")) return message.channel.send(new MessageEmbed()
                .setColor("BLUE")
                .setDescription(`You need to specify something you want to search the urban dictionary`)
            )

            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

            try {
                const [answer] = list

                const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

                const embed = new Discord.MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(answer.word)
                    .setURL(answer.permalink)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
                    )
                message.channel.send(embed)
            } catch (error) {
                console.log(error)
                return message.channel.send(new Discord.MessageEmbed()
                    .setColor("BLUE")
                    .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
                )
            }
        }		
    })

})