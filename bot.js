    /**
     * use the Discord.js library which we installed with npm
     */
    const Discord = require('discord.js');
    
    /**
     * initialize client
     */
    const client = new Discord.Client();
/**
 * Use `client.on` to handle discord events
 */
client.on('ready', () => {
  console.log('I am ready!');
});

/**
 * add your token here to connect bot
 * keep this line at end of file to make sure your bot has read
 * the entire script before going online
 */
client.login('BOT TOKEN');
/**
 * listen for new messages
 */
client.on('message', message => {
  /**
   * basic command condition
   */
  if (message.content === 'say hi') {
    message.reply('hello to you!');
  }
});
