const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const math = require('mathjs')
const config = require('./config')
const dotenv = require('dotenv')
const randomPuppy = require('random-puppy')
dotenv.load()

bot.on('ready', () =>  {
  console.log('Subiex is online')
  console.log('Subiex is ready')
  bot.user.setGame('┬─┬﻿ ノ( ゜-゜ノ)-ing')
})

/*bot.on('message', (message) =>  {
	if(message.content.startsWith(config.prefix))
	{
			try {
				switch (message.content) {
					case config.prefix + 'report':
						message.reply('I am online and working!')
	    				var time = Date.now()
	   					message.channel.send('Pew').then(m => m.edit('PING TOOK : **' + (Date.now() - time) + '** ms'))
	    				message.channel.send('This report was sent in :```' + new Date() + '```'); 
						break; 
					case config.prefix + 'help':
						message.reply('Help goes here ...')
						break;
					case config.prefix + 'hello':
						message.channel.send('Hello there ' + message.author.username)
						break;
					
					default:
						message.reply('**INVALID COMMAND**')
				}
				
			}
			catch(ex) {console.log('The error is at switch statement : ' + ex.stack)}
	}
})*/

const emojis = [
		"( ͡° ͜ʖ ͡°)",
		"¯\\_(ツ)_/¯",
		"ʕ•ᴥ•ʔ",
		"(▀̿Ĺ̯▀̿ ̿)",
		"(ง ͠° ͟ل͜ ͡°)ง",
		"ಠ_ಠ",
		"̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
		"[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]",
		"﴾͡๏̯͡๏﴿ O'RLY?",
		"[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
		"(ᵔᴥᵔ)",
		"(¬‿¬)",
		"(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)",
		"(づ￣ ³￣)づ",
		"ლ(ಠ益ಠლ)",
		"ಠ╭╮ಠ",
		"♪~ ᕕ(ᐛ)ᕗ",
		"ヾ(⌐■_■)ノ♪",
		"◉_◉",
		"\\ (•◡•) /",
		"༼ʘ̚ل͜ʘ̚༽",
		"┬┴┬┴┤(･_├┬┴┬┴",
		"ᕦ(ò_óˇ)ᕤ",
		"┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻",
		"（╯°□°）╯︵( .o.)"
	];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on('message', (message) => {

	if(message.content.startsWith(config.prefix + 'dog'))
	{
		randomPuppy()
		.then(url => {
        	message.channel.send(url)
    	})
	}
	else if(message.content == "(╯°□°）╯︵ ┻━┻")
	{
		message.channel.send("lemme take that table to its place")
		message.channel.send("┬─┬﻿ ノ( ゜-゜ノ)")
	}
	else if(message.content === "!moji")
	{
		var index = getRandomInt(0,24);
		message.channel.send(emojis[index]);
	}

	foreach(emoj in emojis)
	{
		if(message.content === emoj && message.content != "┬─┬﻿ ノ( ゜-゜ノ)")
		{
			var index = getRandomInt(0,24);
			message.channel.send(emojis[index]);
		}
	}

})

/*
bot.on('message', (message) =>  {
	var args = message.content.split(/[ ] +/)

	if (isCommand('say', message)) {
		if (hasRole(message.member, 'Admin')) {
			if (args.length === 1)
				message.reply("You didn't define a argument, ```USE: !say [text to say]```"); 
			else
				message.channel.send(args.join(' ').substring(5)); 
		}
		else
			message.reply("You don't have permissions to execute this command , you are not a **Admin**")
	}


})*/




bot.login(process.env.BOT_TOKEN)