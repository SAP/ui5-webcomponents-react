import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

const styles = ({ contentDensity, parameters }: JSSTheme) => ({
  segmentedButtonItem: {
    fontFamily: parameters.sapUiFontFamily,
    listStyle: 'none',
    overflow: 'hidden',
    WebkitTapHighlightColor: 'rgba(255, 255, 255, 0)',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    verticalAlign: 'text-bottom',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontSize: '0.875rem',
    '&:focus': {
      outline: `1px dotted ${parameters.sapUiContentFocusColor}`
    },
    height: contentDensity === ContentDensity.Compact ? '1.625rem' : '2.25rem',
    lineHeight: contentDensity === ContentDensity.Compact ? '1.5rem' : '2.25rem',
    textShadow: 'none',
    '&:not($iconOnly)': { paddingLeft: '0.625rem', paddingRight: '0.625rem', textOverflow: 'ellipsis' },
    '&:first-child': {
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem'
    },
    '&:last-child': {
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderRightColor: parameters.sapUiSegmentedButtonBorderColor
    },
    color: parameters.sapUiSegmentedButtonTextColor,
    border: `1px solid ${parameters.sapUiSegmentedButtonBorderColor}`,
    borderRightColor: 'transparent',
    backgroundColor: parameters.sapUiSegmentedButtonBackground
  },
  selected: {
    background: parameters.sapUiSegmentedButtonSelectedBackground,
    color: parameters.sapUiSegmentedButtonSelectedTextColor,
    borderColor: parameters.sapUiSegmentedButtonSelectedHoverBorderColor,
    '--sapUiContentNonInteractiveIconColor': parameters.sapUiContentContrastIconColor,
    '$:active': {
      background: parameters.sapUiButtonActiveBackground,
      color: parameters.sapUiButtonActiveTextColor
    }
  },
  focusableItem: {
    '&:not($selected):hover': {
      background: parameters.sapUiSegmentedButtonHoverBackground
    }
  },
  disabled: { textShadow: 'none', cursor: 'default', opacity: '0.4' },
  iconOnly: { paddingLeft: '0.625rem', paddingRight: '0.625rem' },
  icon: {
    fontSize: '1rem',
    // width: contentDensity === ContentDensity.Compact ? '1.3rem' : '2.375rem',
    // height: contentDensity === ContentDensity.Compact ? '1.3rem' : '100%',
    // verticalAlign: contentDensity === ContentDensity.Compact ? 'top' : 'middle',
    textAlign: 'center',
    alignContent: 'center',
    display: 'inline-block',
    '&:focus': {
      outline: 'none'
    },
    '& >*': {
      verticalAlign: 'bottom'
    }
  },
  withText: {
    marginRight: '0.5rem'
  }
});

export default styles;
