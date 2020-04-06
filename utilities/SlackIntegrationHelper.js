class SlackIntegrationHelper {
    /***
     * Creates a SectionBlock
     *
     * @param {string} block_id - the id for the SectionBlock
     * @param {string} text - the message inside the SectionBlock
     * @returns {SectionBlock} the built SectionBlock
     */
    static buildSectionBlock(block_id, text) {
        return {type: 'section', block_id, text: {type: 'mrkdwn', text}};
    }

    /***
     * Creates a ImageBlock
     *
     * @param {string} block_id - the id for the ImageBlock
     * @param {string} image_url - the image URL
     * @param {string} alt_text - the image URL
     * @returns {ImageBlock} the built ImageBlock
     */
    static buildImageBlock(block_id, image_url, alt_text) {
        return {type: 'image', block_id, image_url, alt_text};
    }
}


module.exports = SlackIntegrationHelper;
