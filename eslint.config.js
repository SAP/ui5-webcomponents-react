// @ts-check

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import preferArrow from 'eslint-plugin-prefer-arrow';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
});

/** @type { import("eslint").Linter.FlatConfig[] } */
const typescriptConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  settings: {
    languageOptions: {
      // parser: tsParser,
    },
    'import/resolver': {
      typescript: true
    }
  },
  rules: {
    // disabled some rules from the recommended preset
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // consistent type exports/imports
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false
      }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports'
      }
    ],

    // lots of UI5 Web Components API are promised based but 'fire and forget' is sufficient for us
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_'
      }
    ],

    // Performance Improvements: https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off'
  }
};

/** @type { import("eslint").Linter.FlatConfig } */
const webComponentsConfig = {
  files: ['packages/main/src/webComponents/*/index.tsx'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off'
  }
};

/** @type { import("eslint").Linter.FlatConfig[] } */
const cypressConfig = [
  {
    files: ['cypress/**/*'],
    rules: {
      '@typescript-eslint/no-namespace': 'off'
    }
  },
  {
    files: ['**/*.cy.ts', '**/*.cy.tsx'],
    plugins: {
      'no-only-tests': noOnlyTests
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'import/no-unresolved': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/unbound-method': 'warn',
      'react/display-name': 'off',
      'no-only-tests/no-only-tests': 'error'
    }
  }
];

/** @type { import("eslint").Linter.FlatConfig[] } */
const storybookConfig = [
  ...compat.extends('plugin:storybook/recommended').map((config) => ({
    ...config,
    files: ['**/*.stories.tsx']
  })),
  {
    files: ['**/*.stories.tsx'],

    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off'
    }
  }
];

/** @type { import("eslint").Linter.FlatConfig[] } */
const specialComponents = [
  // AnalyticalTable
  {
    files: [
      'packages/main/src/components/AnalyticalTable/defaults/**/*.tsx',
      'packages/main/src/components/AnalyticalTable/hooks/*.ts',
      'packages/main/src/components/AnalyticalTable/hooks/*.tsx',
      'packages/main/src/components/AnalyticalTable/TableBody/VirtualTableBodyContainer.tsx'
    ],
    rules: {
      'react/prop-types': 'off'
    }
  }
];

const finalConfig = tseslint.config(
  {
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        EXPERIMENTAL_useProjectService: {
          // TODO https://github.com/typescript-eslint/typescript-eslint/issues/9450
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 1000
        },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.mjs', '**/CommandsAndQueries.tsx', '**/*.js'],
    ...tseslint.configs.disableTypeChecked
  },
  reactRecommended,
  reactJsxRuntime,
  ...fixupConfigRules(compat.extends('plugin:import/recommended')),
  {
    ignores: [
      'packages/base/dist',
      'packages/base/types',
      'packages/charts/dist',
      'packages/cli/dist',
      'packages/main/dist',
      'packages/main/ssr',
      'packages/main/wrappers',
      'packages/main/src/i18n/i18n-defaults.ts',
      'packages/cypress-commands/dist',
      'eslint.config.js',
      '**/scripts',
      '**/shared',
      '**/examples',
      '**/templates'
    ]
  },
  {
    plugins: {
      'prefer-arrow': preferArrow,
      'react-hooks': fixupPluginRules(pluginReactHooks)
    },

    rules: {
      camelcase: [
        'error',
        {
          allow: [
            'sap_fiori_3',
            'sap_fiori_3_dark',
            'sap_fiori_3_hcb',
            'sap_fiori_3_hcw',
            'sap_belize',
            'sap_belize_hcb',
            'sap_belize_hcw',
            'sap_horizon',
            'sap_horizon_dark',
            'sap_horizon_hcb',
            'sap_horizon_hcw'
          ]
        }
      ],

      'import/order': [
        'error',
        {
          'newlines-between': 'never',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'error',

      ...pluginReactHooks.configs.recommended.rules
    }
  },
  typescriptConfig,
  webComponentsConfig,
  ...specialComponents,
  ...cypressConfig,
  ...storybookConfig,
  pluginPrettierRecommended
);

console.log('-> finalConfig', finalConfig);
export default finalConfig;
