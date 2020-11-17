import { makeDecorator } from '@storybook/addons';
import { addDecorator, addParameters } from '@storybook/react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11WithWebComponentsPolyfill';
import '@ui5/webcomponents-fiori/dist/Assets';
import '@ui5/webcomponents-react-base/polyfill/IE11';
import '@ui5/webcomponents-react/dist/Assets';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import React, { useEffect } from 'react';
import 'react-app-polyfill/ie11';
import { DocsPage } from '../shared/stories/DocsPage';
import applyDirection from '@ui5/webcomponents-base/dist/locale/applyDirection';

addParameters({
  passArgsFirst: true,
  viewMode: 'docs',
  docs: { forceExtractedArgTypes: true, page: DocsPage },
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Getting Started',
        'Migration Guide',
        'Style Web Components',
        'Test Setup',
        'Internationalization',
        'Efficient Bundling'
      ]
    }
  }
});

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
    name: 'Theme',
    description: 'Fiori Theme',
    defaultValue: Themes.sap_fiori_3,
    toolbar: {
      items: Object.keys(Themes).map((themeKey) => ({
        value: themeKey,
        title: themeKey
      }))
    }
  },
  contentDensity: {
    name: 'Content Density',
    description: 'Content Density',
    defaultValue: ContentDensity.Cozy,
    toolbar: {
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
    name: 'Direction',
    description: 'Text Direction',
    defaultValue: 'ltr',
    toolbar: {
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
