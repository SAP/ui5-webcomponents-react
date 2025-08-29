import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = path.resolve(__dirname, '..');
const PATHS = {
  root,
  build: path.join(root, 'build'),
  shared: path.join(root, 'shared'),
  temp: path.join(root, 'temp'),
  nodeModules: path.join(root, 'node_modules'),
  packages: path.join(root, 'packages'),
  ai: path.join(root, 'packages', 'ai'),
  base: path.join(root, 'packages', 'base'),
  charts: path.join(root, 'packages', 'charts'),
  cli: path.join(root, 'packages', 'cli'),
  compat: path.join(root, 'packages', 'compat'),
  'cypress-commands': path.join(root, 'packages', 'cypress-commands'),
  main: path.join(root, 'packages', 'main'),
};

export default PATHS;
