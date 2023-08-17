import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { ResponsiveContainerPadding } from '../../internal/ContainerQueries.js';

export const DynamicPageCssVariables = {
  headerDisplay: '--_ui5wcr_DynamicPage_header_display',
  titleFontSize: '--_ui5wcr_DynamicPage_title_fontsize'
};

export const styles = {
  dynamicPage: {
    container: 'DynamicPage / inline-size',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    [DynamicPageCssVariables.headerDisplay]: 'block',
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_FontSize
  },
  headerCollapsed: {
    [DynamicPageCssVariables.headerDisplay]: 'none',
    [DynamicPageCssVariables.titleFontSize]: ThemingParameters.sapObjectHeader_Title_SnappedFontSize,
    '& $anchorBar > section[role="navigation"]': {
      top: '-0.025rem'
    }
  },
  header: {
    extend: ResponsiveContainerPadding
  },
  title: {
    extend: ResponsiveContainerPadding
  },
  anchorBar: {
    position: 'sticky',
    boxShadow: ThemingParameters.sapContent_HeaderShadow,
    height: '1px',
    zIndex: 2,
    '& > section[role="navigation"]': {
      top: 0
    }
  },
  contentContainer: {
    extend: ResponsiveContainerPadding,
    paddingBlockStart: '1rem',
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    fontFamily: ThemingParameters.sapFontFamily,
    zIndex: 0
  },
  backgroundStandard: {
    background: ThemingParameters.sapBackgroundColor
  },
  backgroundSolid: {
    background: ThemingParameters.sapBackgroundColor
  },
  backgroundList: {
    background: ThemingParameters.sapGroup_ContentBackground
  },
  backgroundTransparent: {
    background: 'transparent'
  },
  footer: {
    bottom: '0.5rem',
    margin: '0 0.5rem',
    left: 0,
    right: 0
  }
};
