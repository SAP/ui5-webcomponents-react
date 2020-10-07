import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = path.resolve(__dirname, '..');
const PATHS = {
  root,
  src: path.join(root, 'src'),
  build: path.join(root, 'build'),
  test: path.join(root, 'test'),
  shared: path.join(root, 'shared'),
  coverage: path.join(root, 'coverage'),
  nycOutput: path.join(root, '.nyc_output'),
  nodeModules: path.join(root, 'node_modules'),
  packages: path.join(root, 'packages'),
};

export default PATHS;
