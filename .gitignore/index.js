const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
   bot.user.setGame("MulTibot, !help");
   console.log("le bot a bien ete connecte");
});

bot.login("NDEwODU1MTU1NzI3MjA0MzUy.DV-wYQ.UxudEl7n0exFrnZg3sz5dnGdaIY")
