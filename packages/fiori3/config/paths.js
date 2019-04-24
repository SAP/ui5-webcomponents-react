const path = require('path');

const root = path.resolve(__dirname, '..');
const PATHS = {
  root,
  src: path.join(root, 'src'),
  // test: path.join(root, 'test'),
  packageRoot: path.join(root, '..'),
  nodeModules: path.join(root, 'node_modules'),
  libRoot: path.join(root, '..', '..'),
  rootNodeModules: path.join(root, '..', '..', 'node_modules')
};

PATHS.index = path.join(PATHS.src, 'index.ts');

module.exports = PATHS;
