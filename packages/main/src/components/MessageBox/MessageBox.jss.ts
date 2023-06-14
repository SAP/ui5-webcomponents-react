import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';

const style = {
  messageBox: {
    '&[data-type="Confirm"]': {
      '&::part(header)': {
        boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapNeutralBorderColor}, ${ThemingParameters.sapContent_HeaderShadow}`
      },
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
      }
    }
  },
  header: {
    display: 'flex',
    height: CssSizeVariables.ui5WcrBarHeight,
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderBottom: `1px solid var(--messageBoxBorderColor)`,
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: '1rem',
    '& ui5-icon:first-child': {
      width: '1rem',
      height: '1rem'
    },
    '& [ui5-title]': {
      fontSize: '1rem'
    }
  },
  spacer: { width: '0.5rem' },
  confirmIcon: { color: ThemingParameters.sapNeutralColor },
  footer: {
    height: CssSizeVariables.ui5WcrBarHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > *': {
      margin: '0 0.25rem'
    },
    '& > ui5-button': {
      display: 'flex',
      minWidth: '4rem'
    }
  }
};

export default style;
