import React from 'react';
import { ContentDensity, ThemeProvider, Themes } from '@ui5/webcomponents-react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { TableComponent } from './TableComponent';
import { withStyleInfo } from './decorators/withStyleInfo';
import { Fiori4ReactTheme } from './theme';
import { document, history, window } from 'global';
import qs from 'qs';

export const propTablesExclude = [ThemeProvider];

addDecorator(
  withInfo({
    inline: true,
    propTablesExclude,
    TableComponent,
    styles: {
      infoBody: {
        background: '#edeff0',
        borderBottom: '2px solid #0a6ed1',
        padding: '10px 40px'
      }
    }
  })
);

addDecorator(withStyleInfo);
addDecorator(withKnobs);

addParameters({
  options: {
    theme: Fiori4ReactTheme,
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display left panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display horizontal panel that displays addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show horizontal addons panel as a vertical panel on the right
     * @type {Boolean}
     */
    panelPosition: 'right',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedAddonPanel: undefined // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
  }
});

class ThemeContainer extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { contentDensity, setQueryParam } = this.props;
    if (contentDensity !== prevProps.contentDensity) {
      setQueryParam({
        'sap-ui-compactSize': contentDensity === ContentDensity.Compact
      });
    }
  }

  render() {
    return this.props.children;
  }
}

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
      contentDensity = ContentDensity.Cozy;
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

// Load all Stories
const req = require.context('../../', true, /\.stories\.[jt]sx?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(() => require('../Welcome'), module);
configure(loadStories, module);
