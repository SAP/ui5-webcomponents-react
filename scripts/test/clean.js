const rimraf = require('rimraf');

rimraf('coverage', (error) => {
  if (error) {
    console.error(error);
  }
});
