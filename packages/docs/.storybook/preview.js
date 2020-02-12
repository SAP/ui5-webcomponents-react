import { select, withKnobs } from '@storybook/addon-knobs';
import { makeDecorator } from '@storybook/addons';
import { addDecorator, addParameters } from '@storybook/react';
import '@ui5/webcomponents-base/dist/features/browsersupport/IE11';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import { window } from 'global';
import 'highlight.js/styles/solarized-dark.css';
import qs from 'qs';
import React, { useEffect } from 'react';
import 'react-app-polyfill/ie11';

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].id.startsWith('welcome')) return -1;
      return a[1].id.localeCompare(b[1].id);
    },
    showRoots: true
  }
});

addDecorator(withKnobs);

const ThemeContainer = ({ contentDensity, children, setQueryParam }) => {
  useEffect(() => {
    if (contentDensity === ContentDensity.Compact) {
      document.body.classList.add('ui5-content-density-compact');
    } else {
      document.body.classList.remove('ui5-content-density-compact');
    }
  }, [contentDensity, setQueryParam]);

  return children;
};

const withQuery = makeDecorator({
  name: 'withQuery',
  parameterName: 'query',
  wrapper: (getStory, context) => {
    function setQueryParam(queryObj) {
      const iframe = window.parent.document.getElementById('storybook-preview-iframe');
      const [base, search] = iframe.src.split('?');
      const currentQuery = qs.parse(search, { ignoreQueryPrefix: true });
      iframe.src = `${base}?${qs.stringify({ ...currentQuery, ...queryObj })}`;
    }

    let contentDensity;
    try {
      const iframe = window.parent.document.getElementById('storybook-preview-iframe');
      const currentQuery = qs.parse(iframe.src.split('?')[1]);
      contentDensity =
        currentQuery['sap-ui-compactSize'] && currentQuery['sap-ui-compactSize'] !== 'false'
          ? ContentDensity.Compact
          : ContentDensity.Cozy;
    } catch (e) {
      contentDensity = ContentDensity.Compact;
    }

    return (
      <ThemeContainer
        theme={select('Theme', [Themes.sap_fiori_3], Themes.sap_fiori_3)}
        contentDensity={select('ContentDensity', ContentDensity, contentDensity)}
        setQueryParam={setQueryParam}
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
