import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export const sideNavigationStyles = {
  sideNavigation: {
    height: '100%',
    borderRight: `0.0625rem solid ${ThemingParameters.sapUiGroupContentBorderColor}`,
    backgroundColor: ThemingParameters.sapUiListBackground,
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
    backgroundColor: ThemingParameters.sapUiListBorderColor
  }
};
