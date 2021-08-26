module.exports = ({ env }) => ({
  plugins: {
    navigation: {
      additionalFields: ['slug'],
      allowedLevels: 3,
      contentTypesNameFields: {
        'page': ['title'],
      },
    },
  },
  preview: {
    publicationState: 'preview',
    // FIXME можно таскать из env
    baseUrl: 'http://localhost:1337/',
    previewUrl: 'http://localhost:1337/preview/:contentType/:id'
  }
});
