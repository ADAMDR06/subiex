const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config')
const dotenv = require('dotenv')
dotenv.load()

bot.on('ready', () => {
  console.log('Subiex is online')
  console.log('Subiex is ready')
})

bot.on('message', (message) => {
	var mute = new Boolean(false)

	if (message.content === config.prefix + 'mute' && mute === false) 
	{
		message.reply('Okay boss :zipper_mouth: ! (MUTE MODE ON)')
		mute = true;
	}
	else if (message.content === config.prefix + 'mute' && mute === true)
	{
		//unmute
		message.reply('Glad to be back xD (MUTE MODE OFF)')
		mute = false;
	}
})

bot.on('message', (message) => {
	var mute = new Boolean(false)

	if (message.content === config.prefix + 'mute' && mute === false) 
	{
		message.reply('Okay boss :zipper_mouth: ! (MUTE MODE ON)')
		console.log('Mute mode on')
		mute = true;
	}
	if (message.content === config.prefix + 'mute' && mute === true)
	{
		//unmute
		message.reply('Glad to be back xD (MUTE MODE OFF)')
		console.log('Mute mode off')
		mute = false;
	}
		if (message.content.startsWith('!') && mute === false) 
		{
			try
			{
				switch(message.content)
				{
					case config.prefix + 'report':
						message.reply('I am online and working!')
	    				var time = Date.now()
	   					message.channel.send('Pew').then(m => m.edit('PING TOOK : **' + (Date.now() - time) + '** ms**'))
	    				message.channel.send('This report was sent in :```' + new Date() + '``` !');
						break;
					case config.prefix + 'help':
						message.reply('Help goes here ...')
						break;
					default:
						message.reply('**INVALID COMMAND')
				}
			}
			catch(ex){console.log('The error is at switch statement : ' + ex.stack)}
		}
})

bot.login(process.env.BOT_TOKEN)