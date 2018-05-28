var config = require('./config');

var slack = require('./config/slack')(config);

slack.on('message', function(data) {
  slack.send(config.channel_id,data.text);
});
