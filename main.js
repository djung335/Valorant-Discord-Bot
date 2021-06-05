const Discord = require('discord.js');

const client = new Discord.Client();


let primaryGuns = ['Stinger', 'Spectre', 'Bulldog', 'Guardian', 'Phantom', 'Vandal', 'Bucky', 'Judge', 'Ares', 'Odin', 'Marshal', 'Operator'];
let secondaryGuns = ['Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff'];



// the prefix of the command that you give the bot
const prefix = '!';



client.once('ready', () => {
    
    console.log('Valorant Bot is online!')
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;      
    

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'site') {
        
        const chance = Math.floor(Math.random()*3);

        if (chance == 0) {
            message.channel.send('Go A Site');
        } else if (chance == 1) {
            message.channel.send('Go B Site');
        } else if (chance == 2) {
            message.channel.send('Go Mid');
        }
      
    }


    if (command === 'lo') {
        
        const gun1 = Math.floor(Math.random()*12);
        const gun2 = Math.floor(Math.random()*5);

        message.channel.send('Random Loadout: ' + primaryGuns[gun1] + ' + ' + secondaryGuns[gun2]);
      
    }


    if (command === 'clutch') {
        client.on('message', async message => {
            // Join the same voice channel of the author of the message
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
            }
        });


    }



    
});



// last line of file
client.login('ODQ0ODA3NTQ3MzM2NTIzNzg2.YKXyVw.mpErLqlcmYwj4lTsZxq3aqs6i3o');