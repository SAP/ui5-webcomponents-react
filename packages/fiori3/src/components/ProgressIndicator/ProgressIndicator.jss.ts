import { ValueState } from '../../lib/ValueState';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { fonts, HSLColor } from '@fiori-for-react/styles';

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

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => {
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
      WebkitTransition: 'flex-basis 2s',
      transition: 'flex-basis 1s',
      justifyContent: 'flex-end',
      display: 'flex',
      alignItems: 'center',
      WebkitAlignItems: 'center',
      background: (props) => parameters[getBackgroundColor(props.state)]
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
      color: (props) => {
        const backgroundColor = parameters[getBackgroundColor(props.state)];
        return HSLColor.of(backgroundColor).contrast(
          parameters.sapUiContentForegroundTextColor,
          parameters.sapUiContentContrastTextColor,
          parameters.sapUiContentContrastTextThreshold
        );
      }
    }
  };
};

export default styles;
