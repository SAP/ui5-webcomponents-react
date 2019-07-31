const path = require('path');

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
  packages: path.join(root, 'packages')
};

module.exports = PATHS;
