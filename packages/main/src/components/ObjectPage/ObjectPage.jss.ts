import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const ObjectPageCssVariables = {
  anchorFloat: '--_ui5wcr_ObjectPage_actions_float',
  anchorLeft: '--_ui5wcr_ObjectPage_actions_left',
  anchorRight: '--_ui5wcr_ObjectPage_actions_right',
  avatarMargin: '--_ui5wcr_ObjectPage_avatar_margin',
  lastSectionMargin: '--_ui5wcr_ObjectPage_last_section_margin_bottom'
};

const styles = {
  objectPage: {
    width: '100%',
    height: '100%',
    maxHeight: '100vh',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    overflowX: 'hidden',
    overflowY: 'auto',
    [ObjectPageCssVariables.lastSectionMargin]: 0,
    '& section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'none'
    },
    // explanation why first-child selector is not sufficient here:
    // https://stackoverflow.com/questions/7128406/css-select-the-first-child-from-elements-with-particular-attribute
    '& section[id*="ObjectPageSection-"] ~ section[id*="ObjectPageSection-"] > div[role="heading"]': {
      display: 'block'
    },
    '& section[data-component-name="ObjectPageSection"]:last-child': {
      marginBottom: `var(${ObjectPageCssVariables.lastSectionMargin})`
    }
  },
  '@global html': {
    [ObjectPageCssVariables.anchorFloat]: 'right',
    [ObjectPageCssVariables.anchorRight]: '1.25rem',
    [ObjectPageCssVariables.anchorLeft]: 'unset',
    [ObjectPageCssVariables.avatarMargin]: '0 1rem 0 0'
  },
  '@global [dir="rtl"]': {
    [ObjectPageCssVariables.anchorFloat]: 'left',
    [ObjectPageCssVariables.anchorRight]: 'unset',
    [ObjectPageCssVariables.anchorLeft]: '1.25rem',
    [ObjectPageCssVariables.avatarMargin]: '0 0 0 1rem'
  },
  iconTabBarMode: {
    '& section[data-component-name="ObjectPageSection"] > div[role="heading"]': {
      display: 'none'
    }
  },
  noHeader: {
    '& $header': {
      display: 'none'
    },
    '& $contentHeader': {
      display: 'none'
    }
  },
  headerCollapsed: {
    '& $contentHeader': {
      display: 'none'
    }
  },
  // header
  header: {
    flexShrink: 0,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    top: 0,
    zIndex: 2
  },
  contentHeader: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    paddingBottom: '0.25rem',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem'
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
    padding: '0.3125rem 0 0 0'
  },
  subTitle: {
    verticalAlign: 'baseline',
    padding: '0 0 0.5rem 0.5rem'
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
    zIndex: 1,
    right: `var(${ObjectPageCssVariables.anchorRight})`,
    left: `var(${ObjectPageCssVariables.anchorLeft})`,
    display: 'inline-block',
    float: `var(${ObjectPageCssVariables.anchorFloat})`,
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

  headerImage: {
    minWidth: '5rem',
    maxWidth: '5rem',
    maxHeight: '5rem',
    display: 'inline-block',
    marginRight: '2rem',
    marginBottom: '1rem'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  keyInfos: {
    '& > *': {
      marginLeft: '1rem'
    },
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  avatar: {
    margin: `var(${ObjectPageCssVariables.avatarMargin})`
  }
};

export default styles;
