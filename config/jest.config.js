const PATHS = require('./paths');

module.exports = {
  rootDir: PATHS.root,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.{ts,tsx}',
    '!**/src/lib/*',
    '!**/src/interfaces/*',
    '!**/src/enums/*',
    '!**/*.stories.tsx',
    '!**/*.jss.ts',
    '!**/node_modules/**',
    '!packages/*/src/index.ts',
    '!packages/*/index.ts',
    '!packages/docs/**/*',
    '!packages/cra-template/**/*',
    '!packages/**/demo/*',
    '!packages/base/src/polyfill/*', // no polyfills
    '!packages/main/src/components/AnalyticalTable/types/*' // no table enums
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom-sixteen',
  testMatch: ['<rootDir>/packages/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/cra-template/'],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents-react/(.*)$': '<rootDir>/packages/main/src/$1',
    '^@ui5/webcomponents-react-base/third-party/(.*)$': '<rootDir>/packages/base/third-party/$1',
    '^@ui5/webcomponents-react-base/(.*)$': '<rootDir>/packages/base/src/$1',
    '^@ui5/webcomponents-react-charts/(.*)$': '<rootDir>/packages/charts/src/$1',
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
