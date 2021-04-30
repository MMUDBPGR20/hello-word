//checking if client is active
console.log('The Client is ready!')

//imports discord.js module
const Discord = require ('discord.js')
//opening a new discord client
const client = new Discord.Client()

const querystring = require('querystring')
const fetch = require('node-fetch')

//define prefix
prefix = '!'

//connecting to discord
client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.RmPClDzt1qx5tsOt3U4qO4D11Qs')


{
    //the event will trigger multiple time after loggin in
    client.on('message', async message => 
    {

        //if prefix is found, set up args, otherwise it isn't a command
        if(!message.content.startsWith(prefix))return; 
        const args = message.content.substring(prefix.length).split(" ")
        {
            //if prefix with define message in command   
            if (message.content.startsWith(prefix + 'define')) 
            {	
                //using the stringfy function method on the object	
                const searchString = querystring.stringify(
                { 
                    term: args.slice(1).join(" ") 
                })
                
                //if command doesn't meet the requirement 
                //using messageEmbed to set border colour and descripiton
                if (!args.slice(1).join(" ")) return message.channel.send(new MessageEmbed()
                .setColor("GOLD")
                .setDescription('You need to specify something you want to search the urban dictionary'))
                 
                //fetching the definition of the word from the API 
                const { list } = await fetch(
                    `https://api.urbandictionary.com/v0/define?${searchString}`)
                    .then(response => response.json())

                try 
                {
                    //setting out the command output
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
                    //if no defintion in the command, give reply
                    console.log(error)
                    return message.channel.send(
                    message.channel.send(embed)
                    .setColor("RED")
                    .setDescription(`No results were found for **${args.slice(1).join(" ")}**`))
                            
                }  
            }
        }
    })
}