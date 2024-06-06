import { Preview } from '@storybook/react';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import '@ui5/webcomponents-base/dist/features/F6Navigation.js';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection.js';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { ContentDensity, ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { useEffect } from 'react';
import 'tocbot/dist/tocbot.css';
import '../packages/main/dist/Assets.js';
import languages from './components/languageCodes.json';
import { MAPPED_THEMES } from './utils';

const argTypesCategoryCommonProps = {
  table: { category: 'Common props' }
};

const preview: Preview = {
  argTypes: {
    style: argTypesCategoryCommonProps,
    className: argTypesCategoryCommonProps,
    slot: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    }
  },
  decorators: [
    (Story, { globals }) => {
      const { theme, contentDensity, direction, language } = globals;

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
  ],
  globalTypes: {
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
  },
  parameters: {
    docs: {
      source: {
        excludeDecorators: true
      }
    },
    viewMode: 'docs',
    actions: { argTypesRegex: '^on.*' },
    controls: {
      sort: 'requiredFirst'
    },
    backgrounds: { disable: true },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          'Project Templates & Examples',
          'Change Log',
          'Migration Guide',
          'Knowledge Base',
          'Testing with Cypress',
          ['Setup', 'Commands', 'Queries'],
          'Charts',
          'Data Display',
          'Inputs',
          'Layouts & Floorplans',
          'Modals & Popovers',
          'User Feedback',
          'Legacy Components'
        ]
      }
    },
    chromatic: { pauseAnimationAtEnd: true }
  }
};

export default preview;
