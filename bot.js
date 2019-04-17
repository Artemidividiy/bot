const discord = require('discord.js')
const Client = new discord.Client()
const bot_token = "NTU1MzEyNjcxNTUwMDc4OTg4.D2pW0g.2_yjn780pBAbRDtbBTgOqFn922k"
const commando = require("discord.js-commando")

global.servers = {

}

const Julios_prefix = "J'"
const Rad_prefix = "R'"
const Hash_prefix = "H'"

var patch_version = "0.0.11 stable"

Client.on('ready', () =>{
    console.log("Tripples here")
    console.log("Current build: " + patch_version)
    console.log(" ")
})

Client.on('guildMemberAdd', member => {
    Client.on('message', recomming_message => {
        member.send("Welcome to the club, buddy")
        var newmember_role = member.guild.roles.find("name", "какие-то ноунеймы")
        member.addRole(newmember_role)  
        recomming_message.channel.send("Now u have a no-name sign. Write in the `нью-ники` the special pinned command to be known here")
        recomming_message.react(':poop:')
    })
})


Client.on('messageDelete', upcomming_message => {
    upcomming_message.channel.send(`${upcomming_message.author.username} DELETED A MESSAGE!!`)
})

Client.on('emojiCreate', created_emoji => {
    created_emoji.setName
})

Client.on('message', incomming_message => {

    if(incomming_message.author == Client.user) return

    if(incomming_message.content.startsWith(Julios_prefix)){
        var command = incomming_message.content.slice(Julios_prefix.length).split(' ')
        var main_command = command.shift().toLowerCase()
        var first_argument = command.slice(0)

        
        console.log("the whole command: " + command) //debugging command statistics
        console.log("main command: " + main_command)
        console.log("arguments: " + command)
        console.log(" ")

        if(main_command == "roll") //TODO: roll command 
        {
            var roll_complexion = 6
            roll_complexion = first_argument
            if(!first_argument)
            incomming_message.channel.send(`U haven't chosen the compection so we dropped a cube. And our result is ${roll(6)}`)
            else if(first_argument)
            incomming_message.channel.send("Oh we have **" + roll(roll_complexion) + `** on ${roll_complexion} dice`)
        }
        if(main_command == "ban") //TODO: ban commmand
        {
            const user = incomming_message.mentions.users.first()
            if(user){
                const member = incomming_message.guild.member(user)
                if(member){
                    incomming_message.channel.send("Who will be banned today?")
                    console.log("someone wants to ban a guy")
                    member.ban({
                        reason : "U are not a good person!",
                    }).then(() => {
                        incomming_message.reply(`successfully banned ${user.tag}`)
                    }).catch(err => {
                        incomming_message.reply("I am unable to ban this guy")
                        console.error(err);
                    })
                } else {
                    incomming_message.reply("this person isn't in our club")
                }
            } else {
                incomming_message.reply("You didn't mention the user to ban!")
            }
        }
    if(main_command == "kick"){ //TODO: Kick command
        const user = incomming_message.mentions.users.first();
        if (user) {
            console.log("user: " + user)
            const member = incomming_message.guild.member(user);
            console.log("member: " + member)
            if (member) {
                member.kick('He is a MathEc').then(() => {
                    incomming_message.reply(`Successfully kicked ${user.tag}`)
                }).catch(err => {
                    incomming_message.reply("I am unable to kick the member")
                    console.error(err)
                })
            } else {
                incomming_message.reply("That user isn't in this guild!")
            }
        } else {
            incomming_message.reply("You didn't ment a guy")
        }
    }
    //Rad commands

    if(incomming_message.content.startsWith(Rad_prefix)){
        var command = incomming_message.content.slice(Hash_prefix.length).split(' ')
        var main_command = command.shift().toLowerCase()
        var first_argument = command.slice(0,1)
        var second_argument = command.slice(1,2)

        console.log("arguments: " + command)
        console.log("main command" + main_command)
        if(main_command == "randact")
        {
            var action_counter = 2
            var result = Math.floor(Math.random() * action_counter)
            console.log("result of randact")
            if(result == 0)
            {
                
            }
        }

        if(main_command == "create_emoji"){
            incomming_message.channel.send("Making new emoji?") 
            Client.on('emojiCreate', created_emoji => {
                created_emoji.setName
            })
        }
            
        }
    }
    

    if(incomming_message.content.startsWith(Hash_prefix)){
        var command = incomming_message.content.slice(Hash_prefix.length).split(' ')
        var main_command = command.shift().toLowerCase()
        var first_argument = command.slice(1,2)
        var second_argument = command.slice(2,3)
        
        console.log("***")
        console.log("arguments: " + command)    
        console.log("first command: " + first_argument)
        console.log("second command: " + second_argument)
        console.log("***")
        console.log("-----------------")
        if (main_command == "bot") { //TODO: bot commands
            console.log(" ")
            
            console.log("Server command was used")
            if (command == "version")
            {
                console.log("-----------------")
                console.log("patch: " + patch_version)
                console.log("-----------------")
            }  
            if(command = "")
            console.log(" ")
        }
        if(main_command == "server"){ //TODO: server commands
            console.log(" ")
            console.log("Server command was used")
            if(first_argument == "guild") 
            {
            //     if(second_argument == "random_ban")
            //     {
                    
            //         if(user){
            //         const member = incomming_message.guild.member(user)
            //         if(member){
            //             incomming_message.channel.send("Who will be banned today?")
            //             console.log("someone wants to ban a guy")
            //             member.ban({
            //                 reason : "U are not a good person!",
            //             }).then(() => {
            //                 incomming_message.reply(`successfully banned ${user.tag}`)
            //             }).catch(err => {
            //                 incomming_message.reply("I am unable to ban this guy")
            //                 console.error(err);
            //             })
            //         } else {
            //             incomming_message.reply("this person isn't in our club")
            //         }
            //     } else {
            //         incomming_message.reply("You didn't mention the user to ban!")
            // }
            // }
                if(second_argument = "show_list_of_clients"){ //TODO list of clients in the guild command
                    const list = Client.guilds.get("538417651685261337")
                    list.members.forEach(member =>  console.log(member.user.username));
                }
            }
        }
        console.log("-----------------")
        
    }
        var list_of_commands = { //TODO: JSON stuff
            "all commands" : "roll \n classes  \n races \n random \n bot",
            "roll" : " uses Julios's prefix ( J' )  \n roll([number of edges])",
            "classes" : {
                "description" :"'classes' is a compection command which is to have one of an argument({set_character's_class} or {view_all_classes})", //TODO: WIP
                "set_character's_class" : "this argument u must enter, when u create new character. In case u didn't ur character would be a warrior. No one except Rad wanna be a warrior. Uses Rad's Prefix(R') and the syntax - set_character's_class [class which is in view_all_classes list]",
                "view_all_classes" : "Shows u the list of all classes in this rp "
            },
            "races" : { 
                "description" : "The system of races doesn't work the same as in other rp's. This means, that it doesn't make any sense if u are a dworf or an elf. But if u want to know more about races text help for view_all_races",
                "view_all_races" : "View all races is an argument which reurns u the list of all races, I've created for this rp",
                "set_chracter's_race" : "this argument is optional, because it gives u nothing, but I'm sure u're allowed to take urs, just type set_character_race [race name]"
            },
            "actions" : {
                "description" : "I prepared some useful actions. Their purpose is to provide tge content to the players. It is already done 2 of 4 actions. If u want to know about then more, use command Rad’s prefix(R’) and the command help view_all_actions. If u wanted to know the detailed information, try Rad prefix plus help action [action_name)]", 
            
                "View_all_actions" : "if u want to check the list of available actions u should try Rad’s prefix plus view_all_actions", 
            
                "dungeon" : "if u want to go to dungeon u are to chat Rad’s prefix plus random + action. If it’ll be, u will be replied by the message from bot, which will be ‘reacted’ by bot. U are to click on empty(only one react count on the reaction button) button and bot will count u as a lobby member. U should wait for 30 seconds and u’re trip will start", 
                "dungeon_list_of_items" : "u have a: \n 5% chance to gain a legendary loot \n 15% chance to find some epic loot \n 35 % chance to collect a rare item \n 45 % to find the common cloth",
            
                "PvP_battle" : "If u were accidentally poisoned by someone, u will be  to fight with ur own friend. If someone win, the winner must take all legendary and epic loot of the loser. The winner is the stronger, but it is a secret, how to count it", 
                
                } 
            
            }
    function get_welcome_message(){ //TODO: welcome message
        var welcome_message = {
                "welcome" : "Welcome, to our board, stranger, wanna play a game of tripples?"

        }
        incomming_message.reply(`${welcome_message.welcome}`)
    }
     

    function try_help(command_here){ //TODO: idk how to use it (WIP)
        incomming_message.channel.send("oh, I see, u dunno understand command")
        incomming_message.channel.send(`Try help[${command_here}]`)
    }
    function roll(roll_complexion){ //TODO: roll func
        var result = Math.floor(Math.random() * roll_complexion) + 1
        return result
    }
})


Client.login(bot_token)
//TODO: dungeon command
// if(main_command == "action")
//             var varaity = 4;
//             var result = Math.round(Math.random() * 100 / varaity)
//             console.log("result to a random action: " + result)
//             if(result = 1){
//                 incomming_message.channel.send("Oh, Rad found a dungeon")
//                 incomming_message.channel.send("maybe someone want to enter")
//                 .then(function(incomming_message){
//                         incomming_message.react("👍")
//                         incomming_message.react("👎")
//                         incomming_message.react("💩")
//                         const ReactionCollector = new discord.ReactionCollector(incomming_message, "👍")
                        
//                         if(ReactionCollector.total == 4){
//                             console.log("The time's up all, slots are full")
//                             incomming_message.channel.send("All the slots are full, so let's start")
//                         }
//                 })   
//                 incomming_message.channel.send("To take part in the access, u should have react for 30 sec")
//             } 
//             if(result = 2){
//                 incomming_message.channel.send(list_of_commands.actions.description)
//                 incomming_message.channel.send("Oh Rad found a camp full of goblins")
//             }

//TODO: random faction settuper for a person
// let factrion1 = member.guild.roles.find("name", "Faction 1")
    // let factrion2 = member.guild.roles.find("name", "Faction 2")
    // let factrion3 = member.guild.roles.find("name", "Faction 3")
    // var chance = Math.floor(Math.random() * 3)
    // if(chance == 0) {
    //     member.addRole(factrion1)
    // }
    // else if(chance == 1){
    //     member.addRole(factrion2)

    // }
    // else member.addRole(factrion3)