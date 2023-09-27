import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    define: {
      'process.env.STORYBOOK_ENV': `'${process.env.STORYBOOK_ENV}'`
    },
    resolve: {
      alias: {
        '@sb': fileURLToPath(new URL('./.storybook', import.meta.url)),
        '@ui5/webcomponents-react-base': fileURLToPath(new URL('./packages/base/src/index.ts', import.meta.url)),
        '@ui5/webcomponents-react-charts': fileURLToPath(new URL('./packages/charts/src/index.ts', import.meta.url)),
        '@ui5/webcomponents-react': fileURLToPath(new URL('./packages/main/src/index.ts', import.meta.url)),
        '@/': fileURLToPath(new URL('./', import.meta.url))
      }
    },
    plugins: [
      react(),
      process.env.CYPRESS === 'true' &&
        IstanbulPlugin({
          cypress: true
        }),
      tsconfigPaths({
        projects: [fileURLToPath(new URL('tsconfig.base.json', import.meta.url))]
      })
    ].filter(Boolean),
    server: {
      watch: {
        ignored: ['**/packages/cra-template/**', '**/packages/cra-template-seed/**']
      }
    }
  };
});
