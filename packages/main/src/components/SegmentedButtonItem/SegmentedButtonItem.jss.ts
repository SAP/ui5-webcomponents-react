import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  segmentedButtonItem: {
    fontFamily: ThemingParameters.sapFontFamily,
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
      outline: `1px dotted ${ThemingParameters.sapContent_FocusColor}`
    },
    height: CssSizeVariables.sapWcrSegmentedButtonItemHeight,
    lineHeight: CssSizeVariables.sapWcrSegmentedButtonItemLineHeight,
    textShadow: 'none',
    '&:not($iconOnly)': { paddingLeft: '0.625rem', paddingRight: '0.625rem', textOverflow: 'ellipsis' },
    '&:first-child': {
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem'
    },
    '&:last-child': {
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderRightColor: ThemingParameters.sapButton_BorderColor
    },
    color: ThemingParameters.sapButton_TextColor,
    border: `1px solid ${ThemingParameters.sapButton_BorderColor}`,
    borderRightColor: 'transparent',
    backgroundColor: ThemingParameters.sapButton_Background
  },
  selected: {
    background: ThemingParameters.sapButton_Selected_Background,
    color: ThemingParameters.sapButton_Selected_TextColor,
    borderColor: ThemingParameters.sapButton_Selected_BorderColor,
    // TODO: replace with ThemingParameters.sapContent_ContrastIconColor after ui5-webcomponents upgrade to rc.6
    '--sapContent_NonInteractiveIconColor': 'var(--sapUiContentContrastIconColor)',
    '$:active': {
      background: ThemingParameters.sapButton_Active_Background,
      color: ThemingParameters.sapButton_Active_TextColor
    }
  },
  focusableItem: {
    '&:not($selected):hover': {
      background: ThemingParameters.sapButton_Hover_Background
    }
  },
  disabled: { textShadow: 'none', cursor: 'default', opacity: '0.4' },
  iconOnly: { paddingLeft: '0.625rem', paddingRight: '0.625rem' },
  icon: {
    fontSize: '1rem',
    textAlign: 'center',
    alignContent: 'center',
    display: 'inline-block',
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      verticalAlign: 'middle'
    }
  },
  withText: {
    marginRight: '0.5rem'
  }
};

export default styles;
