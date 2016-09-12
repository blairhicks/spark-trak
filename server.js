var Flint = require('node-flint');
var fs = require('fs');
var parse = require('csv-parse');
var request = require('request');

require('should');



/*
var express = require('express');
var logger = require('morgan');
 
var app = express();

app.use(logger(‘dev’));
*/

var recipientListFile = "EmergencyResponseTeam.txt";
//var recipientListFile = "EmergencyResponseTeamTest.txt";
var myEmailList = "EmergencyResponseSpark.txt";

var token_spark = process.env.TOKEN_SPARK_BOT;
var token_tropo_smsemer_txt = process.env.TOKEN_TROPO_SMSEMER_TXT;
var token_tropo_callspark_call = process.env.TOKEN_TROPO_CALLSPARK_CALL;
var token_tropo_emerconf_call = process.env.TOKEN_TROPO_EMERCONF_CALL;
var token_tropo_emerconf_txt = process.env.TOKEN_TROPO_EMERCONF_TXT;
var myToken = "Bearer " + token_spark;
var myBaseUrl=process.env.APP_URL;
var myBotEmail=process.env.BOT_EMAIL;

console.log("myBaseUrl: "+myBaseUrl);
console.log("myBotEmail: "+myBotEmail);
console.log("token_spark: "+token_spark);

// define flint setup
var config = {
    // url to access this app's webservice
//    baseUrl: 'http://carebot-twittbrod.c9users.io',
//    baseUrl: 'https://control.green.browndogtech.com/marathon/v2/apps/imapex/spark-trak/spark-trak-bot',
    baseUrl: myBaseUrl,
//    baseUrl: 'https://mysparkcareassistantbot.herokuapp.com',
    // port that local server listens on
 //   localPort: process.env.PORT,
    localPort: 80,
   // spark account email
    sparkEmail: myBotEmail,
    // spark api token
//    sparkToken: token_spark
    sparkToken: token_spark,
    // bot ready message
//    announceMessage: 'I am alive and well.  How may I help you today? (For some ideas, type /help)'
    announceMessage: 'This is only a test.'
};

console.log(myBaseUrl);
// init flint framework
console.log("Initialize flint now");
var flint = new Flint(config);
console.log("flint initialization complete");
//console.log(config);

/*
console.log("sending dm");
bot.dm('timwittb@cisco.com', 'I am awake.');
console.log("sent dm");

console.log("sending bot.mywebhook info");
console.log("bot.mywebhook: "+bot.mywebhook);
console.log("bot.mywebhook.localport: "+bot.mywebhook.localPort);
console.log("bot.mywebhook.externalPort: "+bot.mywebhook.externalPort);
console.log("sent bot.mywebhook info");
*/

/*
 // startup message
 flint.on('started', function(bot) {
 console.log('Flint started.');
 bot.say('I am alive and well.  How may I help you today?');
 });
 */

//flint.say("test message");

// echo test
flint.hears('/echo', function(bot, trigger) {
    console.log("echo command");
    console.log("echo " + trigger.args.join(' '));
    bot.say(trigger.args.join(' '));
});
