const Discord = require('discord.js');
const client = new Discord.Client()
const fetch = require('node-fetch')
const querystring = require('querystring')


console.log('Beep beep!');

client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.Dws4po6mHuSTqSp6C6XPpSrXiKI');

client.on('ready', readyDiscord);

function readyDiscord()
{
    console.log('Success');
}

const replies = 
[
    'Hi',
    'Wassup',
    'How may i help?',
]

client.on('message', gotMessage);

function gotMessage(msg)
{
    if(msg.channel.id == '832322311037255700' && msg.content === 'hi')
    {
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies [index]);  
    }

    else if (msg.channel.id == '832322311037255700' && msg.content === 'help')
    {
        msg.channel.send ('Will do');
    }
}

// client.on('message', async message => {
//     const args = message.content.substring(prefix.length).split(" ")

//     if(message.content.startsWith('define'))
//     {
//         const searchString = querystring.stringify({term: args.slice(1).join(" ") })

//         if(!searchString) return message.channel.send("You need to specify something to search")

//         const { list } = await fetch (`https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo${searchString}`).then(r => r.jsson())

//         try{

//         const [fetched] = list
//         const trim = (str, max) => ((str.length > max)? `${str.slice(0,max - 3)}...` : str)
//         const embed = new Doscord.MessageEmbed()
//             .setColor("GOLD")
//             .setTitle(fetched.word)
//             .setURL(fetched.permalink)
//                 .addFields(
//                     {name: 'Definition', value: trim(answer.definition, 1024)},
//                     { name: 'Example', value: trim(answer.example, 1024) },
//                     { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
//                 )
//                 message.channel.send(embed)
//             } catch (error) {
//                 console.log(error)
//                 return message.channel.send(new Discord.MessageEmbed()
//                     .setColor("BLUE")
//                     .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
//                 )
//             }
//     }
// })



// client.on('help', getHelp);
// function getHelp(gh)
// {
//     if (gh.channel.id == '832322311037255700' && gh.content === 'help')
//     {
//         gh.channel.send ('Will do');
//     }
// }
