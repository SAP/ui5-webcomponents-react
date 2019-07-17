export const LoaderStyles = {
  '@keyframes load': {
    from: { left: '-256px' },
    to: { left: '100%' }
  },
  loader: {
    height: '4px',
    width: '100%',
    position: 'absolute',
    top: 0,
    fontSize: '10px',
    textIndent: '-9999em',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    '&:before': {
      display: 'block',
      position: 'absolute',
      content: '""',
      left: '-256px',
      width: '256px',
      height: '4px',
      animation: '$load 1.5s linear infinite'
    }
  },
  loaderLight: {
    '&:before': {
      background:
        'linear-gradient(to right, rgba(54, 64, 81, 0) 0%,rgba(54, 64, 81, 1) 33%,rgba(54, 64, 81, 1) 66%,rgba(54, 64, 81, 0) 100%)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00364051', endColorstr='#00364051',GradientType=1 )"
    }
  },
  loaderDark: {
    '&:before': {
      background:
        'linear-gradient(to right, rgba(255, 179, 0, 0) 0%,rgba(255, 179, 0, 1) 33%,rgba(255, 179, 0, 1) 66%,rgba(255, 179, 0, 0) 100%)',
      filter:
        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00FFB300', endColorstr='#00FFB300',GradientType=1 )"
    }
  }
};
