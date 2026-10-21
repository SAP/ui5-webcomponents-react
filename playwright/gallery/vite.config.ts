import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import IstanbulPlugin from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';

const withCoverage = process.env.PW_COVERAGE === 'true';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    withCoverage &&
      IstanbulPlugin({
        include: [
          'packages/main/src/components/FilterBarSearchIcon/**/*',
          'packages/main/src/components/SelectDialog/**/*',
          'packages/main/src/components/Splitter*/**/*',
          'packages/charts/src/**/*',
        ],
        extension: ['.ts', '.tsx'],
        requireEnv: false,
        forceBuildInstrument: true,
      }),
    tsconfigPaths({
      projects: [fileURLToPath(new URL('../../tsconfig.base.json', import.meta.url))],
    }),
  ].filter(Boolean),
});
