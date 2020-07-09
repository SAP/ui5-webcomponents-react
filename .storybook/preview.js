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
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import React, { useEffect } from 'react';
import 'react-app-polyfill/ie11';

addParameters({
  options: {
    storySort: (a, b) => {
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true, caseFirst: 'upper' });
    }
  },
  passArgsFirst: true,
  viewMode: 'docs',
  docs: { forceExtractedArgTypes: true },
  actions: { argTypesRegex: '^on.*' }
});

const ThemeContainer = ({ theme, contentDensity, children, direction }) => {
  useEffect(() => {
    if (contentDensity === ContentDensity.Compact) {
      document.body.classList.add('ui5-content-density-compact');
    } else {
      document.body.classList.remove('ui5-content-density-compact');
    }
  }, [contentDensity]);

  // useEffect(() => {
  //   document.querySelector('html').setAttribute('dir', direction);
  // }, [direction]);

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
      items: [
        {
          value: Themes.sap_fiori_3,
          title: Themes.sap_fiori_3
        },
        {
          value: Themes.sap_fiori_3_dark,
          title: Themes.sap_fiori_3_dark
        },
        {
          value: Themes.sap_belize,
          title: Themes.sap_belize
        },
        {
          value: Themes.sap_belize_hcb,
          title: Themes.sap_belize_hcb
        },
        {
          value: Themes.sap_belize_hcw,
          title: Themes.sap_belize_hcw
        }
      ]
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
