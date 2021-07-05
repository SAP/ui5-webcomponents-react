import { makeDecorator } from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets';
import '@ui5/webcomponents-icons/dist/Assets';
import '@ui5/webcomponents-react/dist/Assets';
import { ContentDensity } from '@ui5/webcomponents-react/dist/ContentDensity';
import { ThemeProvider } from '@ui5/webcomponents-react/dist/ThemeProvider';
import { Themes } from '@ui5/webcomponents-react/dist/Themes';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import React, { useEffect } from 'react';
import { DocsPage } from '../shared/stories/DocsPage';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection';

const argTypesCategoryCommonProps = {
  table: { category: 'Common props' }
};

export const parameters = {
  viewMode: 'docs',
  docs: { page: DocsPage },
  actions: { argTypesRegex: '^on.*' },
  controls: {
    sort: 'requiredFirst'
    // exclude: /^on.*/
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Getting Started',
        'Migration Guide',
        'Style Web Components',
        'Test Setup',
        'Internationalization',
        'Efficient Bundling',
        'Knowledge Base'
      ]
    }
  },
  argTypes: {
    style: argTypesCategoryCommonProps,
    className: argTypesCategoryCommonProps,
    tooltip: argTypesCategoryCommonProps,
    slot: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    }
  }
};

const ThemeContainer = ({ theme, contentDensity, children, direction }) => {
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

  return <ThemeProvider>{children}</ThemeProvider>;
};

const withQuery = makeDecorator({
  name: 'themr',
  parameterName: 'themr',
  wrapper: (getStory, context) => {
    return (
      <ThemeContainer
        theme={context.globals.theme || Themes.sap_fiori_3}
        contentDensity={context.globals.contentDensity}
        direction={context.globals.direction}
      >
        {getStory(context)}
      </ThemeContainer>
    );
  }
});

addDecorator(withQuery);

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
