const PATHS = require('./paths');

module.exports = {
  rootDir: PATHS.root,
  coverageDirectory: PATHS.nycOutput,
  coverageReporters: ['json', 'text'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.{ts,tsx}',
    '!**/src/lib/*',
    '!**/src/interfaces/*',
    '!**/src/enums/*',
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
  setupFiles: [
    '<rootDir>/node_modules/document-register-element/build/document-register-element.node.js',
    '<rootDir>/node_modules/jest-canvas-mock/lib/index.js',
    '<rootDir>/test/setupFiles/UI5WebComponentsSetup.js'
  ],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom-fifteen',
  testMatch: ['<rootDir>/packages/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents-react/lib/(.*)$': '<rootDir>/packages/main/src/lib/$1',
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
