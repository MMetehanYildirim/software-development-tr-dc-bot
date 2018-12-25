const Discord = require('discord.js'); // discord library
const moment = require('moment');
const prefix = ';'; // message prefix
const bot = new Discord.Client();

bot.login(''); // Bot token dm pars11#1145

bot.on('ready', () => { // ready control
    console.log('Software Development Bot started')
});

bot.on('message', message => { // get messages

    let msg = message.content; // message content
    let msgUpper = message.content.toUpperCase(); // message content upper for commands
    let sender = message.author; // message author
    let args = msg.split(","); // Message split for complex messages
    let today = moment(Date.now()); // Get date now for time operations

    if (msgUpper === prefix + 'TEST') { // sample command start 

    } // sample command end

    else if (msg.startsWith(prefix + 'test1')) { // sample 2 command start

    } // sample 2 command end
    
});

bot.on("guildMemberAdd", (member) => { // Welcome message

    let welcomechan = bot.channels.find("name", "welcome"); // welcome channel with name
    let color = "006D18";
    let title = "Software Development Kanalına Hoşgeldiniz Hocam";

    const embed = new Discord.RichEmbed() // Embed for welcome message
        .setThumbnail(member.user.avatarURL,)
        .setColor(color)
        .addField(title,member)
        .addField('#rol-istek', 'Rol istek kanalında hemen kendini tanıtarak başlayabilirsin.')
        .addField('member','member')
        .setFooter("We are legion");
    welcomechan.send(embed);
});
          