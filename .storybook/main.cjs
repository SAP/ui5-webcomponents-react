const path = require('path');
const root = path.resolve(__dirname, '..');

const isDevMode = process.env.NODE_ENV === 'development';

const addons = [
  '@storybook/addon-essentials',
  { name: '@storybook/addon-docs', options: { transcludeMarkdown: true } }
];

if (isDevMode) {
  addons.push('@storybook/addon-a11y');
}

const isChromatic = process.env.STORYBOOK_ENV === 'chromatic';

module.exports = {
  framework: '@storybook/react',
  stories: isChromatic
    ? ['../packages/main/src/components/**/*.stories.@(tsx|jsx|mdx)']
    : ['../docs/**/*.stories.mdx', '../packages/**/*.stories.@(tsx|jsx|mdx)'],
  addons: addons,
  core: {
    builder: 'webpack5'
  },
  webpack: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@docs': path.join(root, '.storybook', 'components'),
      '@ui5/webcomponents-react/dist/assets/i18n': path.join(root, 'packages', 'main', 'dist', 'assets', 'i18n'),
      '@ui5/webcomponents-react/dist/Assets': path.join(root, 'packages', 'main', 'dist', 'Assets'),
      '@ui5/webcomponents-react': path.join(root, 'packages', 'main', 'src'),
      '@ui5/webcomponents-react-charts': path.join(root, 'packages', 'charts', 'src'),
      '@ui5/webcomponents-react-base$': path.join(root, 'packages', 'base', 'src', 'index.ts')
    };
    return config;
  },
  features: {
    storyStoreV7: false,
    postcss: false
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        return prop.parent ? !/(@types\/react|@emotion|@storybook)/.test(prop.parent.fileName) : true;
      }
    }
  },
  staticDirs: [isDevMode ? 'images-dev' : 'images']
};
