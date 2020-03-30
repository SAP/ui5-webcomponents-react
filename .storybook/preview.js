import { select, withKnobs } from '@storybook/addon-knobs';
import { makeDecorator } from '@storybook/addons';
import { addDecorator, addParameters } from '@storybook/react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11';
import '@ui5/webcomponents-react-base/polyfill/IE11';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import '@ui5/webcomponents/dist/generated/json-imports/i18n';
import '@ui5/webcomponents/dist/generated/json-imports/Themes';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import React, { useEffect } from 'react';
import 'react-app-polyfill/ie11';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

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

  return children;
};

const withQuery = makeDecorator({
  name: 'withQuery',
  parameterName: 'query',
  wrapper: (getStory, context) => {
    return (
      <ThemeContainer
        theme={select('Theme', [Themes.sap_fiori_3, Themes.sap_fiori_3_dark], Themes.sap_fiori_3)}
        contentDensity={select('ContentDensity', ContentDensity, ContentDensity.Cozy)}
        direction={select('Text Direction', ['LTR', 'RTL'], 'LTR')}
      >
        {getStory(context)}
      </ThemeContainer>
    );
  }
});

const themr = makeDecorator({
  name: 'themr',
  parameterName: 'themr',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context) => {
    return <ThemeProvider withToastContainer>{getStory(context)}</ThemeProvider>;
  }
});

addDecorator(withQuery);
addDecorator(themr);
