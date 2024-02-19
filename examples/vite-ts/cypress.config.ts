import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },

  e2e: {
    baseUrl: 'http://localhost:5173/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
