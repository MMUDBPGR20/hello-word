const Discord = require('discord.js');

// discord.js module is required
console.log('Beep beep!');


// creating a new discord bot client
const client = new Discord.Client();
client.login('ODMxMjA4NTQ1NDExMTM3NTk2.YHR5SA.vrjvUz0ZrY4talz6ZvBx_iGqszo');

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

    else if()
}

// client.on('help', getHelp);
// function getHelp(gh)
// {
//     if (gh.channel.id == '832322311037255700' && gh.content === 'help')
//     {
//         gh.channel.send ('Will do');
//     }
// }
lkp[WebKitCSSMatrix]
