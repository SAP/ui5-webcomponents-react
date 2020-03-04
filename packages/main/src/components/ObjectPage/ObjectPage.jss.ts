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
  // header
  header: {
    flexShrink: 0,
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    position: 'sticky',
    top: 0,
    zIndex: 2
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
  }
});

export default styles;
