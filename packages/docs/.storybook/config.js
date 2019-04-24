import React from 'react';
import { ContentDensity, ThemeProvider, Themes } from '@fiori-for-react/fiori3';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { TableComponent } from './TableComponent';
import { withStyleInfo } from './decorators/withStyleInfo';
import { Fiori4ReactTheme } from './theme';

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
    // name: 'Fiori4React',

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

const themr = makeDecorator({
  name: 'themr',
  parameterName: 'themr',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    return (
      <ThemeProvider
        theme={select('Theme', [Themes.sap_fiori3_light], Themes.sap_fiori3_light)}
        contentDensity={select('ContentDensity', ContentDensity, ContentDensity.Compact)}
        withToastContainer
      >
        {getStory(context)}
      </ThemeProvider>
    );
  }
});

addDecorator(themr);

// Load all Stories
const req = require.context('../../', true, /\.stories\.[jt]sx?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(() => require('../Welcome'), module);
configure(loadStories, module);
