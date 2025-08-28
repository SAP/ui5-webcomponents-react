// with sb 9.1.2 the explicit React import is required - not sure if this is a bug
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { addons } from 'storybook/manager-api';
import { Badge } from './components/Badge.js';
import { Fiori4ReactTheme } from './theme.js';

const customTags = new Set(['package:@ui5/webcomponents-react-charts', 'custom']);

addons.setConfig({
  theme: Fiori4ReactTheme,
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {number}
   */
  navSize: 280,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: true,
  /**
   * The size of the addon panel when in the bottom position
   * @type {number}
   */
  bottomPanelHeight: 300,
  /**
   * The size of the addon panel when in the right position
   * @type {number}
   */
  rightPanelWidth: 300,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {string}
   */
  panelPosition: 'right',
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: false,

  sidebar: {
    showRoots: true,
    filters: {
      patterns: (item) => {
        return !item.tags.includes('excludeFromSidebar');
      },
    },
    renderLabel: (item) => {
      const tags = item.tags ?? [];
      const isCustom = tags.some((tag) => customTags.has(tag));
      const isExperimental = tags.includes('experimental');
      const isDeprecated = tags.includes('deprecated');

      if (item.type !== 'component' && item.type !== 'docs') {
        return item.name;
      }

      if (isDeprecated) {
        return (
          <>
            {item.name}
            <Badge type="deprecated" />
          </>
        );
      }

      return (
        <>
          {item.name}
          {isCustom && <Badge type="custom" />}
          {isExperimental && <Badge type="experimental" />}
        </>
      );
    },
  },
  toolbar: {
    'storybook/viewport': { hidden: true },
  },
});
