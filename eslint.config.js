// @ts-check

import pluginImport from 'eslint-plugin-import';
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type { import("eslint").Linter.FlatConfig } */
const typescriptConfig = {
  files: ['*.ts', '*.tsx'],
  parserOptions: {
    project: ['./tsconfig.spec.json', './tsconfig.node.json', './packages/*/tsconfig.json'],
    settings: {
      'import/resolver': {
        typescript: true
      }
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
    files: ['cypress/**/*', '*.cy.ts', '*.cy.tsx'],
    ...reactJsxRuntime
  },
  {
    files: ['cypress/**/*'],
    rules: {
      '@typescript-eslint/no-namespace': 'off'
    }
  },
  {
    files: ['*.cy.ts', '*.cy.tsx'],
    plugins: { 'no-only-tests': pluginNoOnlyTests },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/order': 'warn',
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
  {
    files: ['*.stories.tsx'],
    ...reactJsxRuntime
  },
  {
    files: ['*.stories.tsx'],
    extends: [pluginStorybook.configs.recommended],
    rules: {
      // inline custom components within stories don't need prop types
      'react/prop-types': 'off',
      // some samples can include unused vars to show the API / signature
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'off',
      // the CSF-3 render() functions are not detected as react components
      'react-hooks/rules-of-hooks': 'off'
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

const config = tseslint.config(
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  reactRecommended,
  pluginImport.configs.recommended,
  pluginImport.configs.typescript,
  {
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      'react-hooks': pluginReactHooks
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
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
      'import/no-unresolved': 'error'
    }
  },
  typescriptConfig,
  webComponentsConfig,
  ...cypressConfig,
  ...storybookConfig,
  ...specialComponents,
  pluginPrettierRecommended
);

console.log('-> config', config);
export default config;
