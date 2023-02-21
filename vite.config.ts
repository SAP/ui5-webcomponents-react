import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    IstanbulPlugin({
      cypress: true
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./', import.meta.url))
      }
    ]
  }
});
