const rimraf = require('rimraf');

rimraf.sync('build');
rimraf.sync('coverage');
rimraf.sync('packages/**/*.d.ts');
