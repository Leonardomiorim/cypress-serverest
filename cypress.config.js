const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/',
    apiBaseUrl: 'https://serverest.dev/',
    setupNodeEvents(on, config) {
      // Eventos customizados, se necessário
    },
  },
});
