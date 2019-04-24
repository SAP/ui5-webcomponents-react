const rimraf = require('rimraf');

rimraf('packages/**/*.d.ts', (error) => {
  if (error) {
    console.error(error);
  }
});
