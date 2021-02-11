const { exec } = require('child_process');

module.exports = (app) => {
  if (process.env.REACT_APP_USE_MOCK_SERVER === 'true') {
    exec('npm run start:mock-server');
  }
};
