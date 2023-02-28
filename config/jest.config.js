import PATHS from './paths.js';

export default {
  rootDir: PATHS.root,
  coverageDirectory: 'temp/jest-coverage',
  coverageReporters: ['lcov', 'text', 'json'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/main/src/{components,internal}/**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*.jss.ts',
    '!**/*.cy.{ts,tsx}',
    '!**/node_modules/**',
    '!packages/main/src/components/AnalyticalTable/types/*', // no table enums,
    '!**/CodeGen.tsx'
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/cra-template/',
    '<rootDir>/packages/cra-template-seed/'
  ],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html|d3|internmap))'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents-react/dist/([Aa]ssets.*)$': '<rootDir>/packages/main/dist/$1',
    '^@ui5/webcomponents-react/(.*)$': '<rootDir>/packages/main/$1',
    '^@ui5/webcomponents-react$': '<rootDir>/packages/main/src/index.ts',
    '^@ui5/webcomponents-react-base$': '<rootDir>/packages/base/src/index.ts',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
};
