module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    indent: [
      'error',
      2,
      {
        ArrayExpression: 'first',
        CallExpression: { arguments: 'first' },
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        MemberExpression: 'off',
        ObjectExpression: 'first',
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression']
      }
    ],
    'react/prop-types': 0
  }
};
