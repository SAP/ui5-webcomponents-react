const { Server } = require('karma');
const karmaConfig = require('../../config/karma.conf');
const isCi = require('is-ci');
const { exec } = require('shelljs');
const path = require('path');

const useSelenium = false;
const coverage = !!process.argv.find((item) => item === '--coverage');

const pathToDockerCompose = path.resolve(__dirname, '..', '..', 'config', 'docker-compose.yml');

if (!isCi && useSelenium) {
  exec(`docker-compose -f ${pathToDockerCompose} up -d`);
}

const server = new Server(karmaConfig({ coverage, useSelenium }), (exitCode) => {
  if (!isCi && useSelenium) {
    exec(`docker-compose -f ${pathToDockerCompose} down`);
  }
  process.exit(exitCode);
});

server.start();
