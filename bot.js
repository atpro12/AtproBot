const Discord = require("discord.js"); // use discord.js
const bot = new Discord.Client();
var request = require ("request");

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4MTYzODQ0ODgxMTA4MTcyOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE0MTM0OTkzfQ.01VP67Rl9qpQnyNokJ_-Tqeu0MAdrZzlSSU46a4iikA');
const PREFIX = "%"  // bot's prefix
const ytdl = require('ytdl-core');

const newUsers = [];
var cat = "http://random.cat/meow.php"

bot.on("message", function(message) {
if (message.author.equals(bot.user))return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "cat":
        request({
            url: cat,
            json: true
        }, function (error, response, body) {
            console.log(body);
            message.channel.send(body);
        })
        break;
    }
});

bot.on('ready', () => {
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);
});
var eightball = [ // sets the answers to an eightball
   "yes!",
   "no...",
   "maybe",
   "probably",
   "100% yes",
   "never!",
   "you can try...",
   "up to you!",
]
var red = [ // sets the answers to an eightball
    "yes!",
    "no...",
    "maybe",
    "probably",
    "100% yes",
    "never!",
    "you can try...",
    "up to you!",
 ]

var penis = [ // sets the answers to an penis
   "8=======================D",
   "8=D",
   "8==================================================D",
   "8================================D",
   "8=============D",
   "8===D",
   "you got none ha!",
   "8==================================================================D",
]
var rate = [ // sets the answers to an rate
   "10/10",
   "1/10",
   "0/10",
   "9/10",
   "6/10",
   "0.1/10",
   "8/10",
   "5/10",
   "3/10",
 ]
var coinflip = [

  "http://sheepbot.net/media/flipcoin/2.png",
  "http://sheepbot.net/media/flipcoin/1.png",

]
bot.on('message', message => {
    if (message.content === '%play2') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});


bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
   bot.user.setActivity(`(%help) playing with ${bot.users.size} users in ${bot.guilds.size} guilds.`); // sets the game the bot is playing
   console.log("Booted up!") // messages the console Booted up!
});


bot.on("message", function(message) { // when a message is sent
   if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

   if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore


   var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
   var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
   var mutedrole = message.guild.roles.find("name", "muted");

   if (command == "help") { // creates a command *help
       var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
           .setTitle("**List of Commands**\n") // sets the title to List of Commands
           .addField(" - help", "Displays this message (Correct usage: %help)") // sets the first field to explain the command *help  .addField(" - info", "Tells info about myself :smile:") // sets the field information about the command *info

           .addField(" - info", "Tells info about myself :smile:") // sets the field information about the command *info
           .addField("- invite", "gives you link to invite the bot (%invite)")
           .addField("- website", "gives you link to the bot website (%website)")
           .addField("- emotes", "gets all the emotes in a server (%emotes)")
           .addField("- members", "Tells you the server Member count")
           .addField("- userinfo", "Tells you your info")
           .addField("- serverinfo", "Tells you about the server info")
           .addField("- avatar", "shows you your avatar")
           .addField("- poll", "starts a poll")
           .addField("- upvote", "upvote the bot to make it more famoose")
           .setColor(0x00AE86)
           var kek = new Discord.RichEmbed()
           .setTitle("**Fun commands**\n")
           .addField(" - ping", "Tests your ping ( %ping)") // sets the second field to explain the command *ping
           .addField(" - expose", "expose the gei person u (%expose)") // sets the second field to explain the command *G
           .addField(" - expose2", "expose the gei person above you (%expose2)") // sets the second field to explain the command *G
           .addField(" - candy", "Sends a candy to the desired player! :candy: (%candy @username)") // sets the third field to explain the command *cookie
           .addField(" - hug", "hug the person you luv (%hug @username)") // sets the third field to explain the command *hug
           .addField(" - 8ball", "Answers to all of your questions! (%8ball [question])") // sets the field to the 8ball command
           .addField("-penis", "Tells you your penis size!(%penis <text,user>)")
           .addField("- rate", "rate anything ya want (%rate)")
           .addField("- coinflip", "flips a coin (%coinflip)")
           .addField(" - countdown60s,countdown5m,countdown10m", "does the counting for you!")
           .addField(" - cat", "gives you a cute cat")
           
           .setColor(0x00AE86) // sets the color of the embed box to orange
           .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
       var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
           .setTitle("**List of Admin Commands**\n") // sets the title
           .addField(" - say", "Makes the bot say whatever you want ( %say [message])")
           .addField(" - mute", "Mutes a desired member with a reason ( %mute @username [reason])") // sets a field
           .addField(" - unmute", "Unmutes a muted player (: %unmute @username)")
           .addField(" - kick", "Kicks a desired member with a reason ( %kick @username [reason])") //sets a field
           .setColor(0xFF0000) // sets a color
           .setFooter("Ooo, an admin!") // sets the footer
           message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
           message.channel.send(kek);
       if(message.member.roles.some(r=>[""].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too

       bot.on("guildDelete", guild => {

         // this event triggers when the bot is removed from a guild.

         console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);

         bot.user.setGame(`on ${bot.guilds.size} servers`);

       });
       bot.on("guildMemberAdd", (member) => {
         const guild = member.guild;
         if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
         newUsers[guild.id].set(member.id, member.user);

         if (newUsers[guild.id].size > 10) {
           const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
           guild.channels.get(guild.id).send("Welcome our new users!\n" + userlist);
           newUsers[guild.id].clear();
         }
       });
         

       bot.on("guildCreate", guild => {
  console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

   }

   if (command == "info") { // creates the command *info
      let h = new Discord.RichEmbed()
    .setTitle("Atpro Bot Info")
    .setColor(424549)
    .setDescription("Hello I'm atpro#6504's bot and I am kool so you should add me to your server.")
    .addField("What Can I Do?", "I can do many things like ban/kick and other moderation commands I can also do many fun commands like countdown, start a poll, expose some people, and the list goes on.")
    .setImage("http://theartmad.com/wp-content/uploads/2015/03/Bugs-Bunny-4.png")
    message.channel.send(h);
   }
   
   if (command == "profile") {
       let j = new Discord.RichEmbed()
       .setAuthor(message.author.name)
       .setThumbnail(message.author.avatarURL)
       .setImage("http://sheepbot.net/media/flipcoin/2.png")
       message.channel.send(j);
   }
   if (command === "play") {
        if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${config.prefix}add`);
            if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
            if (queue[message.guild.id].playing) return message.channel.sendMessage('Already Playing');
            let dispatcher;
            queue[message.guild.id].playing = true;
     
            console.log(queue);
            (function play(song) {
                console.log(song);
                if (song === undefined) return message.channel.sendMessage('Queue is empty').then(() => {
                    queue[message.guild.id].playing = false;
                    message.member.voiceChannel.leave();
                });
                message.channel.sendMessage(`Playing: **${song.title}** song requested by: **${song.requester}**`);
                dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
                let collector = message.channel.createCollector(m => m);
                collector.on('message', m => {
                    if (m.content.startsWith(config.prefix + 'pause')) {
                        message.channel.sendMessage('paused').then(() => {dispatcher.pause();});
                    } else if (m.content.startsWith(config.prefix + 'resume')){
                        message.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
                    } else if (m.content.startsWith(config.prefix + 'skip')){
                        message.channel.sendMessage('skipped').then(() => {dispatcher.end();});
                    } else if (m.content.startsWith('volume+')){
                        if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                        dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
                        message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    } else if (m.content.startsWith('volume-')){
                        if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                        dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
                        message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    } else if (m.content.startsWith(config.prefix + 'time')){
                        message.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
                    }
                });
                    dispatcher.on('end', () => {
                    collector.stop();
                    play(queue[message.guild.id].songs.shift());
                });
                dispatcher.on('error', (err) => {
                    return message.channel.sendMessage('error: ' + err).then(() => {
                        collector.stop();
                        play(queue[message.guild.id].songs.shift());
                    });
                });
            })(queue[message.guild.id].songs.shift());
        } else
     
         if (command === "join") {
            return new Promise((resolve, reject) => {
                const voiceChannel = message.member.voiceChannel;
                if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('You\'re not in a voice channel');
                voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
            });
        } else
     
      if (command === "addsong") {
            let url = message.content.split(' ')[1];
            if (url == '' || url === undefined) return message.channel.sendMessage(`You must add a YouTube video url, or id after ${config.prefix}add`);
            yt.getInfo(url, (err, info) => {
                if(err) return message.channel.sendMessage('Invalid YouTube Link: ' + err);
                if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
                message.channel.sendMessage(`added **${info.title}** to the queue`);
            });
        } else 
     
         if (command === "queue") {
            if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${config.prefix}add`);
            let tosend = [];
            queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
            message.channel.sendMessage(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
       }
   if (command == "emotes") {
     const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
     message.channel.send(emojiList);
   }

   if (command == "ping") { // creates a command *ping
        message.react("💩")
        message.reply('Pong!' + Math.round(bot.ping) + ' ms');
   }
   if (command == "invite") { // creates a command *ping
         var embedhelpmember = new Discord.RichEmbed()
       .setTitle("click the link to invite")
         
       .setURL("https://discordapp.com/oauth2/authorize?client_id=381638448811081728&scope=bot&permissions=8") // answers with "Pong!"
         .setColor(0xFF0000)
         .setFooter("invite to your server")
         
         
         message.channel.send(embedhelpmember);
   }
   if (command == "upvote") {
       let dam = new Discord.RichEmbed()
       .setTitle("Upvote for candy :candy:")
       .setURL("https://discordbots.org/bot/381638448811081728")
       .setColor(0xFF0000)
       
       message.channel.send(dam);
   
 }
   if (command == "website") { // creates a command *ping
           var embedhelpmember = new Discord.RichEmbed()
          .addField("https://atprobot.glitch.me/#")// answers with "Pong!"
          .setFooter("bot site")
          .setColor(0xFF0000)
           message.channel.send(embedhelpmember);



   }
   if (command == "expose") { // creates a command *G
       message.channel.send("**:point_down: Get a load of this faggot lol :point_down:**"); // answers with "point_down: Get a load of this faggot lol :point_down!"
   }


   if (command == "expose2") { // creates a command *G
       message.channel.send("**:point_up: Get a load of this faggot lol :point_up:**"); // answers with "point_down: Get a load of this faggot lol :point_down!"
   }

   if (command == "candy") { // creates the command cookie
       if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " some candy! :candy:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
       else message.channel.send("Who do you want to send a candy to? :candy: (Correct usage: %candy @username)") // sends the error message if no-one is mentioned
   }

   if (command == "hug") { // creates the command hug
     if (args[1]) message.channel.send(message.author.toString() + " just gave a hug to " + args[1].toString() + " awwwwww :heart:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
     else message.channel.send("Who do you want to send a hug to? (Correct usage: %hug @username)") // sends the error message if no-one is mentioned
 }

 
   if (command == "8ball") { // creates the command 8ball
       if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
       else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: %8ball [question])"); // if not, error
     }
     if (command == "test") { // creates the command 8ball
        if (args[1] != null) message.author.send(red[Math.floor(Math.random() * red.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: %8ball [question])"); // if not, error
      }
     if (command == "coinflip") { // creates the command 8ball
       var test = new Discord.RichEmbed()
  message.reply(coinflip[Math.floor(Math.random() * coinflip.length).toString(16)]); // if args[1], post random answer


     }
     if (command == "rate") { // creates the command 8ball
         if (args[1] != null) message.reply(rate[Math.floor(Math.random() * rate.length).toString(16)]); // if args[1], post random answer
         else message.channel.send("what do you want to rate? :rolling_eyes: (Correct usage: %rate [question])"); // if not, error

   }
   if (command == "penis") { // creates the command 8ball
       if (args[1] != null) message.reply(penis[Math.floor(Math.random() * penis.length).toString(16)]); // if args[1], post random answer
       else message.channel.send("use the command with a message :rolling_eyes: (Correct usage: %penis [question])"); // if not, error
   }


    if (command == "say") { // creates command say

        var sayMessage = message.content.substring(4)
        message.delete().catch(O_o=>{});
        message.react("💩")
        message.channel.send(sayMessage);
    }
   
   if (command == "members") {
    let atpro = new Discord.RichEmbed()
    .setTitle(message.guild.name)
    .addField('Member Count', message.guild.memberCount)
    message.channel.send(atpro);


   }
    if (command == "servers") {
        var servers = bot.guilds.array().map(g => g.name).join(', ')
        message.channel.send(servers);
    }
    
    
                
    
    if (command == "poll") { // creates command say
        
        
       message.react("415616207484616707")
    }
    if (command == "userinfo") {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("Users Info")
        .setColor('#0x00AE86')
        .addField('Username', `${message.author.username}#${message.author.discriminator}`)
        .addField('User ID', message.author.id)
        .addField('Account Created', message.author.createdAt)
    
        .addField('Joined Server', message.member.joinedAt)
        .setThumbnail(message.author.avatarURL);
         message.channel.send(embed);
        
    
    
    }
    if (command == "serverinfo") {
        let plswork = new Discord.RichEmbed()
        .setTitle(message.guild.name)
        .setDescription("servers info")
        .setColor('#7289da')
        .addField('Server ID', message.guild.id)
        .addField('Member Count', message.guild.memberCount)
        .addField('members joined today', message.guild.members.joinedAt)
        .addField('Channel Count', message.guild.channels.size)
        .addField('Role Count', message.guild.roles.size)
        .addField('Server Created', message.guild.createdAt)
        .setThumbnail(message.guild.avatarURL);
        message.channel.send(plswork);
    }
    if (command == "avatar") {
       let trash = new Discord.RichEmbed()
       .setColor('#7289da')
        .setThumbnail(message.author.avatarURL);
        message.channel.send(trash);

    }
   if(command === "purge") {
       let messagecount = parseInt(args[1]) || 1;

       var deletedMessages = -1;

       message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
           messages.forEach(m => {
               if (m.author.id == bot.user.id) {
                   m.delete().catch(console.error);
                   deletedMessages++;
               }
           });
       }).then(() => {
               if (deletedMessages === -1) deletedMessages = 0;
               message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                   .then(m => m.delete(2000));
       }).catch(console.error);
   }
   if (command == "countdown60s") {
    let i = 60;
    message.channel.send("Countdown: " + i + "s").then(message => {
        var countInterval = setInterval(() => {
          if(i === 10) {
            message.edit(i = "Times up");
            return clearInterval(countInterval);
          }
          message.edit("Time left: " + (i = i - 10) + "s")
        }, 10000);
      })
    }
    if (command == "countdown5m") {
        let i = 300;
        message.channel.send("Countdown: " + i + "s").then(message => {
            var countInterval = setInterval(() => {
              if(i === 10) {
                message.edit(i = "Times up");
                return clearInterval(countInterval);
              }
              message.edit("Time left: " + (i = i - 10) + "s")
            }, 10000);
          })
        }
         if (command == "countdown10m") {
            let i = 600;
            message.channel.send("Countdown: " + i + "s").then(message => {
                var countInterval = setInterval(() => {
                  if(i === 10) {
                    message.edit(i = "Times Up.");
                    return clearInterval(countInterval);
                  }
                  message.edit("Time left: " + (i = i - 10) + "s")
                }, 10000);
              })
            }
if (command === "eval") {
  if (message.author.id !== "312341294032748544") return;
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }


});
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


bot.login(process.env.BOT_TOKEN); // connects to the bot
