# Node base
A chat bot for [Slack](https://slack.com) by [0x736b796e6574h](https://0x736b796e6574.slack.com)

## Features

* Based on slack [Real Time Messaging API](https://api.slack.com/rtm)
* Simple plugins mechanism
* Messages can echo user message

## Usage

### Adding a bot user to my workspace
First you need to get the slack api token for your bot. You have two options:
1. Start by creating a [new bot user integration](https://my.slack.com/services/new/bot), you can get the api token on the integration page.
2. If you use a real slack user, you can generate api token on [slack web api page](https://api.slack.com/web).

### Configure the api token
Then you need add token for bot in file:  `/config/index.js` 
```
   token: '"<your-api-token>"',
   channel_id: "<your-api-token>",
```
##### Run the bot

```
node run app.js
```
