import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { ResponsiveContainerPadding } from '../../internal/ContainerQueries.js';
import { DynamicPageCssVariables } from '../DynamicPage/utils.js';

export const ObjectPageCssVariables = {
  anchorFloat: '--_ui5wcr_ObjectPage_actions_float',
  anchorLeft: '--_ui5wcr_ObjectPage_actions_left',
  anchorRight: '--_ui5wcr_ObjectPage_actions_right'
};

export const styles = {
  objectPage: {
    [DynamicPageCssVariables.headerDisplay]: 'block',
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_FontSize,
    container: 'objectPage / inline-size',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    '& section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'none'
    },
    // explanation why first-child selector is not sufficient here:
    // https://stackoverflow.com/questions/7128406/css-select-the-first-child-from-elements-with-particular-attribute
    '& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'block'
    }
  },
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
    extend: ResponsiveContainerPadding,
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
    extend: ResponsiveContainerPadding,
    [DynamicPageCssVariables.headerDisplay]: 'block',
    boxSizing: 'border-box',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    top: 0,
    zIndex: 2,
    '& [data-component-name="DynamicPageTitle"]': {
      gridColumn: 2,
      paddingInline: 0
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
    zIndex: 1,
    // each tab has inline padding of 1rem, so it needs to be subtracted from the default responsive padding
    '@container objectPage (max-width: 599px)': {
      '--_ui5wcr_ObjectPage_tab_bar_inline_padding': 0
    },
    '@container objectPage (min-width: 600px) and (max-width: 1023px)': {
      '--_ui5wcr_ObjectPage_tab_bar_inline_padding': '1rem'
    },
    '@container objectPage (min-width: 1024px) and (max-width: 1439px)': {
      '--_ui5wcr_ObjectPage_tab_bar_inline_padding': '1rem'
    },
    '@container objectPage (min-width: 1440px)': {
      '--_ui5wcr_ObjectPage_tab_bar_inline_padding': '2rem'
    }
  },
  tabContainerComponent: {
    '&::part(content)': {
      display: 'none'
    },
    '&::part(tabstrip)': {
      // padding-inline is used here to ensure the same responsive padding behavior as for the rest of the component
      padding: 0,
      paddingInline: 'var(--_ui5wcr_ObjectPage_tab_bar_inline_padding)',
      boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}, 0 0.125rem 0.25rem 0 rgb(0 0 0 / 8%)`
    }
  },
  content: {
    extend: ResponsiveContainerPadding,
    flexGrow: 1,
    position: 'relative'
  },
  footer: {
    position: 'sticky',
    bottom: '0.5rem',
    margin: '0 0.5rem'
  },
  footerSpacer: { height: '1rem', flexShrink: 0 },
  subSectionPopover: {
    '&::part(content)': {
      padding: 0
    }
  },
  titleInHeader: { padding: 0 },
  snappedContent: { gridColumn: '1 / span 2' }
};
