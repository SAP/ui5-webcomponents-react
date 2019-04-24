import { JSSTheme } from '@fiori-for-react/core/types';
// import { rgba } from "polished";

const styles = ({ parameters }: JSSTheme) => ({
  '@global': {
    '@keyframes horizontal': {
      '0%': {
        transform: 'scale(0.3)',
        background: parameters.sapUiContentIconColor
      },
      '40%': {
        transform: 'scale(1)'
        // background: rgba(parameters.sapUiContentIconColor, 0.1),
        // boxShadow: `inset 0px 0px 2px 1px ${rgba(parameters.sapUiContentIconColor, 0.8)}`
      },
      '80%': {
        transform: 'scale(0.3)'
      },
      '100%': {
        transform: 'scale(0.3)'
      }
    },
    '@keyframes fiori4react_busy_indicator_fadeIn': {
      '0%': {
        opacity: 0
      },
      '50%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    }
  },
  // base class with textAlign center
  busyIndicator: {
    textAlign: 'center'
  },
  // using global keyframe fiori4react_busy_indicator_fadeIn to fade in the BusyIndicator
  fadeIn: {
    animation: 'fiori4react_busy_indicator_fadeIn 2s'
  },
  /**
   *   used to style each of the three circles within the BusyIndicator.
   *   Modify width and height in here to change the overall size.
   */
  circle: {
    width: '1rem',
    height: '1rem',
    borderRadius: '100%',
    display: 'inline-block',
    margin: '0',
    position: 'relative',
    animationFillMode: 'both',
    animation: `horizontal 1.4s infinite ease-in-out`,
    boxShadow: `inset 0px 0px 3px 16px ${parameters.sapUiContentIconColor}`,
    '&:first-child': {
      animationDelay: '-0.32s'
    },
    '&:nth-child(2)': {
      animationDelay: '-0.16s'
    }
  }
});

export default styles;
