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
  packages: path.join(root, 'packages')
};

export default PATHS;
