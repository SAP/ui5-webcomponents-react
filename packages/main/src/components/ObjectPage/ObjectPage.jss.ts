import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
    whiteSpace: 'normal',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor
  },
  contentContainer: {
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'relative',
    flexGrow: 1
  },
  outerContentContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  contentScrollContainer: {
    position: 'relative'
  },
  anchorBar: {
    paddingLeft: '2rem',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapObjectHeader_BorderColor}, inset 0 0.0625rem ${ThemingParameters.sapObjectHeader_BorderColor}`,
    display: 'flex',
    height: '2.75rem',
    minHeight: '2.75rem',
    position: 'relative'
  },
  sectionsContainer: {
    '&:before': {
      display: 'table',
      content: '""'
    },
    '& :first-child > div[role="heading"]': {
      display: 'none'
    },
    position: 'relative',
    height: '100%',
    // overflowX: 'hidden',
    // overflowY: 'auto',
    overflow: 'hidden',
    backgroundColor: ThemingParameters.sapBackgroundColor,
    '&:after': {
      clear: 'both',
      display: 'table',
      content: '""'
    }
  },
  fillerDiv: {
    backgroundColor: ThemingParameters.sapBackgroundColor
  },
  // header
  header: {
    flexShrink: 0,
    position: 'relative',
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    '&$stickied': {
      '& $image': {
        opacity: '1',
        height: '3rem',
        width: '3rem',
        margin: '0.25rem 1rem 0.25rem 0'
      }
    }
  },
  contentHeader: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'relative'
  },
  titleBar: {
    padding: '0.5rem 2rem',
    display: 'block',
    position: 'relative'
  },
  container: {
    display: 'inline-block',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    width: '70%',
    boxSizing: 'border-box'
    // paddingTop: '1.5rem'
  },
  title: {
    fontSize: '1.375rem',
    paddingRight: '1rem',
    verticalAlign: 'baseline',
    lineHeight: 'normal',
    display: 'inline-block',
    margin: '0',
    fontWeight: 'normal',
    color: ThemingParameters.sapTextColor
  },
  subTitle: {
    display: 'inline-block',
    wordBreak: 'break-word',
    verticalAlign: 'baseline',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    color: ThemingParameters.sapContent_LabelColor
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
    zIndex: 1,
    right: '1.25rem',
    display: 'inline-block',
    float: 'right',
    verticalAlign: 'top',
    '& > *': {
      marginLeft: '0.5rem',
      padding: 0
    }
  },
  stickied: {},
  headerContent: {
    //paddingTop: '1.5rem',
    paddingBottom: '0.25rem',
    transition: 'max-height 0.5s',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem',
    position: 'relative'
  },
  titleInHeaderContent: {
    '& $headerContent': {
      paddingTop: 0,
      '& > *': {
        display: 'flex',
        verticalAlign: 'top',
        '&:not(:first-child)': {
          marginRight: '2rem',
          marginBottom: '1rem'
        }
      }
    },
    '& $actions': {
      // paddingTop: 0
    }
  },
  alwaysVisibleHeader: {
    '& $headerContent': {
      paddingLeft: 0
    },
    '& $contentHeader': {
      marginTop: '0.5rem'
    },
    '& $titleBar': {
      paddingBottom: 0
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
    flexDirection: 'row'
  },
  avatar: {
    marginRight: '1rem'
  },
  toggleHeaderButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.25rem',
    '--_ui5_button_base_height': '1.25rem',
    top: `-0.625rem`,
    left: 'calc(50% - 1rem)'
  }
};

export default styles;
