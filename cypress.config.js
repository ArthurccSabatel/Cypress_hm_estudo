const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "yt8i7r",

  e2e: {

    baseUrl: "https://automationpratice.com.br/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
