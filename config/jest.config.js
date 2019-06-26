const PATHS = require('./paths');
const path = require('path');
// const webComponentConfigMock = require('./webComponentConfigMock');

module.exports = {
  preset: 'ts-jest',
  rootDir: PATHS.root,
  setupFiles: ['jest-canvas-mock'],
  coverageDirectory: path.join(PATHS.root, 'coverage', 'partial'),
  coverageReporters: ['json', 'text', 'clover'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.{ts,tsx}',
    '!packages/main/src/lib/*.ts',
    '!packages/main/src/enums/*.ts',
    '!**/*.stories.tsx',
    '!**/*.jss.ts',
    '!**/*.karma.tsx',
    '!**/node_modules/**',
    '!packages/*/src/index.ts',
    '!packages/*/index.ts',
    '!packages/*/test/**/*',
    '!packages/*/stories/**/*',
    '!packages/docs/**/*',
    '!**/npm/**/*',
    '!**/webComponents/**/*'
  ],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom-fourteen',
  testMatch: ['<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents/dist(.*)$': 'identity-obj-proxy', // ui5 web components can be mocked, not relevant for jest tests
    '^@ui5/webcomponents-base/src/Configuration(.*)$': path.resolve(
      PATHS.shared,
      'tests',
      'mock',
      'webComponentConfigMock.js'
    ),
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [2307]
      }
    }
  }
};
