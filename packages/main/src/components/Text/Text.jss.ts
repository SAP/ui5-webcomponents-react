import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const TextStyles = {
  // Text Style
  text: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTextColor,
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
