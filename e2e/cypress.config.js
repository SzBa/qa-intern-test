const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://clearcodehq.github.io/qa-intern-test/#',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

});
