import { JSSTheme } from '../../interfaces/JSSTheme';

//todo use theme colors when available
export const styles = ({ parameters }: JSSTheme) => ({
  '@keyframes scroll': {
    '0%': { backgroundPosition: '-100% 0' },
    '100%': { backgroundPosition: '200% 0' }
  },
  loader: {
    height: '0.25rem',
    width: '100%',
    '&$loaderDeterminate': {
      background: `linear-gradient(to right, ${parameters.sapUiContentIconColor}, ${parameters.sapUiContentIconColor})`,
      backgroundColor: 'rgba(8, 84, 160, 0.15)',
      backgroundRepeat: 'repeat-y'
    },
    '&$loaderIndeterminate': {
      background: `linear-gradient(
      to right,
      rgba(8, 84, 160, 0) 0px,
      rgba(8, 84, 160, 1) calc(50% - 2rem),
      ${parameters.sapUiContentIconColor} calc(50% - 2rem),
      ${parameters.sapUiContentIconColor} calc(50% + 2rem),
      rgba(8, 84, 160, 1) calc(50% + 2rem),
      rgba(8, 84, 160, 0) 100%
    )`,
      backgroundColor: 'rgba(8, 84, 160, 0.15)',
      backgroundSize: '40%',
      backgroundRepeat: 'repeat-y',
      animation: '$scroll 1.2s linear infinite'
    }
  },
  loaderDeterminate: {},
  loaderIndeterminate: {}
});
