import { ThemingParameters } from '@ui5/webcomponents-react-base';

export const styles = {
  '@keyframes scroll': {
    '0%': { backgroundPosition: '-100% 0' },
    '100%': { backgroundPosition: '200% 0' }
  },
  loader: {
    position: 'relative',
    height: '0.25rem',
    width: '100%',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      backgroundColor: ThemingParameters.sapContent_BusyColor,
      opacity: 0.15
    },
    '&$loaderDeterminate': {
      background: `linear-gradient(to right, ${ThemingParameters.sapContent_BusyColor}, ${ThemingParameters.sapContent_BusyColor})`,
      backgroundRepeat: 'repeat-y'
    },
    '&$loaderIndeterminate': {
      background: `linear-gradient(
      to right,
      rgba(8, 84, 160, 0) 0px,
      rgba(8, 84, 160, 1) calc(50% - 2rem),
      ${ThemingParameters.sapContent_BusyColor} calc(50% - 2rem),
      ${ThemingParameters.sapContent_BusyColor} calc(50% + 2rem),
      rgba(8, 84, 160, 1) calc(50% + 2rem),
      rgba(8, 84, 160, 0) 100%
    )`,
      backgroundSize: '40%',
      backgroundRepeat: 'repeat-y',
      animation: '$scroll 1.2s linear infinite'
    }
  },
  loaderDeterminate: {},
  loaderIndeterminate: {}
};
