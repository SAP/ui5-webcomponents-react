const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ];
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
