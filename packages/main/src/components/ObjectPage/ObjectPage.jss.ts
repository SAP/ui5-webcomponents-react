import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    whiteSpace: 'normal',
    fontFamily: parameters.sapUiFontFamily,
    backgroundColor: parameters.sapUiBaseBG,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      backgroundColor: '#ffffff',
      width: '12px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#949494',
      '&:hover': {
        backgroundColor: '#8c8c8c'
      }
    },
    '&::-webkit-scrollbar-corner': {
      backgroundColor: '#ffffff'
    }
  },
  contentContainer: {
    overflowX: 'hidden',
    overflowY: 'visible',
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
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    boxShadow: `inset 0 -0.0625rem ${parameters.sapUiObjectHeaderBorderColor}, inset 0 0.0625rem ${parameters.sapUiObjectHeaderBorderColor}`,
    display: 'flex',
    height: '2.75rem',
    minHeight: '2.75rem',
    position: 'sticky',
    zIndex: 1
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
    // overflow: 'hidden',
    backgroundColor: parameters.sapUiBaseBG,
    '&:after': {
      clear: 'both',
      display: 'table',
      content: '""'
    }
  },
  fillerDiv: {
    backgroundColor: parameters.sapUiBaseBG
  },
  // header
  header: {
    flexShrink: 0,
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    position: 'sticky',
    top: 0,
    zIndex: 1
  },
  contentHeader: {
    backgroundColor: parameters.sapUiObjectHeaderBackground,
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
    color: parameters.sapUiBaseText
  },
  subTitle: {
    display: 'inline-block',
    wordBreak: 'break-word',
    verticalAlign: 'baseline',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    color: parameters.sapUiContentLabelColor
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
  anchorBarActionButton: {
    position: 'absolute',
    '--_ui5_button_compact_height': '1.375rem',
    '--_ui5_button_base_height': '1.375rem',
    '--_ui5_button_base_min_compact_width': '1.375rem',
    top: `-0.6875rem`,
    marginLeft: `-0.6875rem`,
    left: '50%'
  },
  anchorBarActionButtonExpandable: {},
  anchorBarActionButtonPinnable: {},
  anchorBarActionPinnableAndExandable: {
    '&$anchorBarActionButtonPinnable': {
      marginLeft: '0.25rem'
    },
    '&$anchorBarActionButtonExpandable': {
      marginLeft: '-1.75rem'
    }
  }
});

export default styles;
