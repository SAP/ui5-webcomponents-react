import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080
});
