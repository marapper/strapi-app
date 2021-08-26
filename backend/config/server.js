module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: 'http://${host}:${port}/api', // An absolute url is however recommended.
  admin: {
    url: '/admin',
    // autoOpen: env.bool('AUTO_OPEN', false),
    // serveAdminPanel: true,
    auth: {
      // можно прятать в эдиториале админку admin.serveAdminPanel
      secret: env('ADMIN_JWT_SECRET', '4b755e207a6f8f2434fb88c8bfe66799'),
      // events Record of all the events subscribers registered for the authentication
      // Single-Sign-On on Strapi allows you to configure additional sign-in and sign-up methods for your administration panel.
      // To configure SSO on your application, you will need an EE license with a Gold plan.
    },
  },
  // или конфигурация в cron (powered by node-schedule (opens new window))
  cron: {
    enabled: true,
  },
  // emitErrors можно собирать кастомно ошибки
});
