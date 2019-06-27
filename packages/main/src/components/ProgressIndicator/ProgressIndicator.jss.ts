import { fonts, HSLColor } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ValueState } from '../../lib/ValueState';

function getBackgroundColor(state) {
  switch (state) {
    case ValueState.Success:
      return 'sapUiPositiveElement';
    case ValueState.Warning:
      return 'sapUiCriticalElement';
    case ValueState.Error:
      return 'sapUiNegativeElement';
    default:
      return 'sapUiNeutralElement';
  }
}

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
    invisible: {
      display: 'none !important'
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      WebkitFlexDirection: 'row',
      boxSizing: 'border-box',
      outline: 'none',
      background: parameters.sapUiFieldBackground,
      width: '100%',
      height: '1rem',
      minWidth: '4rem',
      minHeight: '1rem',
      padding: '0',
      margin: '0.5rem 0',
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
      fontFamily: fonts.sapUiFontFamily,
      fontSize: fonts.sapMFontSmallSize,
      fontWeight: 'normal'
    },
    progressBarTextColorLow: {
      color: parameters.sapUiBaseText
    },
    progressBarTextColorHigh: {
      // color: (props) => {
      //   const backgroundColor = parameters[getBackgroundColor(props.state)];
      //   return HSLColor.of(backgroundColor).contrast(
      //     parameters.sapUiContentForegroundTextColor,
      //     parameters.sapUiBaseText,
      //     (parameters.sapUiContentContrastTextThreshold as any) as number
      //   );
      // }
      color: parameters.sapUiContentContrastTextColor
    },
    [`state${ValueState.None}`]: {
      backgroundColor: parameters.sapUiNeutralElement
    },
    [`state${ValueState.Success}`]: {
      backgroundColor: parameters.sapUiPositiveElement
    },
    [`state${ValueState.Warning}`]: {
      backgroundColor: parameters.sapUiCriticalElement
    },
    [`state${ValueState.Error}`]: {
      backgroundColor: parameters.sapUiNegativeElement
    },
    [`state${ValueState.Information}`]: {
      backgroundColor: parameters.sapUiInformativeElement
    }
  };
};

export default styles;
