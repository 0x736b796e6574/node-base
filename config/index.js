var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        token: '',
        channel_id: '',
        app: {
            name: 'slack-bot'
        }
    },

    production: {
        root: rootPath,
        token: '',
        channel_id: '',
        app: {
            name: 'slack-bot'
        }
    }
};

module.exports = config[env];
