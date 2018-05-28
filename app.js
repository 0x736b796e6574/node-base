var Slack = require('seed-slackbot');
var slack = new Slack({ token: token, processReplies: true });

var token =  'token';
var channel_id = "channel_id"

slack.on('message', function(data) {
  slack.send(channel_id,data.text);
});
