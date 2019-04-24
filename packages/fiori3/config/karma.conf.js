const PATHS = require('./paths');
const path = require('path');
const webpackConfig = require('./karma.webpack.config');
const snapshotConfig = require('./karma.snapshot.config');
const deepmerge = require('deepmerge');
const ip = require('ip');
const isCi = require('is-ci');

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

const gridUrl = `http://${isCi ? 'hub' : 'localhost'}:4444/wd/hub`;
console.log(`Using Selenium Grid URL: '${gridUrl}'`);

module.exports = function(config) {
  let coverageConfig = {};
  if (config.coverage) {
    coverageConfig = {
      reporters: ['coverage-istanbul'],
      coverageIstanbulReporter: {
        reports: ['json', 'text', 'clover'], // jest default
        dir: path.join(PATHS.libRoot, 'coverage', 'partial')
      }
    };
  }

  const browsers = [];
  if (isCi || config.useSelenium) {
    browsers.push('selenium_chrome');
  } else {
    browsers.push('ChromeHeadless');
  }

  const finalConfig = deepmerge.all([
    webpackConfig(config),
    snapshotConfig,
    coverageConfig,
    {
      basePath: PATHS.root,
      customLaunchers: {
        selenium_chrome: {
          base: 'SeleniumGrid',
          gridUrl,
          browserName: 'chrome'
        }
      },
      browsers,
      frameworks: ['mocha', 'chai'],
      files: ['test/testRunner.js'],
      preprocessors: {
        'test/testRunner.js': ['webpack', 'sourcemap']
      },
      reporters: ['mocha'],
      mochaReporter: {
        output: 'minimal',
        showDiff: true // Leverage the really good mocha diff
      },
      port: 9876,
      hostname: ip.address(),
      listenAddress: ip.address(),
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      singleRun: true
    }
  ]);

  return finalConfig;
};
