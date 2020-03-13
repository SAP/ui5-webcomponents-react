import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const style = {
  header: {
    display: 'flex',
    height: CssSizeVariables.sapWcrBarHeight,
    lineHeight: CssSizeVariables.sapWcrBarHeight,
    textAlign: 'center',
    width: 'auto',
    alignItems: 'center',
    '& $icon': {
      '& >*': {
        verticalAlign: 'middle'
      }
    },
    // justifyContent: 'center',
    padding: '0.25rem 1rem',
    boxSizing: 'border-box',
    borderBottom: `1px solid var(--messageBoxBorderColor)`,
    color: ThemingParameters.sapContent_LabelColor,
    fontSize: '1rem',
    '&[data-type="Error"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapErrorBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapErrorBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNegativeElementColor
      }
    },
    '&[data-type="Warning"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapWarningBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapWarningBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapCriticalElementColor
      }
    },
    '&[data-type="Success"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapSuccessBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapSuccessBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapPositiveElementColor
      }
    },
    '&[data-type="Confirm"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapNeutralBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
      }
    },
    '&[data-type="Information"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapNeutralBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapNeutralBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapNeutralElementColor
      }
    },
    '&[data-type="Highlight"]': {
      '--sapPageFooter_BorderColor': ThemingParameters.sapInformationBorderColor,
      '--messageBoxBorderColor': ThemingParameters.sapInformationBorderColor,
      '& $icon': {
        '--sapContent_NonInteractiveIconColor': ThemingParameters.sapInformativeElementColor
      }
    }
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    width: '1rem'
  },
  content: {
    padding: '1rem'
  },
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 0.5rem',
    '& >*:not(:last-child)': {
      marginRight: '0.5rem'
    },
    '& > ui5-button': {
      display: 'flex'
    }
  }
};

export default style;
