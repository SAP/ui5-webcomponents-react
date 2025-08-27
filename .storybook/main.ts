import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import type { StoriesEntry } from 'storybook/internal/types';
import { mergeConfig } from 'vite';
import { isChromatic } from './utils.ts';

const isDevMode = process.env.NODE_ENV === 'development';

const storyList: StoriesEntry[] = isChromatic
  ? ['../packages/main/src/components/**/*.stories.@(tsx|jsx)']
  : [
      '../docs/*.mdx',
      {
        directory: '../docs/knowledge-base',
        files: '*.mdx',
        titlePrefix: 'Knowledge Base',
      },
      {
        directory: '../packages/charts/src/components',
        files: '**/*.@(mdx|stories.@(mdx|tsx))',
        titlePrefix: 'Charts',
      },
      {
        directory: '../packages/base',
        files: '*.@(tsx|jsx)',
        titlePrefix: 'Base',
      },
      {
        directory: '../packages/cypress-commands',
        files: '**/*.mdx',
        titlePrefix: 'Testing with Cypress',
      },
      '../packages/main/**/*.mdx',
      '../packages/main/**/*.stories.@(tsx|jsx)',
      {
        directory: '../packages/ai',
        files: '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))',
        titlePrefix: 'AI',
      },
      {
        directory: '../packages/compat',
        files: '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))',
        titlePrefix: 'Legacy Components',
      },
      {
        directory: '../patterns',
        files: '**/*.@(mdx|stories.@(mdx|tsx))',
        titlePrefix: 'Patterns',
      },
    ];

const addons = [
  './addons/version-switch',
  getAbsolutePath('@storybook/react-vite'),
  {
    name: getAbsolutePath('@storybook/addon-docs'),
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  },
];
if (isDevMode) {
  addons.push('@storybook/addon-a11y');
}

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  stories: storyList,
  addons,
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: isDevMode ? ['images-dev'] : ['images'],
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      build: {
        target: 'esnext',
      },
    }),
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
