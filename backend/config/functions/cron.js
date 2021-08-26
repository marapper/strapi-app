'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  // Generate the sitemap every 5 min
  '*/5 * * * *': () => {
    // FIXME UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_URL]: Invalid URL:
    strapi.plugins.sitemap.services.sitemap.createSitemap();
  },
};
