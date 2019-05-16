import { fonts, HSLColor } from '@fiori-for-react/styles';
import { ContentDensity } from '../../lib/ContentDensity';
import { JSSTheme } from '../../interfaces/JSSTheme';

const darken = (amount, color) => HSLColor.of(color).darken(amount * 100).hsl;

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  token: {
    display: 'inline-block',
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontSize: fonts.sapMFontMediumSize,
    paddingLeft: contentDensity === ContentDensity.Compact ? '0.25rem' : '0.3125rem',
    // paddingTop: '0.25rem',
    // paddingBottom: '0.25rem',
    height: contentDensity === ContentDensity.Compact ? '1.25rem' : '1.625rem',
    background: darken(0.02, parameters.sapUiButtonBackground),
    border: `1px solid ${darken(0.24, parameters.sapUiButtonBackground)}`,
    borderRadius: '0.25rem',
    color: parameters.sapUiButtonTextColor,
    paddingBottom: '0.1rem',
    '&$readOnly': {
      padding: contentDensity === ContentDensity.Compact ? '0.1rem 0.25rem' : '0rem 0.375rem',
      color: parameters.sapUiContentLabelColor,
      '&$selected': {
        color: parameters.sapUiToggleButtonPressedTextColor
      }
    },
    '&:hover': {
      background: darken(0.02, parameters.sapUiButtonHoverBackground),
      border: `1px solid ${darken(0.22, parameters.sapUiButtonHoverBackground)}`,
      '&$selected': {
        background: parameters.sapUiToggleButtonPressedHoverBackground,
        border: `1px solid ${parameters.sapUiToggleButtonPressedHoverBorderColor}`
      }
    },
    '&:focus': {
      position: 'relative',
      outline: 'none',
      '& $tokenText:before': {
        position: 'absolute',
        top: '2px',
        left: '2px',
        right: '2px',
        bottom: '2px',
        content: '""',
        pointerEvents: 'none'
      }
    }
  },
  readOnly: {
    '& $tokenText': {
      maxWidth: '100%'
    }
  },
  tokenText: {
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    userSelect: 'none',
    pointerEvents: 'none',
    lineHeight: '1.5rem',
    fontFamily: fonts.sapUiFontFamily,
    // maxWidth: `calc(100% - ${TokenSize}px)`,
    boxSizing: 'border-box'
  },
  compact: {
    '& $tokenText': {
      // maxWidth: `calc(100% - ${TokenCompactSize}px)`,
      lineHeight: '1.125rem'
    },
    '&$token': {
      fontSize: fonts.sapMFontSmallSize,
      paddingLeft: '0.25rem',
      height: '1.25rem',
      '&$readOnly': {
        padding: '0 0.25rem'
      }
    },
    '& $tokenIcon': {
      padding: '0 0.25rem',
      lineHeight: '1.125rem'
    },
    '&$withinTokenizer': {
      '&$token': {
        height: '1.25rem',
        marginTop: '0.125rem',
        marginBottom: '0.125rem',
        marginRight: '0.25rem',
        maxWidth: 'calc(100% - 0.25rem)'
      }
    }
  },
  tokenIcon: {
    verticalAlign: 'top',
    display: 'inline-block',
    lineHeight: contentDensity === ContentDensity.Compact ? '1.25rem' : '1.625rem',
    width: contentDensity === ContentDensity.Compact ? '1.25rem' : '1.75rem',
    height: contentDensity === ContentDensity.Compact ? '1.25rem' : '1.625rem',
    padding: '0 0.5rem',
    fontSize: fonts.sapMFontLargeSize,
    boxSizing: 'border-box'
  },
  selected: {
    color: parameters.sapUiToggleButtonPressedTextColor,
    background: parameters.sapUiToggleButtonPressedBackground,
    border: `1px solid ${parameters.sapUiToggleButtonPressedBorderColor}`,
    borderRadius: '0.125rem'
  },
  withinTokenizer: {
    '&$token': {
      marginTop: '0.375rem',
      marginBottom: '0.125rem',
      marginRight: '0.375rem',
      lineHeight: 'normal',
      maxWidth: 'calc(100% - 0.375rem)'
    },
    '&$tokenizerReadOnly': {
      '&$token': {
        padding: '0 0.375rem'
      },
      '& tokenIcon': {
        display: 'none'
      }
    }
  },
  tokenizerReadOnly: {}
});

export default styles;
