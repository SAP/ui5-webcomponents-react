import { addons } from '@storybook/addons';
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
