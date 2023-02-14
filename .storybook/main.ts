import type { StorybookConfig } from '@storybook/react-vite';
import { setChromatic } from './utils';

const isDevMode = process.env.NODE_ENV === 'development';

const addons = ['@storybook/addon-essentials'];
if (isDevMode) {
  addons.push('@storybook/addon-a11y');
}
const isChromatic = process.env.STORYBOOK_ENV === 'chromatic';
setChromatic(isChromatic);

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: isChromatic
    ? ['../packages/main/src/components/**/*.stories.@(tsx|jsx|mdx)']
    : [
        '../docs/*.mdx',
        {
          directory: '../docs/knowledge-base',
          files: '*.mdx',
          titlePrefix: 'Knowledge Base'
        },
        '../packages/**/*.mdx',
        '../packages/**/*.stories.@(tsx|jsx)'
      ],
  addons: addons,
  docs: {
    autodocs: true
  },
  features: {
    // storyStoreV7: false
  },
  typescript: {
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: prop => {
    //     return prop.parent ? !/(@types\/react|@emotion|@storybook)/.test(prop.parent.fileName) : true;
    //   }
    // }
  },
  staticDirs: [isDevMode ? 'images-dev' : 'images']
};

export default config;
