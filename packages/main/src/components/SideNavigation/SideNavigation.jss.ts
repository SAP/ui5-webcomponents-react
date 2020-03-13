import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const sideNavigationStyles = {
  sideNavigation: {
    height: '100%',
    borderRight: `0.0625rem solid ${ThemingParameters.sapGroup_ContentBorderColor}`,
    backgroundColor: ThemingParameters.sapList_Background,
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 500ms'
  },

  expanded: {
    width: '15rem'
  },

  condensed: {
    width: '3rem',
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
    backgroundColor: ThemingParameters.sapList_BorderColor
  }
};
