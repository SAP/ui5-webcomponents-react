/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.mdx',
      options: {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
};

export default config;
