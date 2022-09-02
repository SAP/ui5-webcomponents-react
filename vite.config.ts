import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { dirname, join } from 'path';
import react from '@vitejs/plugin-react';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = path.resolve(__dirname, '..');

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()]
  // server: {
  //   fs: {
  //     allow: []
  //   }
  // }
});
