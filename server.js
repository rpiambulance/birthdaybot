const {WebClient} = require('@slack/web-api');
const Notifications = require('./utilities/Notifications');
const Sentry = require("@sentry/node");
const cron = require("node-cron");

// Configure Sentry exception logging
if (process.env.SENTRY_DSN) {
    const sentryConfig = {
        dsn: process.env.SENTRY_DSN,
        release: `chorebot@${require("./package.json").version}`
    };
    if (process.env.ENVIRONMENT) sentryConfig.environment = process.env.ENVIRONMENT;
    Sentry.init(sentryConfig);
}

if (!process.env.SLACK_BOT_TOKEN) {
    throw 'Environment variables not properly loaded!';
}


/***
 * Globals
 * @type {string} TOKEN - Slack bot access token
 * @type {string} CRON_SCHEDULE - When to run BirthdayBot
 */
const TOKEN = process.env.SLACK_BOT_TOKEN;
const CRON_SCHEDULE = process.env.CRON_SCHEDULE;


/***
 *
 * @type {WebClient} webclient
 * @type {Notifications} notifications
 */
const webclient = new WebClient(TOKEN);
const notifications = new Notifications(webclient);

cron.schedule(CRON_SCHEDULE, notifications.announceBirthdays);
