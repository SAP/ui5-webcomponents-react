import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export const TextStyles = {
  // Text Style
  text: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapUiBaseText,
    display: 'inline-block',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    maxWidth: '100%'
  },
  renderWhitespace: {
    whiteSpace: 'pre-wrap'
  },
  noWrap: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
    overflow: 'hidden',
    '&$renderWhitespace': {
      whiteSpace: 'pre'
    }
  }
};
