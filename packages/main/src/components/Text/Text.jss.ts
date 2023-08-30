import { ThemingParameters } from '@ui5/webcomponents-react-base';

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
    maxWidth: '100%',
    '&::selection': {
      background: ThemingParameters.sapSelectedColor,
      color: ThemingParameters.sapContent_ContrastTextColor
    }
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
  },
  maxLines: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 'var(--_ui5wcr_maxLines)'
  }
};
