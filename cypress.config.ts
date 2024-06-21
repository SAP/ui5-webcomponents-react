import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: [
        'cypress/**',
        '**/src/interfaces/*',
        '**/src/enums/*',
        '**/*.stories.tsx',
        '**/*.test.{ts,tsx}',
        '**/node_modules/**',
        'packages/*/src/index.ts',
        'packages/main/src/components/AnalyticalTable/types/*',
        'packages/main/src/webComponents/**'
      ]
    }
  },
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
