module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-types': 0,
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
    'import/no-duplicates': 2
  }
};
