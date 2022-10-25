import '@ui5/webcomponents-base/dist/features/F6Navigation.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import 'tocbot/dist/tocbot.css';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { makeDecorator } from '@storybook/addons';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';
import { ContentDensity, ThemeProvider } from '@ui5/webcomponents-react';
import React, { useEffect } from 'react';
import { MAPPED_THEMES } from './utils';
import languages from './components/languageCodes.json';

const argTypesCategoryCommonProps = {
  table: { category: 'Common props' }
};

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on.*' },
  controls: {
    sort: 'requiredFirst'
  },
  backgrounds: { disable: true },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Getting Started', 'Change Log', 'Migration Guide', 'Knowledge Base']
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
    const { theme, contentDensity, direction, language } = context.globals;

    useEffect(() => {
      if (language === 'local') {
        setLanguage(null);
      } else {
        setLanguage(language);
      }
    }, [language]);

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
    defaultValue: 'sap_horizon',
    toolbar: {
      title: 'Theme',
      items: MAPPED_THEMES
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
  },
  language: {
    title: 'Languages',
    description: 'Languages',
    defaultValue: 'local',
    toolbar: {
      icon: 'globe',
      items: languages.map((item) => ({ value: item.id, title: item.language }))
    }
  }
};
