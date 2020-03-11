import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const style = {
  notificationContainer: {
    width: '100%',
    maxWidth: '60rem',
    backgroundColor: ThemingParameters.sapUiListBackground,
    boxShadow: ThemingParameters.sapUiShadowLevel0,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: ThemingParameters.sapUiListHoverBackground
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapUiListHoverBackground
    }
  },
  notificationContainerChild: {
    backgroundColor: ThemingParameters.sapUiListHeaderBackground
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: `inset 0 -0.0625rem ${ThemingParameters.sapUiPageHeaderBorderColor}`,
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
    color: ThemingParameters.sapUiGroupTitleTextColor,
    fontFamily: ThemingParameters.sapUiFontHeaderFamily,
    textShadow: ThemingParameters.sapUiShadowText,
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
    color: ThemingParameters.sapUiContentLabelColor,
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
    color: ThemingParameters.sapUiContentLabelColor
  },
  metadata: {
    paddingTop: '0.375rem',
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    color: ThemingParameters.sapUiContentLabelColor,
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
  high: { backgroundColor: ThemingParameters.sapUiErrorBorder },
  medium: { backgroundColor: ThemingParameters.sapUiWarningBorder },
  low: { backgroundColor: ThemingParameters.sapUiSuccessBorder },
  none: { backgroundColor: ThemingParameters.sapUiNeutralBorder },
  semanticIcon: {
    paddingRight: '0.375rem',
    width: '1rem',
    display: 'flex'
  },
  error: {
    color: ThemingParameters.sapUiNegativeElement
  },
  warning: {
    color: ThemingParameters.sapUiCriticalElement
  },
  success: {
    color: ThemingParameters.sapUiPositiveElement
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
