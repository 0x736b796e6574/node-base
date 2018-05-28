var config = require('./config');

var slack = require('./config/slack')(config);

slack.on('message', function(data) {
  slack.sendMessage(data.text, config.channel_id)
});

slack.start();
