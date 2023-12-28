const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    baseUrl: 'https://magento.softwaretestingboard.com',
    supportFile: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      return config
    },
    
  },
},
);