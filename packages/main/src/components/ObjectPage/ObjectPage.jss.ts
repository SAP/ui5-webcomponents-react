import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';

export const ObjectPageCssVariables = {
  anchorFloat: '--_ui5wcr_ObjectPage_actions_float',
  anchorLeft: '--_ui5wcr_ObjectPage_actions_left',
  anchorRight: '--_ui5wcr_ObjectPage_actions_right',
  tabBarPaddingInline: '--_ui5wcr_ObjectPage_tab_bar_inline_padding'
};

export const styles = {
  objectPage: {
    [DynamicPageCssVariables.headerDisplay]: 'block',
    [ObjectPageCssVariables.tabBarPaddingInline]: '1rem',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_FontSize,
    '& section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'none'
    },
    // explanation why first-child selector is not sufficient here:
    // https://stackoverflow.com/questions/7128406/css-select-the-first-child-from-elements-with-particular-attribute
    '& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'block'
    }
  },
  // each tab has inline padding of 1rem, so it needs to be subtracted from the default responsive padding
  Phone: { [ObjectPageCssVariables.tabBarPaddingInline]: 0 },
  Tablet: { [ObjectPageCssVariables.tabBarPaddingInline]: '1rem' },
  Desktop: { [ObjectPageCssVariables.tabBarPaddingInline]: '1rem' },
  LargeDesktop: { [ObjectPageCssVariables.tabBarPaddingInline]: '2rem' },
  '@global html': {
    [ObjectPageCssVariables.anchorFloat]: 'right',
    [ObjectPageCssVariables.anchorRight]: '1.25rem',
    [ObjectPageCssVariables.anchorLeft]: 'unset'
  },
  '@global [dir="rtl"]': {
    [ObjectPageCssVariables.anchorFloat]: 'left',
    [ObjectPageCssVariables.anchorRight]: 'unset',
    [ObjectPageCssVariables.anchorLeft]: '1.25rem'
  },
  iconTabBarMode: {
    '& section[data-component-name="ObjectPageSection"] > div[role="heading"]': {
      display: 'none'
    }
  },
  headerCollapsed: {
    [DynamicPageCssVariables.headerDisplay]: 'none',
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_SnappedFontSize
  },
  headerContainer: {
    marginBottom: '0.25rem',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    display: 'grid',
    gridAutoColumns: 'min-content calc(100% - 5rem - 2rem)' /*avatar size - padding */,
    '& [data-component-name="ObjectPageHeaderContent"]': {
      gridColumn: 2
    }
  },
  headerHoverStyles: {
    '&[data-not-clickable="true"]': {
      cursor: 'unset'
    },
    '&[data-not-clickable="false"]': {
      backgroundColor: `${ThemingParameters.sapObjectHeader_Hover_Background}`,
      '& [data-component-name="DynamicPageTitle"]': {
        backgroundColor: ThemingParameters.sapObjectHeader_Hover_Background
      }
    }
  },
  header: {
    [DynamicPageCssVariables.headerDisplay]: 'block',
    boxSizing: 'border-box',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    top: 0,
    zIndex: 2,
    '& [data-component-name="DynamicPageTitle"]': {
      gridColumn: 2,
      paddingLeft: 0,
      paddingRight: 0
    },
    cursor: 'pointer'
  },
  headerImage: {
    minWidth: '5rem',
    maxWidth: '5rem',
    maxHeight: '5rem',
    display: 'inline-block',
    marginInlineEnd: '2rem'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  anchorBar: {
    position: 'sticky',
    zIndex: 2
  },
  tabContainer: {
    position: 'sticky',
    zIndex: 1
  },
  tabContainerComponent: {
    '&::part(content)': {
      display: 'none'
    }
  },
  footer: {
    position: 'sticky',
    bottom: '0.5rem',
    margin: '0 0.5rem'
  },
  subSectionPopover: {
    '&::part(content)': {
      padding: 0
    }
  }
};
