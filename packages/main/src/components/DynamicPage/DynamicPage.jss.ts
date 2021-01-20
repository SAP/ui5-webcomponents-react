import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const DynamicPageCssVariables = {
  headerDisplay: '--ui5wcr_DynamicPage_header_display'
};

const styles = {
  dynamicPage: {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    [DynamicPageCssVariables.headerDisplay]: 'block'
  },
  headerCollapsed: {
    [DynamicPageCssVariables.headerDisplay]: 'none',
    '& $anchorBar > section[role="navigation"]': {
      top: '-0.025rem'
    }
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
    ...sapUiResponsiveContentPadding,
    paddingTop: '1rem !important',
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
  }
};

export default styles;
