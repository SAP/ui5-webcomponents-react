import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const style = {
  messageBox: {
    '--sapContent_Shadow0': 'none'
  },
  header: {
    display: 'flex',
    height: CssSizeVariables.sapWcrBarHeight,
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    padding: '0.25rem 1rem',
    boxSizing: 'border-box',
    borderBottom: `1px solid var(--messageBoxBorderColor)`,
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: '1rem',
    '& ui5-icon:first-child': {
      padding: '0 0.25rem',
      width: '1rem',
      height: '1rem'
    },
    '&[data-type="Error"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapErrorBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapErrorBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNegativeElementColor
    },
    '&[data-type="Warning"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapWarningBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapWarningBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapCriticalElementColor
    },
    '&[data-type="Success"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapSuccessBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapSuccessBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapPositiveElementColor
    },
    '&[data-type="Confirm"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapNeutralBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
    },
    '&[data-type="Information"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapNeutralBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
    },
    '&[data-type="Highlight"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapInformationBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapInformationBorderColor,
      '--sapContent_NonInteractiveIconColor': ThemingParameters.sapInformativeElementColor
    }
  },
  content: {
    padding: '1rem'
  },
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 0.5rem',
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
