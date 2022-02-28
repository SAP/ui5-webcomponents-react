import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';

const style = {
  messageBox: {
    '--sapContent_Shadow0': 'none',
    '&::part(header)': {
      boxShadow: `inset 0 -0.0625rem var(--messageBoxBorderColor), ${ThemingParameters.sapContent_HeaderShadow}`
    },
    '&[data-type="Error"]': {
      '--messageBoxBorderColor': ThemingParameters.sapErrorBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNegativeElementColor
      }
    },
    '&[data-type="Warning"]': {
      '--messageBoxBorderColor': ThemingParameters.sapWarningBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapCriticalElementColor
      }
    },
    '&[data-type="Success"]': {
      '--messageBoxBorderColor': ThemingParameters.sapSuccessBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapPositiveElementColor
      }
    },
    '&[data-type="Confirm"]': {
      '--messageBoxBorderColor': ThemingParameters.sapNeutralBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
      }
    },
    '&[data-type="Information"]': {
      '--messageBoxBorderColor': ThemingParameters.sapInformationBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapInformativeElementColor
      }
    },
    '&[data-type="Highlight"]': {
      '--messageBoxBorderColor': ThemingParameters.sapInformationBorderColor,
      '& $header': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapInformativeElementColor
      }
    }
  },
  header: {
    display: 'flex',
    height: CssSizeVariables.sapWcrBarHeight,
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
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
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
