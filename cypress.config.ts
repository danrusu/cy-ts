import { defineConfig } from 'cypress';

const configuration = {
  supportFile: 'cypress/support/e2e.ts',
  specPattern: 'cypress/e2e/spec/**/*.cy.{js,ts}',

  chromeWebSecurity: false,

  video: false,
  screenshotOnRunFailure: false,
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logToTerminal(message) {
          console.log(`@@@ ${message}`);
          return null;
        },
      });
    },
    ...configuration,
  },
});
