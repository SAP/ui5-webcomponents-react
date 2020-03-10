import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

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
    color: ThemingParameters.sapUiContentLabelColor,
    fontSize: '1rem',
    '&[data-type="Error"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiErrorBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiErrorBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiNegativeElement
      }
    },
    '&[data-type="Warning"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiWarningBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiWarningBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiCriticalElement
      }
    },
    '&[data-type="Success"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiSuccessBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiSuccessBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiPositiveElement
      }
    },
    '&[data-type="Confirm"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiNeutralBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiNeutralBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiNeutralElement
      }
    },
    '&[data-type="Information"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiNeutralBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiNeutralBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiNeutralElement
      }
    },
    '&[data-type="Highlight"]': {
      '--sapUiPageFooterBorderColor': ThemingParameters.sapUiInformationBorder,
      '--messageBoxBorderColor': ThemingParameters.sapUiInformationBorder,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiInformativeElement
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
