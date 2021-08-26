module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ['_v', 'created_at'],
  },
  rest: {
    defaultLimit: 1000,
    maxLimit: 2500,
  },
});
