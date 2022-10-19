module.exports = {
  defaultCommandTimeout: 90000,
  e2e: {
    baseUrl: 'https://app.pitch.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin:true
  },
}
