export const styles = {
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  spinnerSmall: {},
  spinnerMedium: {},
  spinnerLarge: {},
  spinner: {
    '&$spinnerSmall, $spinnerSmall:after': {
      borderRadius: '50%',
      width: '24px',
      height: '24px'
    },
    '&$spinnerMedium, $spinnerMedium:after': {
      borderRadius: '50%',
      width: '40px',
      height: '40px'
    },
    '&$spinnerLarge, $spinnerLarge:after': {
      borderRadius: '50%',
      width: '64px',
      height: '64px'
    },
    margin: 'auto',
    fontSize: '10px',
    position: 'relative',
    textIndent: '-9999em',
    borderTop: '4px solid rgba(54, 64, 81, 0.16)',
    borderRight: '4px solid rgba(54, 64, 81, 0.16)',
    borderBottom: '4px solid rgba(54, 64, 81, 0.16)',
    borderLeft: '4px solid rgba(54, 64, 81, 1)',
    transform: 'translateZ(0)',
    animation: '$spin .8s infinite linear'
  }
};
