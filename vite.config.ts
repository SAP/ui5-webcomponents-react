import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@docs',
        replacement: fileURLToPath(new URL('./.storybook/components', import.meta.url))
      }
    ]
  },
  plugins: [
    react(),
    IstanbulPlugin({
      cypress: true
    })
  ]
});
