import { JSSTheme } from '../../interfaces/JSSTheme';

export const sideNavigationStyles = ({ parameters }: JSSTheme) => ({
  sideNavigation: {
    height: '1000px',
    borderRight: `0.0625rem solid ${parameters.sapUiGroupContentBorderColor}`,
    backgroundColor: parameters.sapUiListBackground,
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 500ms'
  },

  expanded: {
    width: '15rem'
  },

  condensed: {
    width: '2.75rem',
    '& $footerItemsSeparator': {
      marginLeft: '0.5rem',
      marginRight: '0.5rem'
    }
  },

  collapsed: {
    width: '15rem',
    marginLeft: '-15.0625rem'
  },

  footerItemsSeparator: {
    margin: '0.25rem 0.875rem',
    height: '0.125rem',
    backgroundColor: parameters.sapUiListBorderColor
  }
});
