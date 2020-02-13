import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

export const styles = ({ contentDensity, parameters }: JSSTheme) => ({
  outerContainer: {
    height: contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottom: `solid 0.0625rem ${parameters.sapUiGroupTitleBorderColor}`,
    //todo hover color
    '&:hover': { background: 'yellow' }
  },
  active: {
    '&:active': {
      background: `${parameters.sapUiActive} !important`
    }
  },
  activeInfo: {
    '&:active': {
      background: `${parameters.sapUiInfobarActiveBackground} !important`
    }
  },
  clear: {
    borderBottom: 'none'
  },
  info: {
    //todo not active background color: darken(@sapUiBaseColor, 10);
    background: parameters.sapUiInfobarBackground,
    '&:hover': {
      background: parameters.sapUiInfobarHoverBackground
    }
  },
  solid: {
    background: parameters.sapUiBaseBG,
    '&:hover': {
      //todo hover color contrast(@sapUiBaseBG, darken(@sapUiBaseBG, 3), lighten(@sapUiBaseBG, 3));
      background: 'lightblue'
    }
  },
  transparent: {
    background: parameters.sapUiToolbarBackground,
    '&:hover': {
      //todo hover color contrast(@sapUiToolbarBackground, darken(@sapUiToolbarBackground, 3), lighten(@sapUiToolbarBackground, 3));
      background: 'lightgrey'
    },
    '&:active': {
      background: parameters.sapUiActive
    }
  },
  toolbar: {
    padding: '0.5rem',
    '& >:first-child': {
      margin: '0 0.25rem 0 0'
    },
    '& >:last-child': {
      margin: '0 0 0 0.25rem'
    },
    '& > *:not(first-child):not(last-child)': {
      margin: '0 0.25rem'
    },
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  overflowButtonContainer: {
    marginRight: '0.5rem'
  },
  popoverContent: {
    maxWidth: '20rem',
    padding: contentDensity === ContentDensity.Compact ? '0.1875rem 0.375rem' : '0.25rem 0.5rem',
    display: 'flex',
    flexDirection: 'column'
  }
});
