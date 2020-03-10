import { create } from '@storybook/theming/create';

const TEXT_COLOR = '#32363A';
const PRIMARY_COLOR = '#0a6ed1';
export const Fiori4ReactTheme = create({
  base: 'light',

  colorPrimary: TEXT_COLOR, //'#000000',
  colorSecondary: '#0a6ed1',

  // UI
  appBg: '#edeff0',
  appContentBg: '#edeff0',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: "'72', Arial, Helvetica, sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: TEXT_COLOR,
  textInverseColor: '#00ff00',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: PRIMARY_COLOR,
  barBg: '#354a5f',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: TEXT_COLOR,
  inputBorderRadius: 4,

  /**
   * name to display in the top left corner
   * @type {String}
   */
  brandTitle: 'UI5 Web Components for React',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  brandUrl: '#'
  // // brandImage: 'https://placehold.it/350x150'
});
