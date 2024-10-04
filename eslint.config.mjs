// @ts-check

import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const ignorePatterns = {
  ignores: [
    'packages/base/dist',
    'packages/base/types',
    'packages/charts/dist',
    'packages/cli/dist',
    'packages/compat/dist',
    'packages/main/dist',
    'packages/main/wrappers',
    'packages/main/src/i18n/i18n-defaults.ts',
    'packages/main/src/generated',
    'packages/cypress-commands/dist',
    '**/scripts',
    '**/shared',
    '**/examples',
    '**/templates'
  ]
};
const config = tseslint.config(
  ignorePatterns,
  eslint.configs.recommended,
  // typescript-eslint shared configs
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  // import plugin
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  // eslint-plugin-react
  reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  reactPlugin.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  // eslint-plugin-react-hooks
  {
    plugins: {
      'react-hooks': reactHooksPlugin
    },
    rules: reactHooksPlugin.configs.recommended.rules
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        projectService: {
          allowDefaultProject: ['packages/*/postcss.config.mjs'],
          // eslint-disable-next-line camelcase
          maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 1000
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
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
      'import/no-unresolved': 'off',

      // recommended eslint rules
      'no-extra-boolean-cast': 'warn'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    settings: {
      'import/resolver': {
        typescript: true
      }
    },

    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

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

      '@typescript-eslint/no-floating-promises': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off'
    }
  },
  {
    files: ['**/*.mjs'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    files: [
      'packages/main/src/webComponents/*/index.tsx',
      'packages/compat/src/components/TableCell/index.tsx',
      'packages/compat/src/components/TableGroupRow/index.tsx'
    ],

    rules: {
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
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
  },
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
      'import/order': 'warn',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/unbound-method': 'warn',
      'react/display-name': 'off',
      'no-only-tests/no-only-tests': 'error'
    }
  },

  // Storybook
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off'
    }
  },

  // prettier plugin must be the last entry in the config!
  prettierPlugin
);

export default config;
