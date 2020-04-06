const config = require('../config');

class NotificationsHelper {

    static randomPhrase() {
        return config['phrases'][Math.floor(Math.random() * config['phrases'].length)];
    }

    static randomGif() {
        return config['gif'][Math.floor(Math.random() * config['gif'].length)];
    }

    static formatSlackIds(slackIds) {
        if (slackIds.length === 1) return `<@${slackIds[0]}>`;
        if (slackIds.length === 2) return `<@${slackIds[0]}> and <@${slackIds[0]}>`;
        let message = '';
        for (let i = 0; i < slackIds.length - 1; i++) {
            message += `<@${slackIds[i]}>, `
        }
        message += `and <@${slackIds[slackIds.length - 1]}>`;
        return message;
    }
}

module.exports = NotificationsHelper;
