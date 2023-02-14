import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      process.env.CYPRESS === 'true' &&
        IstanbulPlugin({
          cypress: true
        }),
      tsconfigPaths({
        projects: [fileURLToPath(new URL('tsconfig.base.json', import.meta.url))]
      })
    ].filter(Boolean)
  };
});
