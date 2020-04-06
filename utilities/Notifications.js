const NotificationsHelper = require("./NotificationsHelper");
const SlackIntegrationHelper = require("./SlackIntegrationHelper");

const SlackIntegration = require('./SlackIntegration');
const axios = require('axios');

const WEB_TOKEN = process.env.WEB_TOKEN;
const WEBSITE = process.env.WEBSITE;
const CHANNEL = process.env.SLACK_CHANNEL;


class Notifications extends SlackIntegration {

    async announceBirthdays() {
        const {data} = await axios.get(`${WEBSITE}/slack-birthdays.php?token=${WEB_TOKEN}`);
        const slackIds = JSON.parse(data).filter(x => x !== null);
        if (slackIds.length === 0) return;
        const formattedSlackIds = NotificationsHelper.formatSlackIds(slackIds);
        const message = SlackIntegrationHelper.buildSectionBlock('announcement',
            NotificationsHelper.randomPhrase().replace('[Slack Ids]', formattedSlackIds));
        const image = SlackIntegrationHelper.buildImageBlock('image', NotificationsHelper.randomGif(),
            'Happy Birthday!');
        await this.postSlackMessage(CHANNEL, [message, image])
    }
}

module.exports = Notifications;
