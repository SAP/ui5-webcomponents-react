import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const style = {
  notificationContainer: {
    width: '100%',
    maxWidth: '60rem',
    backgroundColor: ThemingParameters.sapList_Background,
    boxShadow: ThemingParameters.sapContent_Shadow0,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_Background
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapList_Hover_Background
    }
  },
  notificationContainerChild: {
    backgroundColor: ThemingParameters.sapList_HeaderBackground
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapPageHeader_BorderColor}`,
    padding: '1rem 0 1rem 1.25rem',
    alignItems: 'center'
  },
  titleEllipsised: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineHeight: '15px',
    maxHeight: '30px' /* height * number of lines */,
    WebkitLineClamp: 2 /* number of lines to show */,
    WebkitBoxOrient: 'vertical',
    paddingRight: '40px'
  },
  title: {
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontFamily: ThemingParameters.sapFontHeaderFamily,
    textShadow: ThemingParameters.sapContent_TextShadow,
    fontSize: '14px',
    paddingRight: '40px'
  },
  closeButton: {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem'
  },
  content: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width: 600px)': {
      maxWidth: '60%',
      paddingRight: '1rem'
    },
    '@media (max-width: 599px)': {
      width: '100%'
    }
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    paddingRight: '0.375rem'
  },
  descriptionEllipsised: {
    color: ThemingParameters.sapContent_LabelColor,
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineHeight: '15px',
    maxHeight: '30px' /* height * number of lines */,
    WebkitLineClamp: '2' /* number of lines to show */,
    WebkitBoxOrient: 'vertical'
  },
  descriptionFull: {
    color: ThemingParameters.sapContent_LabelColor
  },
  metadata: {
    paddingTop: '0.375rem',
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    color: ThemingParameters.sapContent_LabelColor,
    fontWeight: 'normal',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden'
  },
  separator: {
    margin: '0 0.5rem 0 0.5rem'
  },
  priorityIndicator: {
    width: '0.375rem',
    minWidth: '0.375rem',
    height: 'auto'
  },
  high: { backgroundColor: ThemingParameters.sapErrorBorderColor },
  medium: { backgroundColor: ThemingParameters.sapWarningBorderColor },
  low: { backgroundColor: ThemingParameters.sapSuccessBorderColor },
  none: { backgroundColor: ThemingParameters.sapNeutralBorderColor },
  semanticIcon: {
    paddingRight: '0.375rem',
    width: '1rem',
    display: 'flex'
  },
  error: {
    color: ThemingParameters.sapNegativeElementColor
  },
  warning: {
    color: ThemingParameters.sapCriticalElementColor
  },
  success: {
    color: ThemingParameters.sapPositiveElementColor
  },
  contentAction: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (min-width: 600px)': {
      justifyContent: 'space-between'
    },
    justifyContent: 'flex-end'
  },
  footer: {
    '@media (min-width: 600px)': {
      maxWidth: '40%',
      alignSelf: 'flex-end'
    },
    maxWidth: '100%',
    padding: '0 0.5rem 0.5rem 0'
  },
  showGroup: {
    paddingLeft: '1rem',
    alignSelf: 'flex-start'
  }
};

export default style;
