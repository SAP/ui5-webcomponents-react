const PATHS = require('./paths');

module.exports = {
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
    '!packages/main/src/components/AnalyticalTable/types/*', // no table enums
    '!packages/base/src/styling/sap_fiori_3.ts', // no old theming parameters
    '!packages/base/src/styling/HSLColor.ts', // no deprecated HSL Util
    '!packages/base/src/styling/font72.ts', // no deprecated font
    '!packages/base/src/Scroller/*', // no scroll lib as it is not longer used
    '!packages/base/src/utils/Event.ts', // event is deprecated
    '!packages/charts/src/internal/ChartLabel.tsx' // temp copy of recharts label
  ],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['./config/jestsetup.ts'],
  testEnvironment: 'jsdom-sixteen',
  testMatch: ['<rootDir>/packages/**/?(*.)(spec|test).{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/cra-template/'],
  transformIgnorePatterns: ['node_modules/(?!(@ui5|lit-html))'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@ui5/webcomponents-react/assets/(.*)$': '<rootDir>/packages/main/assets/$1',
    '^@ui5/webcomponents-react/json-imports/(.*)$': '<rootDir>/packages/main/json-imports/$1',
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
