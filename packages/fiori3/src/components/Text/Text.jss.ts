import { fonts } from '@ui5-webcomponents-react/base';
import { JSSTheme } from '../../interfaces/JSSTheme';

export const TextStyles = ({ parameters }: JSSTheme) => ({
  // Text Style
  text: {
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiBaseText,
    display: 'inline-block',
    boxSizing: 'border-box',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word'
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
});
