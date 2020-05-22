import { select, withKnobs } from '@storybook/addon-knobs';
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
    },
    showRoots: true
  }
});

addDecorator(withKnobs);

const ThemeContainer = ({ theme, contentDensity, children, direction }) => {
  useEffect(() => {
    if (contentDensity === ContentDensity.Compact) {
      document.body.classList.add('ui5-content-density-compact');
    } else {
      document.body.classList.remove('ui5-content-density-compact');
    }
  }, [contentDensity]);

  useEffect(() => {
    document.querySelector('html').setAttribute('dir', direction.toLowerCase());
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
        theme={select('Theme', Themes, Themes.sap_fiori_3)}
        contentDensity={select('ContentDensity', ContentDensity, ContentDensity.Cozy)}
        direction={select('Text Direction', ['LTR', 'RTL'], 'LTR')}
      >
        {getStory(context)}
      </ThemeContainer>
    );
  }
});

addDecorator(withQuery);
