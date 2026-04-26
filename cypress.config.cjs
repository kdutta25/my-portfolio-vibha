const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:4000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
})
