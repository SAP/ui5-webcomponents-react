import { makeDecorator } from '@storybook/addons';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';
import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
import { ContentDensity, ThemeProvider, Themes } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import React, { useEffect } from 'react';
import 'tocbot/dist/tocbot.css';
import { DocsPage } from './components/DocsPage';

const argTypesCategoryCommonProps = {
  table: { category: 'Common props' }
};

export const parameters = {
  viewMode: 'docs',
  docs: { page: DocsPage },
  actions: { argTypesRegex: '^on.*' },
  controls: {
    sort: 'requiredFirst'
  },
  backgrounds: { disable: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started', 'Migration Guide', 'Knowledge Base', 'Internationalization', 'Public Utils']
    }
  },
  chromatic: { pauseAnimationAtEnd: true }
};

export const argTypes = {
  style: argTypesCategoryCommonProps,
  className: argTypesCategoryCommonProps,
  slot: {
    table: { disable: true }
  },
  ref: {
    table: { disable: true }
  }
};

const ThemeProviderDecorator = makeDecorator({
  name: 'ThemeProvider',
  parameterName: 'ThemeProvider',
  wrapper: (Story, context) => {
    const { theme, contentDensity, direction } = context.globals;

    useEffect(() => {
      if (contentDensity === ContentDensity.Compact) {
        document.body.classList.add('ui5-content-density-compact');
      } else {
        document.body.classList.remove('ui5-content-density-compact');
      }
    }, [contentDensity]);

    useEffect(() => {
      document.querySelector('html').setAttribute('dir', direction);
      applyDirection();
    }, [direction]);

    useEffect(() => {
      setTheme(theme);
    }, [theme]);

    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  }
});

export const decorators = [ThemeProviderDecorator];

export const globalTypes = {
  theme: {
    title: 'Theme',
    description: 'Fiori Theme',
    defaultValue: Themes.sap_fiori_3,
    toolbar: {
      title: 'Theme',
      items: Object.keys(Themes).map((themeKey) => ({
        value: themeKey,
        title: themeKey
      }))
    }
  },
  contentDensity: {
    title: 'Content Density',
    description: 'Content Density',
    defaultValue: ContentDensity.Cozy,
    toolbar: {
      title: 'Content Density',
      items: [
        {
          value: ContentDensity.Cozy,
          title: ContentDensity.Cozy
        },
        {
          value: ContentDensity.Compact,
          title: ContentDensity.Compact
        }
      ]
    }
  },
  direction: {
    title: 'Direction',
    description: 'Text Direction',
    defaultValue: 'ltr',
    toolbar: {
      // title: 'Direction',
      icon: 'transfer',
      items: [
        {
          value: 'ltr',
          title: 'LTR'
        },
        {
          value: 'rtl',
          title: 'RTL'
        }
      ]
    }
  }
};
