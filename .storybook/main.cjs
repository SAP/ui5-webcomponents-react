const path = require('path');
const root = path.resolve(__dirname, '..');

const isDevMode = process.env.NODE_ENV === 'development';

const addons = ['@storybook/addon-essentials'];

if (isDevMode) {
  addons.push('@storybook/addon-a11y');
}

module.exports = {
  framework: '@storybook/react',
  stories: ['../docs/**/*.stories.mdx', '../packages/**/*.stories.@(tsx|jsx|mdx)'],
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
      '@ui5/webcomponents-react-base/types': path.join(root, 'packages', 'base', 'types'),
      '@ui5/webcomponents-react-base': path.join(root, 'packages', 'base', 'src')
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
      propFilter: (prop) => (prop.parent ? !/(@types\/react|@emotion\/core)/.test(prop.parent.fileName) : true)
    }
  },
  staticDirs: [isDevMode ? 'images-dev' : 'images']
};
