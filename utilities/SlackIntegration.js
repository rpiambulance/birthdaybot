class SlackIntegration {
    /***
     * Constructs the Slack Integration
     *
     * @param {WebClient} webclient - A Slack Web Client
     */
    constructor(webclient) {
        this.web = webclient;
    }

    /***
     * Posts a Slack message as an attachment
     *
     * @param {string} channel - Channel id where the message will be posted
     * @param {KnownBlock[]} blocks - An array of blocks for the text
     * @param {KnownBlock[]} attachments - An array of blocks for the attachment
     * @returns {Promise<WebAPICallResult>} Promise of the message sending
     */
    postSlackMessage(channel, blocks, attachments = []) {
        const msg = {channel, text: blocks[0].text.text, blocks};
        if (attachments) {
            msg['attachments'] = attachments
        }
        return this.web.chat.postMessage(msg);
    }

}

module.exports = SlackIntegration;
