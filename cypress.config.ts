import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  screenshotOnRunFailure: false,
  scrollBehavior: false
});
