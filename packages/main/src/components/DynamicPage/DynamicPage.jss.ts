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
    zIndex: 2,
    '& > section[role="navigation"]': {
      top: '0.025rem'
    }
  },
  contentContainer: {
    ...sapUiResponsiveContentPadding,
    paddingTop: '1rem !important',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    zIndex: 0
  }
};

export default styles;
