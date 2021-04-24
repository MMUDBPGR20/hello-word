const {prefix} = require('./config.json')

module.exports = (clients, aliases, callback) =>
{
    if (typeof aliases === 'string')
    {
        aliases = [aliases]
    }

    clients.on('message', message => 
    {
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
    })
}