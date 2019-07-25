const PATHS = require('./paths');
const path = require('path');
const webpackConfig = require('./karma.webpack.config');
const snapshotConfig = require('./karma.snapshot.config');
const deepmerge = require('deepmerge');
const uuid = require('uuid/v4');

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

module.exports = function(config) {
  const coverage = !!process.argv.find((item) => item === '--coverage');
  let coverageConfig = {};
  if (coverage) {
    coverageConfig = {
      reporters: ['coverage-istanbul'],
      coverageIstanbulReporter: {
        reports: ['text', 'json', 'clover'],
        dir: PATHS.nycOutput,
        'report-config': {
          json: {
            file: `${uuid()}.json`
          }
        }
      }
    };
  }

  const browsers = ['ChromeHeadless'];

  const finalConfig = deepmerge.all([
    webpackConfig(),
    snapshotConfig,
    coverageConfig,
    {
      browserNoActivityTimeout: 20000,
      basePath: path.join(PATHS.packages, 'main'),
      browsers,
      frameworks: ['mocha', 'chai'],
      files: [path.join(PATHS.packages, 'main', 'test', 'testRunner.js')],
      preprocessors: {
        'test/testRunner.js': ['webpack', 'sourcemap']
      },
      reporters: ['mocha'],
      mochaReporter: {
        output: 'minimal',
        showDiff: true // Leverage the really good mocha diff
      },
      port: 9876,
      colors: true,
      autoWatch: false,
      singleRun: true
    }
  ]);
  config.set(finalConfig);
};
