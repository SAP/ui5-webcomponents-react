import { create } from '@storybook/theming';

const TEXT_COLOR = '#32363A';
const PRIMARY_COLOR = '#0a6ed1';
export const Fiori4ReactTheme = create({
  base: 'light',

  colorPrimary: TEXT_COLOR, //'#000000',
  colorSecondary: PRIMARY_COLOR,

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
  brandUrl: 'https://sap.github.io/ui5-webcomponents-react',
  brandImage: 'https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png'
});
