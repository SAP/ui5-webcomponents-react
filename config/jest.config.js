const PATHS = require('./paths');
const path = require('path');

module.exports = {
  preset: 'ts-jest',
  rootDir: PATHS.root,
  setupFiles: ['jest-canvas-mock'],
  coverageDirectory: path.join(PATHS.root, 'coverage', 'partial'),
  coverageReporters: ['json', 'text', 'clover'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.{ts,tsx}',
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
    '^@lib/(.*)$': '<rootDir>/packages/fiori3/src/lib/$1',
    '^@ui5/webcomponents/dist(.*)$': '<rootDir>/shared/tests/mock/ReactComponent.js'
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
