import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['!**/.server', '!**/.client', 'build']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      jsxA11y.flatConfigs.recommended
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      'react-hooks': reactHooks
    },

    settings: {
      react: {
        version: 'detect'
      },

      formComponents: ['Form'],

      linkComponents: [
        {
          name: 'Link',
          linkAttribute: 'to'
        },
        {
          name: 'NavLink',
          linkAttribute: 'to'
        }
      ],

      'import/resolver': {
        typescript: {}
      },
      rules: {
        ...reactHooks.configs.recommended.rules
      }
    }
  },
  // Typescript
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript
    ],
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/internal-regex': '^~/',

      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx']
        },

        typescript: {
          alwaysTryTypes: true
        }
      }
    }
  },
  // Node
  {
    files: ['**/.eslintrc.cjs'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
);
