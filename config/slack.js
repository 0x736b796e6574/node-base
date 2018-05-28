module.exports = function(config) {
    var Slack = require('seed-slackbot');
    
    return Slack({ token: config.token, processReplies: true });
};
