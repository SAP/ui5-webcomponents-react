const fs = require('fs');
const path = require('path');
const PATHS = require('../../config/paths');

fs.renameSync(
  path.join(PATHS.coverage, 'partial', 'clover.xml'),
  path.join(PATHS.coverage, 'partial', 'clover-jest.xml')
);
fs.renameSync(
  path.join(PATHS.coverage, 'partial', 'coverage-final.json'),
  path.join(PATHS.coverage, 'partial', 'coverage-final-jest.json')
);
