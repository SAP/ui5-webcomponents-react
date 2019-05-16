const { Server } = require('karma');
const karmaConfig = require('../../../../config/karma.conf');
const { exec } = require('shelljs');
const path = require('path');
const ci = require('ci-info');
const PATHS = require('../../../../config/paths');

const useSelenium = false;
const coverage = !!process.argv.find((item) => item === '--coverage');

const pathToDockerCompose = path.resolve(PATHS.root, 'config', 'docker-compose.yml');

const useDocker = !ci.isCI && useSelenium;

if (useDocker) {
  exec(`docker-compose -f ${pathToDockerCompose} up -d`);
}

const server = new Server(karmaConfig({ coverage, useSelenium }), (exitCode) => {
  if (useDocker) {
    exec(`docker-compose -f ${pathToDockerCompose} down`);
  }
  process.exit(exitCode);
});

server.start();
