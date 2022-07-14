import PATHS from './paths.js';

export default {
  rootDir: PATHS.root,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/{base,charts,main}/src/**/*.{ts,tsx}',
    '!**/src/interfaces/*',
    '!**/src/enums/*',
    '!**/*.stories.tsx',
    '!**/*.jss.ts',
    '!**/node_modules/**',
    '!packages/*/src/index.ts',
    '!packages/main/src/components/AnalyticalTable/types/*' // no table enums
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/cra-template/',
    '<rootDir>/packages/cra-template-seed/'
  ],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
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
