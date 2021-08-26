module.exports = ({ env }) => ({
  // только для bookshelf
  settings: {
    "versions-middleware": {
      enabled: true,
    },
    "prom": {
      "enabled": true,
      "metricsPath": "/metrics",
      "metricsPrefix": "foo"
    },
    "audit-log": {
      enabled: true,
      exclude: [],
      map: [
        {
          pluginName: 'content-manager',
          serviceName: 'contentmanager',
        },
        // {
        //   pluginName: 'navigation',
        //   serviceName: 'navigation',
        //   // Class: Navigation,
        // },
      ]
    },
  },
});
