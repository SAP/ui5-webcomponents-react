import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/lib/spacing';

export const DynamicPageCssVariables = {
  anchorFloat: '--_ui5wcr_DynamicPage_actions_float',
  anchorLeft: '--_ui5wcr_DynamicPage_actions_left',
  anchorRight: '--_ui5wcr_DynamicPage_actions_right',
  avatarMargin: '--_ui5wcr_DynamicPage_avatar_margin',
  lastSectionMargin: '--_ui5wcr_DynamicPage_last_section_margin_bottom'
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
    [DynamicPageCssVariables.lastSectionMargin]: 0
  },
  '@global html': {
    [DynamicPageCssVariables.anchorFloat]: 'right',
    [DynamicPageCssVariables.anchorRight]: '1.25rem',
    [DynamicPageCssVariables.anchorLeft]: 'unset',
    [DynamicPageCssVariables.avatarMargin]: '0 1rem 0 0'
  },
  '@global [dir="rtl"]': {
    [DynamicPageCssVariables.anchorFloat]: 'left',
    [DynamicPageCssVariables.anchorRight]: 'unset',
    [DynamicPageCssVariables.anchorLeft]: '1.25rem',
    [DynamicPageCssVariables.avatarMargin]: '0 0 0 1rem'
  },
  headerCollapsed: {
    '& $header': {
      display: 'none',
      borderBottom: 'black'
    }
  },
  // header
  header: {
    ...sapUiResponsiveContentPadding,
    flexShrink: 0,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    translucent: ThemingParameters.sapObjectHeader_Background,
    transparent: 'transparent',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  contentHeader: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    maxHeight: '500px',
    overflow: 'hidden'
  },
  anchorBar: {
    position: 'sticky',
    zIndex: 2,
    '--_ui5_tc_header_box_shadow': 'inset 0px -1px 0 0px rgba(0,0,0,0.15)'
  },
  titleBar: {
    padding: '0.5rem 2rem',
    display: 'block',
    position: 'relative'
  },
  container: {
    flex: '1 1 70%',
    boxSizing: 'border-box'
  },
  title: {
    padding: '0.3125rem 0 0 0',
    position: 'sticky',
    zIndex: 2,
    '--_ui5_tc_header_box_shadow': 'inset 0px -1px 0 0px rgba(0,0,0,0.15)'
  },
  subTitle: {
    verticalAlign: 'baseline',
    padding: '0 0 0.5rem 0.5rem'
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
    right: `var(${DynamicPageCssVariables.anchorRight})`,
    left: `var(${DynamicPageCssVariables.anchorLeft})`,
    display: 'inline-block',
    float: `var(${DynamicPageCssVariables.anchorFloat})`,
    verticalAlign: 'top',
    '& > *': {
      marginLeft: '0.5rem',
      padding: 0
    }
  },
  titleInHeaderContent: {
    '& $subTitle': {
      padding: '0.5rem 0'
    },
    '& $keyInfos': {
      alignSelf: 'unset'
    },
    '& contentHeader': {
      paddingTop: 0,
      '& > *': {
        display: 'flex',
        verticalAlign: 'top',
        '&:not(:first-child)': {
          marginRight: '2rem',
          marginBottom: '1rem'
        }
      }
    }
  },
  headerCustomContent: {
    display: 'inline-block',
    verticalAlign: 'top',
    '& > *': {
      float: 'left',
      marginRight: '2rem',
      marginBottom: '1rem',
      lineHeight: '1.5rem'
    },
    '&:after': {
      clear: 'both'
    }
  },
  headerCustomContentItem: {
    marginLeft: '1rem'
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    padding: '0 3rem 0 2.5rem',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    solid: ThemingParameters.sapBackgroundColor,
    list: ThemingParameters.sapGroup_ContentBackground,
    transparent: 'transparent',
    zIndex: 0
  },
  content: {
    padding: 0,
    paddingTop: '1rem'
  }
};

export default styles;
