import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => {
  return {
    progressBarRemaining: {
      height: '100%',
      flexGrow: '1',
      minWidth: '0',
      display: 'flex',
      alignItems: 'center'
    },
    progressBarTextRight: {
      marginLeft: '0.375rem'
    },
    progressBarTextLeft: {
      marginRight: '0.375rem'
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      WebkitFlexDirection: 'row',
      boxSizing: 'border-box',
      outline: 'none',
      background: parameters.sapUiFieldBackground,
      width: '100%',
      height: CssSizeVariables.sapWcrProgressIndicatorHeight,
      minWidth: '4rem',
      minHeight: '1rem',
      padding: '0',
      margin: CssSizeVariables.sapWcrProgressIndicatorMargin,
      border: `1px solid ${parameters.sapUiFieldBorderColor}`,
      borderRadius: '0.5rem',
      overflow: 'hidden'
    },
    progressbar: {
      transition: 'flex-basis 1s',
      justifyContent: 'flex-end',
      display: 'flex',
      alignItems: 'center'
    },
    progressBarText: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: parameters.sapUiFontFamily,
      fontSize: parameters.sapMFontSmallSize,
      fontWeight: 'normal'
    },
    progressBarTextColorLow: {
      color: parameters.sapUiBaseText
    },
    progressBarTextColorHigh: {
      color: parameters.sapUiContentContrastTextColor
    },
    stateNone: {
      backgroundColor: parameters.sapUiNeutralElement
    },
    stateSuccess: {
      backgroundColor: parameters.sapUiPositiveElement
    },
    stateWarning: {
      backgroundColor: parameters.sapUiCriticalElement
    },
    stateError: {
      backgroundColor: parameters.sapUiNegativeElement
    },
    stateInformation: {
      backgroundColor: parameters.sapUiInformativeElement
    }
  };
};

export default styles;
