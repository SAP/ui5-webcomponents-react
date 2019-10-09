import { JSSTheme } from '../../interfaces/JSSTheme';
import { ZIndex } from '../../enums/ZIndex';

const styles = ({ parameters }: JSSTheme) => ({
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
    whiteSpace: 'normal',
    fontFamily: parameters.sapUiFontFamily,
    backgroundColor: parameters.sapUiBaseBG
  },
  contentContainer: {
    overflow: 'hidden auto',
    height: '100%',
    position: 'relative',
    flexGrow: 1
  },
  outerContentContainer: {
    width: '100%',
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
    minHeight: '2.75rem'
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
  outerScrollbar: {
    position: 'absolute',
    width: '12px',
    right: 0,
    overflow: 'hidden',
    height: '100%',
    zIndex: ZIndex.ResponsivePopover,
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    '& ::-webkit-scrollbar': {
      backgroundColor: '#ffffff',
      '&:vertical': {
        width: '0.75rem'
      }
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#949494',
      '&:hover': {
        backgroundColor: '#8c8c8c'
      }
    },
    '& ::-webkit-scrollbar-corner': {
      backgroundColor: '#ffffff'
    }
  },
  innerScrollbar: {
    width: '24px',
    marginLeft: '-12px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: '100%'
  },
  scrollbarContent: {
    width: '12px'
  },
  // header
  header: {
    flexShrink: 0,
    position: 'relative',
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    '&$stickied': {
      '& $image': {
        opacity: '1',
        height: '3rem',
        width: '3rem',
        margin: '0.25rem 1rem 0.25rem 0'
      }
    },
    paddingRight: '12px'
  },
  contentHeader: {
    backgroundColor: parameters.sapUiObjectHeaderBackground
  },
  titleBar: {
    padding: '1.5rem 2rem',
    display: 'block',
    position: 'relative'
  },
  container: {
    display: 'inline-block',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    width: '70%',
    boxSizing: 'border-box',
    paddingTop: '1.5rem'
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
    fontSize: '0.875rem',
    color: parameters.sapUiContentLabelColor
  },
  actions: {
    position: 'absolute',
    top: '0',
    paddingTop: '0.75rem',
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
  image: {
    height: '0',
    width: '0',
    opacity: '0',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  headerContent: {
    paddingTop: '1.5rem',
    paddingBottom: '0.25rem',
    transition: 'max-height 0.5s',
    maxHeight: '500px',
    overflow: 'hidden',
    paddingLeft: '2rem',
    position: 'relative'
  },
  headerCustomContent: {
    display: 'inline-block',
    verticalAlign: 'top',
    '& > *': {
      marginRight: '2rem',
      marginBottom: '1rem',
      lineHeight: '1.5rem'
    }
  },
  headerImage: {
    maxWidth: '5rem',
    maxHeight: '5rem',
    display: 'inline-block',
    marginRight: '2rem',
    marginBottom: '1rem'
  }
});

export default styles;
