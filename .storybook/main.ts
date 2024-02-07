import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import { isChromatic } from './utils';

const isDevMode = process.env.NODE_ENV === 'development';

const addons = [
  {
    name: '@storybook/addon-essentials',
    options: {
      docs: false
    }
  },
  {
    name: '@storybook/addon-docs',
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    }
  }
];
if (isDevMode) {
  addons.push('@storybook/addon-a11y');
}

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  stories: isChromatic
    ? ['../packages/main/src/components/**/*.stories.@(tsx|jsx)']
    : [
        '../docs/*.mdx',
        {
          directory: '../docs/knowledge-base',
          files: '*.mdx',
          titlePrefix: 'Knowledge Base'
        },
        {
          directory: '../packages/charts',
          files: '**/*@(.stories.tsx)',
          titlePrefix: 'Charts'
        },
        {
          directory: '../packages/base',
          files: '*.@(tsx|jsx)',
          titlePrefix: 'Base'
        },
        {
          directory: '../packages/cypress-commands',
          files: '**/*.mdx',
          titlePrefix: 'Testing with Cypress'
        },
        '../packages/main/**/*.mdx',
        '../packages/main/**/*.stories.@(tsx|jsx)'
      ],
  addons,
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
  staticDirs: [isDevMode && 'images-dev', 'images'].filter(Boolean)
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
