const PATHS = require('./paths');
const path = require('path');
const webpackConfig = require('./karma.webpack.config');
const snapshotConfig = require('./karma.snapshot.config');
const deepmerge = require('deepmerge');

process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

module.exports = function(config) {
  const coverage = !!process.argv.find((item) => item === '--coverage');
  let coverageConfig = {};
  if (coverage) {
    coverageConfig = {
      reporters: ['coverage-istanbul'],
      coverageIstanbulReporter: {
        reports: ['json', 'text', 'clover'], // jest default
        dir: path.join(PATHS.coverage, 'partial')
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
      basePath: path.join(PATHS.packages, 'fiori3'),
      browsers,
      frameworks: ['mocha', 'chai'],
      files: [path.join(PATHS.packages, 'fiori3', 'test', 'testRunner.js')],
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
