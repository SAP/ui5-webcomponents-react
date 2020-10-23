import PATHS from './paths.js';

export default {
  rootDir: PATHS.root,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/{base,charts,main}/src/**/*.{ts,tsx}',
    '!**/src/lib/**/*',
    '!**/src/interfaces/*',
    '!**/src/enums/*',
    '!**/*.stories.tsx',
    '!**/*.jss.ts',
    '!**/node_modules/**',
    '!packages/*/src/index.ts',
    '!packages/**/demo/*',
    '!packages/base/src/polyfill/*', // no polyfills
    '!packages/main/src/components/AnalyticalTable/types/*' // no table enums
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom-sixteen',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/cra-template/',
    '<rootDir>/packages/cra-template-seed/'
  ],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents-react/dist/(.*)$': '<rootDir>/packages/main/dist/$1',
    '^@ui5/webcomponents-react/(.*)$': '<rootDir>/packages/main/src/$1',
    '^@ui5/webcomponents-react-base/types(.*)$': '<rootDir>/packages/base/types/$1',
    '^@ui5/webcomponents-react-base/(.*)$': '<rootDir>/packages/base/src/$1',
    '^@ui5/webcomponents-react-charts/(.*)$': '<rootDir>/packages/charts/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
};
