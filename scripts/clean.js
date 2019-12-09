const rimraf = require('rimraf');

rimraf.sync('coverage');
rimraf.sync('packages/**/*.d.ts');
