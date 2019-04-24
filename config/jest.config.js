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
    '!**/npm/**/*',
    '!**/webComponents/**/*'
  ],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^@fiori-for-react/styles$': '<rootDir>/packages/styles/src/index.ts',
    '^@fiori-for-react/utils$': '<rootDir>/packages/utils/src/index.ts',
    '^@shared/(.*)$': '<rootDir>/shared/$1'
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
