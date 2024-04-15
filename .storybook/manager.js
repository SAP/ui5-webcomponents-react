import { addons } from '@storybook/manager-api';
import { Fiori4ReactTheme } from './theme';

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
  navSize: 240,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
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
      }
    }
  }
});
